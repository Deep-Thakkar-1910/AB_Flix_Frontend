import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const RequireAuthRoutes = () => {
  // this is for requiring authentication for the routes
  // if no email(user) is found then they will be redirected to the login page
  const { auth } = useAuth();
  const location = useLocation();
  return auth.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};

export default RequireAuthRoutes;
