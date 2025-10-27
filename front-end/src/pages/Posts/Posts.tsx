import { useState } from "react";
import { addPost } from "../../api/posts";

function Posts() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addPost({ title: form.title, content: form.content });
      alert("Post crée avec succès");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
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
