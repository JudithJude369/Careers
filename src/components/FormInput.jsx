import { useInputStore } from "@/store/inputStore";
import { useNavigate } from "react-router-dom";

const FormInput = () => {
  const navigate = useNavigate();
  const inputValue = useInputStore((state) => state.inputValue);
  const setInputValue = useInputStore((state) => state.setInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    navigate(`/jobs?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-2xl mx-auto"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search 2000+ Remote Jobs..."
        className="rounded-lg shadow-lg bg-gray-100 px-4 py-3 w-full text-gray-900 focus:ring-2 focus:ring-blue-600 outline-none transition"
      />
      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default FormInput;
