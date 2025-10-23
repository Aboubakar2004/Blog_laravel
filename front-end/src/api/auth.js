const API_URL = "http://127.0.0.1:8000/api";
import axios from "axios";

export async function registerUser({ name, email, password }) {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
