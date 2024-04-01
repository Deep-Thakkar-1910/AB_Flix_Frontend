import axios from "axios";
const BASE_URL = "https://flixbackend.onrender.com";
export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" }
});
