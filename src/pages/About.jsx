import { SlUser } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { Faq } from "@/components";

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-gray-100 bg-gray-900 shadow-2xl pt-50 pb-10 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold capitalize">
            About Us
          </h1>
          <div className="text-justify text-gray-300 text-lg md:text-xl mt-6 space-y-4">
            <p>
              Welcome to{" "}
              <span className="font-semibold text-blue-400">Careers</span>, a
              professional job application portal dedicated to connecting
              talented individuals with exceptional remote opportunities. Our
              platform features verified job listings from reputable companies
              across diverse industries.
            </p>
            <p>
              At Careers, we simplify the job search process by providing a
              seamless, user-friendly experience that helps job seekers find
              roles aligned with their skills, values, and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">
            Discover remote opportunities that match your skills — search,
            explore, and apply effortlessly with Careers.
          </p>
        </div>

        {/* Cards */}
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
            <SlUser className="bg-blue-700 text-5xl text-gray-100 p-3 rounded-xl mb-4" />
            <h2 className="text-lg font-bold capitalize mb-2">
              Create Account
            </h2>
            <p className="text-gray-700">
              Sign up to personalize your experience and save your favorite job
              opportunities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
            <IoBriefcaseOutline className="bg-blue-700 text-5xl text-gray-100 p-3 rounded-xl mb-4" />
            <h2 className="text-lg font-bold capitalize mb-2">Find Jobs</h2>
            <p className="text-gray-700">
              Explore verified remote positions from trusted companies across
              various industries.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition">
            <GrStatusGood className="bg-blue-700 text-5xl text-gray-100 p-3 rounded-xl mb-4" />
            <h2 className="text-lg font-bold capitalize mb-2">Apply Jobs</h2>
            <p className="text-gray-700">
              Choose the role that fits you best and apply directly through the
              employer’s site.
            </p>
          </div>
        </article>
      </section>

      {/* Video Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src="/assets/video/careers.mp4"
            controls
            className="w-full rounded-t-xl"
          />
          <article className="p-8 bg-gray-900 text-gray-100 text-base md:text-lg grid md:grid-cols-3 gap-6">
            <p>
              At Careers, we make finding your next remote job simple and
              stress-free.
            </p>
            <p>
              Explore verified opportunities from trusted companies and apply in
              just a few clicks.
            </p>
            <p>
              Build your career from anywhere — Careers connects you with the
              right roles, fast.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-12 lg:px-20">
        <Faq />
      </section>
    </main>
  );
};

export default About;
