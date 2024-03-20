import { axiosPrivate } from "../api/axios";
import { useAuth } from "./useAuth";
import { useRefresh } from "./useRefresh";
import { useEffect } from "react";
const useAxiosPrivate = () => {
  const { auth } = useAuth();
  const refresh = useRefresh();
  useEffect(() => {
    // to configure the request of private request
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => {
        Promise.reject(err);
      },
    );
    // to handle the response of the private request sent
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      //   if nothing's wrong send the response back
      (response) => response,
      // else if an error occurs get a new accessToken and retry
      async (err) => {
        const previousRequest = err.config;
        if (err.response.status === 401 || !previousRequest.sent) {
          // to configure that a request had been sent and this is a retry to prevent an infinite loop of interceptors
          previousRequest.sent = true;
          const newAccessToken = await refresh();
          previousRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return axiosPrivate(previousRequest);
        }
        return Promise.reject(err);
      },
    );

    // to clear out the interceptors and prevent them from piling up and slow the app down
    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptor);
      axiosPrivate.interceptors.response.eject(responseInterceptor);
    };
  }, [auth, refresh]);
  return axiosPrivate;
};

export { useAxiosPrivate };
