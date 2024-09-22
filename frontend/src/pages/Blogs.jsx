import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Blogs() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const editPostId = searchParams.get('edit');
    if (editPostId) {
      setIsEditing(true);
      setEditId(editPostId);
      fetchPost(editPostId);
    }
  }, [location]);

  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to fetch post. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

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

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', user?.username || "Anonymous");
    if (image) {
      formData.append('image', image);
    }

    try {
      if (isEditing) {
        await axios.put(`${import.meta.env.VITE_API_URL}/api/posts/${editId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true
        });
        console.log('Blog updated');
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/api/posts`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          withCredentials: true
        });
        console.log('Blog created');
      }
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving blog:', error.response ? error.response.data : error.message);
      setError('Failed to save blog. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <div className='bg-gray-100 py-10 flex justify-center items-center'>
        <div className="bg-white p-10 rounded-lg">
          <div className="text-center text-3xl text-gray-700 mb-2">
            {isEditing ? 'Edit Blog' : 'Create Blog'}
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="w-96">
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Title</label>
                  <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" 
                    required 
                    aria-required 
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Content</label>
                  <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" 
                    required 
                    aria-required
                  ></textarea>
                </div>
                <div className="flex flex-col mb-2">
                  <label className="text-gray-700">Image</label>
                  <input 
                    type="file" 
                    onChange={(e) => setImage(e.target.files[0])}
                    className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" 
                    accept="image/*"
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <button type="submit" disabled={isLoading} className="bg-green-500 text-white px-2 py-1 rounded capitalize">
                    {isLoading ? 'Saving...' : (isEditing ? 'Update post' : 'Create post')}
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