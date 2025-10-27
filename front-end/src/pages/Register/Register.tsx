import { useState } from "react";
import { registerUser } from "../../api/auth";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nom d'utilisateur</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Mot de passe</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <input type="submit" value={"S'inscrire"} />
        </form>
      </div>
    </div>
  );
}

export default Register;
