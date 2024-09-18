import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Blogs() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBlog = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    const title = e.target.title.value;
    const content = e.target.content.value;
    const userString = localStorage.getItem('user');
    let user;
  
    try {
      user = JSON.parse(userString);
    } catch (error) {
      console.error('Error parsing user data:', error);
      setError('Invalid user data. Please log in again.');
      setIsLoading(false);
      return;
    }
  console.log(user);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/posts`, {
        title,
        content,
        author: user?.username || "Anonymous",
        userId: user?.id || "default_id",
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      });
      console.log('Blog created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error.response ? error.response.data : error.message);
      setError('Failed to create blog. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Layout>
      <div className='bg-gray-100 py-10 flex justify-center items-center'>
        <div className="bg-white p-10 rounded-lg">
          <div className="text-center text-3xl text-gray-700 mb-2">
            Create Blog
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleBlog}>
              <div className="w-96">
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Title</label>
                  <input type="text" name='title' className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Content</label>
                  <textarea name="content" className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required></textarea>
                </div>

                <div className="flex flex-col mb-2">
                  <button type="submit" disabled={isLoading} className="bg-green-500 text-white px-2 py-1 rounded capitalize">
                    {isLoading ? 'Creating...' : 'Create post'}
                  </button>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}