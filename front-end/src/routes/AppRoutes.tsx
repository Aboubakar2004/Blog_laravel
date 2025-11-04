import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import UserPost from "../pages/UserPosts/UserPost";
import Login from "../pages/Login/Login";
import Posts from "../pages/Posts/Posts";
import Home from "../pages/Home/Home";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userposts" element={<UserPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
