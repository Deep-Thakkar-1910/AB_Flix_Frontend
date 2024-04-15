import axios from "axios";
const BASE_URL = "https://ab-flix-frontend.onrender.com";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});
