import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        pauseOnHover={false}
        closeOnClick
        theme="dark"
        transition={Bounce}
      />
      <main className="flex flex-col p-6  md:ml-6">{children}</main>
    </>
  );
};

export default Layout;
