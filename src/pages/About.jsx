import { SlUser } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { Faq } from "@/components";

const About = () => {
  return (
    <main>
      <section className=" align-items text-gray-100 bg-gray-900  shadow-2xl pt-40 px-[4rem] pb-[2.5rem] ">
        {/* about-hero-section */}
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-[800] capitalize text-center ">
            about us
          </h1>
          <div className="text-justify text-gray-300 text-xl mt-4">
            <p>
              Welcome to Careers, a professional job application portal
              dedicated to connecting talented individuals with exceptional
              remote opportunities. Our platform features a wide range of
              verified job listings from reputable companies across diverse
              industries.
            </p>
            <p className="mt-4">
              At Careers, we are committed to simplifying the job search process
              by providing a seamless, user-friendly experience that helps job
              seekers find roles that align with their skills, values, and
              career goals.
            </p>
          </div>
        </div>
      </section>
      {/* how it works */}
      <section className="align-items bg-gray-100 text-gray-900 py-[2.5rem] px-[4rem]">
        <div className="  text-center">
          <h2 className=" text-[1.5rem] font-semibold my-8">How it works</h2>
          <p>
            Discover remote opportunities that match your skills — search,
            explore, and apply effortlessly with Careers.
          </p>
        </div>
        {/* cards */}
        <article className="flex flex-col lg:flex-row lg:items-stretch gap-4 mt-4">
          {/* card1 */}
          <div className=" py-8 px-8 flex gap-2 text-center flex-col items-center max-w-[400px] mx-auto mt-8 lg:max-w-[800px] shadow-lg rounded-2xl">
            <SlUser className="bg-blue-700 text-6xl text-gray-100 p-2 rounded-xl shadow-2xl" />
            <h2 className="text-[1.3rem] font-bold capitalize">
              create account
            </h2>
            <p className="text-gray-700">
              Sign up to personalize your experience and save your favorite job
              opportunities.
            </p>
          </div>
          {/* card2 */}
          <div className=" py-8 px-8 flex gap-2 text-center flex-col items-center max-w-[400px] mx-auto mt-8 lg:max-w-[800px] shadow-lg rounded-2xl">
            <IoBriefcaseOutline className="bg-blue-700 text-6xl text-gray-100 p-2 rounded-xl shadow-2xl" />
            <h2 className="text-[1.3rem] font-bold capitalize">find jobs</h2>
            <p className="text-gray-700">
              Explore verified remote positions from trusted companies across
              various industries.
            </p>
          </div>
          {/* card3 */}
          <div className=" py-8 px-8 flex gap-2 text-center flex-col items-center max-w-[400px] mx-auto mt-8 lg:max-w-[800px] shadow-lg rounded-2xl">
            <GrStatusGood className="bg-blue-700 text-6xl text-gray-100 p-2 rounded-xl shadow-2xl" />
            <h2 className="text-[1.3rem] font-bold capitalize">apply jobs</h2>
            <p className="text-gray-700">
              Choose the role that fits you best and apply directly through the
              employer’s site.
            </p>
          </div>
        </article>
      </section>

      {/* video section */}
      <section className="align-items bg-gray-100 text-gray-900 py-[2.5rem] px-[4rem]">
        <div className=" rounded-lg shadow-lg mx-auto">
          <video src="/assets/video/careers.mp4" controls className="w-full" />
          <ul>
            <li>
              At Careers, we make finding your next remote job simple and
              stress-free.
            </li>
            <li>
              Explore verified opportunities from trusted companies and apply in
              just a few clicks.
            </li>
            <li>
              Build your career from anywhere — Careers connects you with the
              right roles, fast.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ section */}
      <section className="align-items bg-gray-100 text-gray-900 py-[2.5rem] px-[4rem]">
        <Faq />
      </section>
    </main>
  );
};

export default About;
