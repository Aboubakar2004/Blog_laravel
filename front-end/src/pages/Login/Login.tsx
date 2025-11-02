import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterImage from "../../assets/images/6881987.jpg";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await loginUser({
        email: form.email,
        password: form.password,
      });
      if (data.token && data.user_id) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);
        navigate("/userpage");
      }
      setMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center h-screen bg-[#F49390]">
      <div className="w-1/2 h-full ">
        <img
          src={RegisterImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex justify-center gap-10 items-center h-full flex-col">
        <div>
          <h1 className="text-5xl font-bold">Brog</h1>
        </div>
        <div className="flex flex-col gap-10  rounded-lg p-10 shadow-lg border border-gray-300 bg-white  ">
          <div className="flex justify-between">
            <h1 className="text-xl">Se connecter</h1>
            <Link to={"/register"} className="text-xl text-blue-600 ">
              S'inscrire
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-9  "
          >
            <div className="flex flex-col">
              <input
                type="email"
                value={form.email}
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="p-2.5 rounded-lg bg-gray-100 border border-gray-400 shadow-xs w-[400px]"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                value={form.password}
                placeholder="Mots de passe"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="p-2.5 rounded-lg bg-gray-100 border border-gray-400 shadow-xs w-[400px]"
              />
            </div>
            <input
              type="submit"
              value={"Se connecter"}
              className="p-2.5 rounded-lg bg-green-400 w-[400px] text-white hover:bg-green-500 transition duration-300 ease-in-out "
            />
            {message && <h1 className="text-red-500">{message}</h1>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
