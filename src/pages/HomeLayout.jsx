import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
