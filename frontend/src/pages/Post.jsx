import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import timeAgo from '../utilis/timeAgo';

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setIsLoading(true);
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
                if (error.response && error.response.status === 404) {
                    setError('Post not found');
                } else {
                    setError('Error fetching post');
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
    if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
    if (!post) return null;

    return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen flex items-stretch">
            <article className="w-full max-w-4xl mx-auto bg-white shadow-xl flex flex-col">
                <header className="px-8 py-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex-shrink-0">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <div className="bg-white text-cyan-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-2 border-cyan-400">
                            <span className="font-bold text-2xl">{post.author ? post.author[0].toUpperCase() : 'U'}</span>
                        </div>
                        <div>
                            <p className="font-medium text-xl capitalize mb-1">
                                By <span className="font-semibold">{post.author || 'Unknown'}</span>
                            </p>
                            <p className="text-blue-100 flex items-center space-x-2">
                                <span>{timeAgo(post.createdAt)}</span>
                                <span>•</span>
                                <span>{post.readTime || '5 min read'}</span>
                            </p>
                        </div>
                    </div>
                </header>
                <div className="px-8 py-12 flex-grow overflow-y-auto">
                    {post.imageUrl ? (
                        <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-64 object-cover rounded-lg mb-8 shadow-md"
                        />
                    ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center rounded-lg mb-8 shadow-md">
                            <svg className="w-24 h-24 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-800 leading-relaxed">{post.content}</p>
                    </div>
                </div>
                <footer className="px-8 py-6 bg-gradient-to-r from-green-50 to-teal-50 flex-shrink-0">
                    <div className="flex justify-between items-center text-sm text-teal-800">
                        <div>
                            Published on {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                            {post.category || 'Uncategorized'}
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}