import { useEffect, useState } from "react";
import { deletePost, showUserPost } from "../../api/posts";
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

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      setPostsData((prevPost) => prevPost.filter((post) => post.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {loading ? (
        <h1>Chargement ...</h1>
      ) : postsData.length === 0 ? (
        <h1>Commencez à poster </h1>
      ) : (
        postsData?.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h2>{item.content}</h2>
            <button onClick={() => handleDelete(item.id)}>Supprimer</button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserPost;
