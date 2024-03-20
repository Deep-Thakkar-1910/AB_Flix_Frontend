import axios from "axios";
const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://flixbackend.onrender.com";
export default axios.create({
  baseURL: BASE_URL,
});
