import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import timeAgo from '../utilis/timeAgo'
import axios from 'axios';

export default function Dashboard() {
  const [blogs, setBlogs] = useState([] || localStorage.getItem('blogs'));
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const [users, setUsers] = useState([]);

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
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const fetchedPosts = await getAllPosts();
        setBlogs(fetchedPosts);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(search.toLowerCase()) || 
    blog.content.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;

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
                  <div className="bg-white rounded-lg shadow h-full flex flex-col">
                    <div className="p-4 flex-grow flex flex-col">
                      {/* Placeholder for image */}
                      {blog.image ? (
                        <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover rounded-lg mb-4" />
                      ) : (
                        <div className="h-48 w-full rounded-lg bg-gray-300 mb-4 flex items-center justify-center text-gray-500">
                          Image Placeholder
                        </div>
                      )}
                      <div className="flex justify-between mb-2">
                        <h4 className="text-xl font-semibold capitalize truncate">{blog.title}</h4>
                        <p className="text-gray-700 text-sm">{timeAgo(blog.createdAt)}</p>
                      </div>
                      <p className="text-gray-700 text-base mb-4 flex-grow">{blog.content.slice(0, 100)}...</p>
                      <div className="flex items-center mt-auto">
                        <div className="bg-gray-300 w-10 h-10 rounded-full mr-3 flex items-center justify-center">
                          <span className="text-gray-600 font-bold">{blog.author ? blog.author[0] : 'U'}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold">{blog.author || 'Unknown'}</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <div className="flex justify-end items-center">
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