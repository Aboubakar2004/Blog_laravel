import { useEffect, useState } from "react";
import { showUserPost } from "../../api/posts";

function UserPost() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showUserPost();
        setPostsData(data);
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
        postsData.post?.map((item: object, index: number) => (
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
