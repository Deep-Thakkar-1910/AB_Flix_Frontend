import { useEffect, useState } from "react";
import { useRefresh } from "../hooks/useRefresh";
import { useAuth } from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefresh();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    !auth.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);
  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
