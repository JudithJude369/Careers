import { Companies, Customers, FormInput, RecentJobs } from "@/components";

const Landing = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="text-gray-100 bg-gray-900 shadow-2xl text-center  pt-50 pb-10 ">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="text-3xl md:text-5xl font-extrabold capitalize leading-tight">
            Find your dream job today!
          </h1>
          <p className="capitalize text-base md:text-lg text-gray-300 mt-4">
            Connecting talent with opportunity — your gateway to career success.
          </p>
          <div className="mt-8">
            <FormInput />
          </div>
        </div>

        {/* Featured Companies */}
        <div className="mt-16">
          <Companies />
        </div>
      </section>

      {/* RECENT JOBS SECTION */}
      <section className="text-gray-900 bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <RecentJobs />
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="text-gray-900 bg-sky-50 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Too good to be true? Hear from our users.
        </h2>
        <Customers />
      </section>
    </main>
  );
};

export default Landing;
