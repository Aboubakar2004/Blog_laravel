import { useState } from "react";

function Posts() {
  const [form, setForm] = useState({ title: "", content: "" });
  return (
    <div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Titre</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Contenue</label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            ></textarea>
          </div>
          <input type="submit" value={"Poster"} />
        </form>
      </div>
    </div>
  );
}

export default Posts;
