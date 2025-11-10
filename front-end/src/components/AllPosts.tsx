import { useEffect, useState } from "react";
import { showAllPost } from "../api/posts";
import type { Posts } from "../interface/Posts";

function AllPosts() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showAllPost();
        setPosts(data.post);
        console.log(data.post);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-8">
        {loading ? (
          <h1>Chargement ...</h1>
        ) : (
          posts.map((item, index) => (
            <div
              key={index}
              className="p-5 border border-gray-300 shadow-sm rounded-lg "
            >
              <h1 className="text-2xl bg-blue-400 rounded-lg p-2 text-white w-fit">
                {item.user.name}
              </h1>
              <h2 className="text-xl font-medium">{item.title}</h2>
              <h3 className="text-sm font-normal">{item.content}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllPosts;
