import { Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main content fills available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default HomeLayout;
