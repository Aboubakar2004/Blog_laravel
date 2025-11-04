import { logoutUser } from "../api/auth";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserInfo } from "../api/user";
import type { UserType } from "../interface/User";

function Header() {
  const [userData, setUserData] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await logoutUser();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo();
        setUserData(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    return () => {
      fetchData();
    };
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-[100px]">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        ) : userData?.name ? (
          <div className="flex justify-between bg-[#F7F3E3] p-5 rounded-2xl items-center">
            <div className="flex gap-3">
              <button
                onClick={handleSubmit}
                className="cursor-pointer p-2.5 px-5 rounded-lg bg-red-400 h-[50px]  text-white hover:bg-red-500 transition duration-300 ease-in-out  "
              >
                <MdLogout />
              </button>
              <h1 className="p-2.5 px-5 rounded-lg bg-white text-black h-[50px] ">
                {userData?.name}
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Brog</h1>
            </div>
            <div className="flex gap-3 items-center">
              <button className="p-2.5 rounded-lg bg-blue-400 w-[120px] h-[50px] text-white hover:bg-blue-500 transition duration-300 ease-in-out ">
                <Link to={"/posts"}>Poster</Link>
              </button>
              <button className="p-2.5 rounded-lg bg-yellow-400 w-[120px] h-[50px] text-white hover:bg-yellow-500 transition duration-300 ease-in-out ">
                <Link to={"/userposts"}>Mes posts</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between bg-[#F7F3E3] p-5 rounded-2xl items-center">
            <div>
              <h1 className="text-2xl font-bold">Brog</h1>
            </div>
            <div className="flex gap-5">
              <button className="p-2.5 rounded-lg bg-green-400 w-[120px] h-[50px] text-white hover:bg-green-500 transition duration-300 ease-in-out  ">
                <Link to={"/login"}>Se connecter</Link>
              </button>
              <button className="p-2.5 rounded-lg bg-black w-[120px] h-[50px] text-white hover:bg-white hover:text-black transition duration-300 ease-in-out ">
                <Link to={"/register"}>S'inscrire</Link>
              </button>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Header;
