import { Companies, Customers, FormInput, RecentJobs } from "@/components";

const Landing = () => {
  return (
    <main>
      {/* hero section */}
      <section className="text-gray-100 bg-gray-900 shadow-2xl text-center pt-40 pb-[2.5rem] ">
        <div className="align-items px-[4rem] ">
          <h1 className="text-3xl font-[800] capitalize">
            Find your dream job today!
          </h1>
          <p className="capitalize text-xl text-gray-300 mt-4">
            connecting talent with opportunity: your gateway to career success
          </p>
          <FormInput />
        </div>
        <Companies />
      </section>
      {/* recent job section */}
      <section className="align-items text-gray-900 bg-gray-100 py-[2.5rem] px-[4rem]">
        <RecentJobs />
      </section>
      {/* customers reviews */}
      <section className="align-items text-gray-900 bg-sky-50 py-[2.5rem] px-[4rem]">
        <h2 className="text-center text-[1.5rem] font-semibold my-8">
          Too good to be true? Hear from our customers.
        </h2>
        <Customers />
      </section>
    </main>
  );
};

export default Landing;
