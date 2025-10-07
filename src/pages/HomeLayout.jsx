import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
