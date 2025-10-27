const API_URL = "http://127.0.0.1:8000/api";
import axios from "axios";

export async function addPost({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      `${API_URL}/posts`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function showUserPost() {
  try {
    const token = localStorage.getItem("token");
    const userid = localStorage.getItem("user_id");
    const response = await axios.get(`${API_URL}/posts/${userid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePost(postId: number) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_URL}/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
