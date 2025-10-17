import { Companies, FormInput, RecentJobs } from "@/components";

const Landing = () => {
  return (
    <main>
      <section className="text-gray-100 bg-gray-900 align-items shadow-2xl text-center  ">
        <h1 className="text-3xl font-[800] capitalize mt-20">
          Find your dream job today!
        </h1>
        <p className="capitalize text-xl text-gray-300 mt-4">
          connecting talent with opportunity: your gateway to career success
        </p>
        <FormInput />
        <Companies />
      </section>
      <section className="align-items text-gray-900 bg-gray-100">
        <div className="mt-8 text-center lg:text-left">
          <h4 className="capitalize text-[1.5rem] font-semibold tracking-wide">
            recent jobs available
          </h4>
          <p className="text-[1.2rem]">
            Get your desired job from top companies
          </p>
        </div>
        <RecentJobs />
      </section>
    </main>
  );
};

export default Landing;
