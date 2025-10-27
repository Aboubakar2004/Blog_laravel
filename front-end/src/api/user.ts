const API_URL = "http://127.0.0.1:8000/api";
import axios from "axios";

export async function getUserInfo() {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${API_URL}/user/name`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
