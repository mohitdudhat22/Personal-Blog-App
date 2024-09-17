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
    const user = localStorage.getItem('user');

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/posts`, {
        title,
        content,
        author: user?.username || "mohit",
      }, {
        headers: {
          'Content-Type': 'application/json',
          // The cookie header is typically handled automatically by the browser
          // If you need to set it manually, you'd do it like this:
          'Cookie': 'user=j%3A%7B%22id%22%3A%2266e9c355f5b8e983a91c68d4%22%2C%22email%22%3A%22johndoeadmiasasdfdn%40example.com%22%2C%22password%22%3A%22%242b%2410%247SsIyQpvfTHiTItvXP0HlOE4vRsvzS7.tz7lkYmehqLQG2Upd6UbW%22%7D'
        },
        withCredentials: true // This is important for sending cookies
      });
      console.log('Blog created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating blog:', error);
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