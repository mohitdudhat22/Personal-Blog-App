import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Edit() {
   const navigate = useNavigate();
    const {id} = useParams();

    const blogs = JSON.parse(localStorage.getItem('blogs')) || []
    const blog = blogs.find(blog => blog.id == id);
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.isLogin);
    const handleUpdate = (e) => {
        e.preventDefault();
        // only can update create by name otherwise can not update 
        if(user.username === blog.name){
            const title = e.target.title.value;
            const description = e.target.description.value; 
            let updateBlog = {...blog, title , description};
            const blogs = JSON.parse(localStorage.getItem('blogs')) || []
            const index = blogs.findIndex(blog => blog.id == id);
            blogs[index] = updateBlog;
            localStorage.setItem('blogs', JSON.stringify(blogs));
            // window.location.href = '/';
            navigate('/');
            
        }else{
            alert('You can not update this post');
        }
    }
  return (
    <Layout>
         <div className='bg-gray-100 py-10 flex justify-center items-center'>
            <div className="bg-white p-10 rounded-lg">
            <div className="text-center text-3xl text-gray-700 mb-2">
                {blog.title}
            </div>
            <div className="flex justify-center items-center">
                <form onSubmit={handleUpdate}>
                    <div className="w-96">
                        <div className="flex flex-col mb-2">
                        <label className="text-gray-700">Title</label>
                        <input type="text" name='title' defaultValue={blog.title} className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required  />
                        </div>
                        <div className="flex flex-col mb-2">
                        <label className="text-gray-700">Description</label>
                        <textarea cols="30" rows="5" name="description" defaultValue={blog.description} className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required ></textarea>
                        </div>
                        <div className="flex flex-col mb-2">
                        <button  className="bg-green-500 text-white px-2 py-1 rounded capitalize">Update post</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </Layout>
  )
}
