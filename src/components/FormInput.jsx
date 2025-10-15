import { useInputStore } from "@/store/inputStore";
import { useNavigate } from "react-router-dom";

const FormInput = () => {
  const navigate = useNavigate();

  const inputValue = useInputStore((state) => state.inputValue);
  const setInputValue = useInputStore((state) => state.setInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    // <-- if input is empty or only spaces, do nothing

    if (!inputValue.trim()) return;
    // navigate to the /jobs page and add the search term as a query parameter
    navigate(`/jobs?search=${encodeURIComponent(inputValue)}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form
        action=""
        className="max-w-[500px] lg:max-w-[800px] mx-auto mt-12"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={inputValue}
          placeholder="Search 2000 Remote Jobs..."
          className="rounded-lg shadow-lg bg-gray-100 px-4 py-2 w-[100%] cursor-pointer text-gray-900"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default FormInput;
