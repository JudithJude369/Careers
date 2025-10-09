import logo from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <img src={logo} alt="company logo" className="w-8 shadow-lg" />
      <p className="font-bold text-3xl capitalize text-gray-100 italic tracking-wide">
        careers
      </p>
    </div>
  );
};

export default Logo;
