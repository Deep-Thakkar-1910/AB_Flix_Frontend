import axios from "../api/axios";
import { useAuth } from "./useAuth";

const useRefresh = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    // function to hit the refresh endpoint to get a new access token
    const response = await axios.get("/user/refresh", {
      withCredentials: true,
    });
    /*  
      setting the new access token in the auth context and 
      keeping the previosly existing email as it is 
      */
    setAuth((prev) => {
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};
export { useRefresh };
