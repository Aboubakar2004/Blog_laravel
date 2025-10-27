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
