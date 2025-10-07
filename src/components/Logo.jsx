import logo from "@/assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <img src={logo} alt="company logo" className="w-8" />
      <p className="font-bold text-3xl capitalize">careers</p>
    </div>
  );
};

export default Logo;
