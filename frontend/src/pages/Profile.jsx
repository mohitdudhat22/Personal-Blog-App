import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import timeAgo from '../utilis/timeAgo';
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = JSON.parse(localStorage.getItem('user')) || {};
  console.log(user , "this is user");
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogs')) || []);

  const logoutHandler = () => {
    if (user) {
      user.isLogin = false;
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    navigate('/')
  }

  const getAllPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/posts`);
  
      console.log('API response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };

  const deletePost = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      await axios.delete(`${import.meta.env.VITE_API_URL}/api/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Update the local state after successful deletion
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }
    
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/getAllUserPosts/${user.userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        console.log('API response:', response.data);
        setBlogs(response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col space-y-2 md:flex-row py-10 bg-gray-100 space-x-3">
        <div className="mx-4 flex flex-col justify-center items-center basis-3/12 bg-white rounded-md space-y-3 py-4 px-4">
          {user?.profile ? (
            <img src={user.profile} alt="avatar" className="w-40 h-40 rounded-full object-cover" />
          ) : (
            <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-4xl font-bold">
              {user?.username?.slice(0, 2).toUpperCase()}
            </div>
          )}
          <h2 className='text-2xl font-bold capitalize'>{user?.username}</h2>
          <p className='text-gray-400'>{user?.email}</p>
          <button onClick={logoutHandler} className="bg-red-500 hover:bg-red-600 text-white py-2 px-7 rounded-md">Logout</button>
        </div>
        <div className="basis-9/12">
          <div className="flex justify-between px-4 py-2">
            <h1 className="text-3xl font-semibold text-gray-700 mb-2">Your Blogs
              <span className='text-base text-gray-600'>({blogs.filter(blog => blog?.author === user?.username).length})</span>
            </h1>
            <Link to="/blogs" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">Create Post</Link>
          </div>
          <div className="flex flex-wrap">
            {blogs.map(blog => {
              const { _id, author, title, content, image, profile, createdAt } = blog || {}
              if (author === user?.username) {
                return (
                  <div className="w-full md:w-1/3 px-4 mb-4" key={_id}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="p-4">
                        {image ? (
                          <img loading='lazy' className='h-48 w-full rounded-lg object-cover' src={image} alt="blog image" />
                        ) : (
                          <div className="h-48 w-full rounded-lg bg-gray-300 flex items-center justify-center text-gray-600">No Image</div>
                        )}
                        <div className="flex justify-between mt-2">
                          <h4 className="text-xl font-semibold mb-2 capitalize">{title?.slice(0, 18)}</h4>
                          <p className="text-gray-700 text-base">{timeAgo(createdAt)}</p>
                        </div>
                        <p className="text-gray-700 text-base">{content?.slice(0, 40)}</p>
                        <div className="flex items-center mt-4">
                          {profile ? (
                            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: `url(${profile})` }}></div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center text-gray-600 font-bold">
                              {author?.slice(0, 2).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold">{author}</span></p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center mt-4">
                          <Link to={`/blog/${_id}`} className="text-green-500 hover:text-green-600 font-semibold transition-colors duration-300 mr-2">
                            Read More
                          </Link>
                          <div className="space-x-2">
                            <Link 
                              to={`/blogs?edit=${_id}`} 
                              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm transition-colors duration-300"
                            >
                              Edit
                            </Link>
                            <button onClick={() => deletePost(_id)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-sm transition-colors duration-300">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile;
