import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"
import Edit from "./pages/Edit"
import Success from "./pages/Success"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([]);
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

    fetchUsers();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App