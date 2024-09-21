import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import timeAgo from '../utilis/timeAgo';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center mb-4">
          <div className="bg-gray-300 w-10 h-10 rounded-full mr-3 flex items-center justify-center">
            <span className="text-gray-600 font-bold">{post.author ? post.author[0].toUpperCase() : 'U'}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold">{post.author || 'Unknown'}</span></p>
            <p className="text-gray-500 text-sm">{timeAgo(post.createdAt)}</p>
          </div>
        </div>
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        ) : (
          <div className="h-64 w-full rounded-lg bg-gray-300 mb-6 flex items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        )}
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
  );
}