import { useState } from "react";
import { addPost } from "../../api/posts";

function Posts() {
  const [form, setForm] = useState({ title: "", content: "" });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await addPost({ title: form.title, content: form.content });
      alert("Post crée avec succès");
      setForm({ title: "", content: "" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-6 flex flex-col gap-5 ">
      <h1 className="text-2xl font-bold  ">
        Poster
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-7 flex flex-col gap-3">
          <div>
            <label htmlFor="">Titre</label>
            <input
              className="border border-gray-400 bg-gray-200 p-1 rounded-lg w-full"
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
              className="border border-gray-400 bg-gray-200 p-1 rounded-lg w-full h-[690px] resize-none overflow-hidden" ></textarea>
          </div>
          <input type="submit" value={"Poster"} className="px-7 p-1 rounded-lg bg-blue-400  text-white hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer "/>
        </form>
      </div>
    </div>
  );
}

export default Posts;
