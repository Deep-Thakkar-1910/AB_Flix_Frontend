import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();
  const Logout = () => {
    setAuth({});
    <Navigate to="/login" />;
  };
  return Logout;
};

export { useLogout };
