import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import timeAgo from '../utilis/timeAgo'
import axios from 'axios';

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/getAllUsers`);
        console.log('All users:', response.data);
        setUsers(response.data);
        localStorage.setItem('users', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const getAllPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${postId}`, {
        withCredentials: true
      });
      // Remove the deleted post from the state
      setBlogs(blogs.filter(blog => blog._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      setError('Failed to delete post. Please try again.');
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts = await getAllPosts();
        setBlogs(fetchedPosts);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(search.toLowerCase()) || 
    blog.content.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <div className='bg-gray-100 py-10'>
        <div className="container mx-auto px-4">
          <div className="flex justify-between flex-col md:flex-row space-y-3 items-center py-2">
            <h2 className="text-2xl font-semibold capitalize">All Posts <span className='text-base text-gray-600'>({blogs.length})</span></h2>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center ">
                <svg className="h-5 w-8 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <input 
                type="text" 
                onChange={handleChange} 
                value={search} 
                name='search' 
                className="w-64 pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline" 
                placeholder="Search Post" 
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-3">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map(blog => (
                <div className="w-full md:w-1/3 px-4 mb-4" key={blog._id}>
                  <div className="bg-white rounded-lg">
                    <div className="p-4">
                      {/* Placeholder for image */}
                      <div className="h-48 w-full rounded-lg bg-gray-300 mb-4 flex items-center justify-center text-gray-500">
                        Image Placeholder
                      </div>
                      <div className="flex justify-between">
                        <h4 className="text-xl font-semibold mb-2 capitalize">{blog.title.slice(0, 22)}</h4>
                        <p className="text-gray-700 text-base">{timeAgo(blog.createdAt)}</p>
                      </div>
                      <p className="text-gray-700 text-base">{blog.content.slice(0, 40)}...</p>
                      <div className="flex items-center mt-4">
                        <div className="bg-gray-300 w-10 h-10 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-gray-600 font-bold">{blog.author ? blog.author[0] : 'U'}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold">{blog.author || 'Unknown'}</span></p>
                        </div>
                      </div>
                  
                      <div className="flex justify-end items-center mt-4">
                      <button 
                            onClick={() => deletePost(blog._id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm mr-3"
                          >
                            Delete
                          </button>
                        <Link to={`/blog/${blog._id}`} className="text-green-500 hover:underline">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full text-center text-2xl">No Posts Found</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}