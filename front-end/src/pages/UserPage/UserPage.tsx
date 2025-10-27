import { useEffect, useState } from "react";
import { getUserInfo } from "../../api/user";
import { Link } from "react-router-dom";
import { logoutUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo();
        setUserData(data);
        console.log(data);
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        {loading ? (
          <h1>Chargement ...</h1>
        ) : (
          <div>
            <h1>Bonjour {userData?.user.name}</h1>
            <button onClick={handleSubmit}>Déconnexion</button>
            <Link to={"/posts"}>
              <button>Faire un post</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
