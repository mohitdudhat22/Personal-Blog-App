import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const data = {
            email: email.value,
            password: password.value
        }
        console.log(password.value);
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            // Assuming the API returns a token on successful login
            const user = response.data;
            // Store the token in localStorage
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', JSON.stringify(user.token));

            // Redirect to home page
            navigate('/dashboard');
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    }

    return (
        <div className='bg-gray-100 h-screen flex justify-center items-center'>
            <div className="bg-white p-10 rounded-lg">
                <div className="text-center text-3xl text-gray-700 mb-2">
                    Login
                </div>
                {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                <div className="flex justify-center items-center">
                    <form onSubmit={loginHandler}>
                        <div className="w-96">
                            <div className="flex flex-col mb-2">
                                <label className="text-gray-700">Email</label>
                                <input type="email" name='email' className="border border-gray-300 px-2 py-1 rounded" required aria-required/>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label className="text-gray-700">Password</label>
                                <input type="password" name='password' className="border border-gray-300 px-2 py-1 rounded" required aria-required/>
                            </div>
                            <div className="flex flex-col mb-2">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
                <p className='text-center'> don`t you have your account ? <Link className='text-blue-600 font-bold' to={`/signup`}>Signup</Link> </p>
            </div>  
        </div>
    )
}
