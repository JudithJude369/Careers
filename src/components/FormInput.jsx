import { useInputStore } from "@/store/inputStore";

const FormInput = () => {
  const inputValue = useInputStore((state) => state.inputValue);
  const setInputValue = useInputStore((state) => state.setInputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form
        action=""
        className="max-w-[500px] lg:max-w-[800px] mx-auto  m-12"
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
