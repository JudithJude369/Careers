const FormInput = () => {
  return (
    <div>
      <form
        action=""
        className="max-w-[500px] lg:max-w-[800px] mx-auto text-gray-900 m-20"
      >
        <input
          type="text"
          value=""
          placeholder="Search 2000 Remote Jobs..."
          className="rounded-lg shadow-lg bg-gray-100 px-4 py-2 w-[100%] cursor-pointer"
        />
      </form>
    </div>
  );
};

export default FormInput;
