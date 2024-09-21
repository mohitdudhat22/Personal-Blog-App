import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Blogs from "./pages/Blogs"
import NotFound from "./pages/NotFound"
import Blog from "./pages/Blog"
import Edit from "./pages/Edit"
import Success from "./pages/Success"
import Profile from "./pages/Profile"
import Post from "./pages/Post"

function App() {
  return (
    <Routes>
      <Route path="/blog/:id" element={<Post />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App