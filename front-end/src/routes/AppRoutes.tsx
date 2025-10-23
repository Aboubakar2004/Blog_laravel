import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import UserPost from "../pages/UserPosts/UserPost";
import Login from "../pages/Login/Login";
import Posts from "../pages/Posts/Posts";
import UserPage from "../pages/UserPage/UserPage";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/userposts" element={<UserPost />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
