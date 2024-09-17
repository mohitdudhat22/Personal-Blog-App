import React from 'react'
import Layout from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProfileEdit() {
    const navigate = useNavigate();
    const {id} = useParams(); 
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(user => user.isLogin);
    // if user login id is accepted otherwise not allow 
    if(user.id != id){
        alert('You can not access without login');
        window.location.href = '/';
    }

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // update only username and email other no change
        const username = e.target.name.value;
        const email = e.target.email.value;
        const password = btoa(e.target.password.value);
        // let updatedUser = {...user, username:username , email:email , password:password};
        let updatedUser = {...user, username , email , password};
        // console.log(updatedUser);  
        const users = JSON.parse(localStorage.getItem('users')) || []
        const index = users.findIndex(user => user.id == id);
        users[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
        // window.location.href = '/profile';
        navigate('/profile');

    };
   
    return (
        <Layout>
            <div className='bg-gray-100 py-10 flex justify-center items-center'>
                <div className="bg-white p-10 rounded-lg">
                    <div className="text-center text-3xl text-gray-700 mb-2">
                        Edit Profile {id}
                    </div>
                    <div className="flex justify-center items-center">
                        <form onSubmit={handleProfileUpdate} >
                            <div className="w-96">
                                <div className="flex flex-col mb-2">
                                    <label className="text-gray-700">Title</label>
                                    <input type="text" name='name' defaultValue={user.username} className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="text-gray-700">Email</label>
                                    <input type="email" name="email" defaultValue={user.email} className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="text-gray-700">Password</label>
                                    <input type="text" name="password" defaultValue={atob(user.password)} className="border border-gray-300 px-2 py-1 rounded focus:outline-green-500" required aria-required />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded capitalize">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
