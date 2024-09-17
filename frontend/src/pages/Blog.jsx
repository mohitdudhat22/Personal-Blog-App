import React from 'react'
import Layout from '../components/Layout'
import { Link, useParams } from 'react-router-dom'
import timeAgo from '../utilis/timeAgo';

export default function Blog() {
    const { id } = useParams();
    const blogs = JSON.parse(localStorage.getItem('blogs')) || []
    const blog = blogs.find(blog => blog.id == id)
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.isLogin);

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this post?')) {
            const index = blogs.findIndex(blog => blog.id == id);
            blogs.splice(index, 1);
            localStorage.setItem('blogs', JSON.stringify(blogs));
            window.location.href = '/profile';
        }
    }
    return (
        <Layout>
            {/* display all information */}
            <div className="flex justify-center">
                <div className="w-10/12 p-6 ">
                    <img loading='lazy' className='' src={blog.image} alt="blog image" />
                    <div className="flex justify-between items-center">

                        <div className="flex items-center mt-4">
                            <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: `url(${blog.profile})` }}></div>
                            <div>
                                <p className="font-semibold text-gray-700 text-sm capitalize">By <span className="font-bold"> {blog.name}</span></p>
                            </div>
                        </div>
                        {/* <span className="font-light text-gray-600">{new Date(blog.id).toDateString()}</span> */}
                        <span className="font-light text-gray-600">{timeAgo(blog.id)}</span>
                    </div>
                    <div className="mt-2">
                        <h1 className="text-2xl text-gray-700 font-bold hover:underline capitalize">{blog.title}</h1>
                        <p className="mt-2 text-gray-600">{blog.description}</p>
                    </div>
                    {/* user name and blog created name is same then show otherwise show only blog */}

                    {
                        user ? user.username === blog.name && (
                            <div className="text-right mt-4 space-x-2">
                                <Link to={`/edit/${blog.id}`} className="text-xl font-medium text-indigo-500 capitalize">edit</Link>
                                <button onClick={handleDelete} className="text-xl font-medium text-red-500">Delete</button>
                            </div>
                        ) : null
                    }

                </div>
            </div>
        </Layout>
    )
}
