import { useEffect, useState } from "react";
import { showUserPost } from "../../api/posts";
import type { Posts } from "../../interface/Posts";

function UserPost() {
  const [postsData, setPostsData] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showUserPost();
        setPostsData(data.post);
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
      {loading ? (
        <h1>Chargement ...</h1>
      ) : (
        postsData?.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h2>{item.content}</h2>
          </div>
        ))
      )}
    </div>
  );
}

export default UserPost;
