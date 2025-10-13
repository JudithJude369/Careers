import { Companies, FormInput } from "@/components";

const Landing = () => {
  return (
    <>
      <section className="text-gray-100 bg-gray-900 align-items  shadow-2xl text-center z-[-1]">
        <h1 className="text-3xl font-[800] capitalize mt-20">
          Find your dream job today!
        </h1>
        <p className="capitalize text-xl text-gray-300 my-4">
          connecting talent with opportunity: your gateway to career success
        </p>
        <FormInput />
        <Companies />
      </section>
    </>
  );
};

export default Landing;
