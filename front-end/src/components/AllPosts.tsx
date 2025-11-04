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
      <div>
        {loading ? (
          <h1>Chargement ...</h1>
        ) : (
          posts.map((item, index) => (
            <div key={index}>
              <h1>{item.user.name}</h1>
              <h2>{item.title}</h2>
              <h3>{item.content}</h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllPosts;
