import axios from "axios";
const BASE_URL = "https://flixbackend.onrender.com";
export default axios.create({
  baseURL: BASE_URL,
});

// a private instance of axios to make requests to the server with httoOnly cookies
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
