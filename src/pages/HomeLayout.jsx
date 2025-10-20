import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <section className="align-items bg-gray-100">
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
