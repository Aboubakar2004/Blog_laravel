import { useState } from "react";
import { registerUser } from "../../api/auth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import RegisterImage from "../../assets/images/6881987.jpg";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      navigate("/userpage");
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
            <h1 className="text-xl">S'inscrire</h1>
            <Link to={"/login"} className="text-xl text-blue-600 ">
              Se connecter
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-9  "
          >
            <div className="flex flex-col">
              <input
                type="text"
                value={form.name}
                placeholder="Nom d'utilisateur"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="p-2.5 rounded-lg bg-gray-100 border border-gray-400 shadow-xs w-[400px]"
              />
            </div>
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
              value={"S'inscrire"}
              className="p-2.5 rounded-lg bg-green-400 w-[400px] text-white hover:bg-green-500 transition duration-300 ease-in-out "
            />
          </form>
          <div className="flex flex-col justify-center  ">
            <div className="flex items-center w-full mb-7">
              <div className="grow border-t border-gray-400"></div>
              <span className="mx-3 text-gray-500 text-sm">
                Inscrivez vous avec Google
              </span>
              <div className="grow border-t border-gray-400"></div>
            </div>
            <button className="p-2.5 rounded-lg bg-gray-100 border border-gray-400 shadow-xs w-[400px] flex justify-center items-center gap-5 hover:bg-gray-300 transition duration-300 ease-in-out ">
              <FcGoogle />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
