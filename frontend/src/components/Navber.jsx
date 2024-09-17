import viteLogo from '/vite.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { menus } from '../data/menus';
import { useState, useEffect } from 'react';

export default function Navber() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        console.log(userData);
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const showMenu = () => {
        const menu = document.querySelector('.mobile-menu');
        menu.classList.toggle('hidden');
    }

    const logoutHandler = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    }

    return (
        <div className='sticky top-0 z-10'>
            <nav className="bg-white shadow-lg ">
                <div className="max-w-6xl mx-auto px-2">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* Website Logo */}
                                <Link to="/" className="flex items-center py-4 px-2">
                                    {viteLogo ? (
                                        <img src={viteLogo} alt="Logo" className="h-8 w-8 mr-2 bg-gray-300 rounded" />
                                    ) : (
                                        <div className="h-8 w-8 mr-2 bg-gray-300 rounded flex items-center justify-center text-gray-500 font-bold">
                                            Logo
                                        </div>
                                    )}
                                    <span className="font-semibold text-gray-500 text-lg">BlogWithLocalStorage</span>
                                </Link>
                            </div>
                            {/* Primary Navbar items */}
                            <div className="hidden md:flex items-center space-x-1">
                                {
                                    menus.map((menu) => (
                                        <NavLink
                                            key={menu.id}
                                            to={menu.link}
                                            style={({ isActive }) => {
                                                return {
                                                    borderBottomWidth: isActive ? "4px" : "",
                                                    borderBottomColor: isActive ? "rgb(34 197 94 / 1)" : "",
                                                }
                                            }}
                                            className="py-4 px-2 text-green-500 font-semibold capitalize">
                                            {menu.name}
                                        </NavLink>
                                    ))
                                }
                                {
                                    user &&
                                    <NavLink
                                        to="/profile"
                                        // style={({ isActive }) => {
                                        //     return {
                                        //         borderBottomWidth: isActive ? "4px" : "",
                                        //         borderBottomColor: isActive ? "rgb(34 197 94 / 1)" : "",
                                        //     }
                                        // }}
                                        className={({isActive})=>(isActive?"py-4 px-2 text-green-500 font-semibold hover:text-green-500 transition duration-300 border-b-4 border-green-500":"py-4 px-2 text-green-500 font-semibold hover:text-green-500 transition duration-300")}>
                                        Profile
                                    </NavLink>
                                }

                            </div>
                        </div>
                        {/* Secondary Navbar items */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            {/* if user exist then show logout otherwise show login and signup  */}
                            {user ?
                                <div className="flex items-center space-x-2">
                                    <img src={user.profile} alt="avatar" className="w-8 h-8 rounded-full"/>
                                    {/* <span className="font-semibold uppercase bg-gray-400 text-white w-10 h-10 rounded-full p-2 text-center">{user.username.slice(0, 2)}</span> */}
                                    <span className="text-gray-500 font-semibold capitalize">{user.username}</span>
                                    <button onClick={logoutHandler} className="bg-green-500 text-white px-2 py-1 rounded">Logout</button>
                                </div>
                                :
                                <>
                                    <Link to="/login" rel="noreferrer" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                                    <Link to="/signup" rel="noreferrer" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                                </>
                            }

                            {/* <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link> */}
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={showMenu} className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    x-show="!showMenu"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className="hidden mobile-menu">
                    <ul className="">
                        {
                            menus.map((menu) => (
                                <li key={menu.id} className="py-2">
                                    <NavLink
                                        to={menu.link}
                                        style={({ isActive }) => {
                                            return {
                                                borderBottomWidth: isActive ? "4px" : "",
                                                borderBottomColor: isActive ? "rgb(34 197 94 / 1)" : "",
                                            }
                                        }}
                                        className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
                                    >
                                        {menu.name}
                                    </NavLink>
                                </li>
                            ))


                        }
                        {
                            user && <li className="py-2">
                                <Link to="/profile" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">Profile</Link>
                            </li>
                        }
                        {user ?
                            <div className="flex items-center space-x-2 py-4">
                                {/* <img src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256" alt="avatar" className="w-8 h-8 rounded-full"/> */}
                                <span className="font-semibold uppercase bg-gray-400 text-white rounded-full p-2">{user?.username?.slice(0, 2)}</span>
                                <span className="text-gray-500 font-semibold capitalize">{user.username}</span>
                                <button onClick={logoutHandler} className="bg-green-500 text-white px-2 py-1 rounded">Logout</button>
                            </div>
                            :
                            <div className='pb-4 space-x-2'>
                                <Link to="/login" rel="noreferrer" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                                <Link to="/signup" rel="noreferrer" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                            </div>
                        }
                        {/* <li className=""><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">About</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">Blog</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">Contact Us</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">Log In</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300">Sign Up</a></li> */}
                    </ul>
                </div>


            </nav>
        </div>
    )
}
