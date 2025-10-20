import { SlUser } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";

const About = () => {
  return (
    <main>
      <section className="text-gray-100 bg-gray-900 align-items shadow-2xl ">
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
      <section className="align-items bg-gray-100 text-gray-900">
        <h2>How it works</h2>
        <p>
          Discover remote opportunities that match your skills — search,
          explore, and apply effortlessly with Careers.
        </p>
        <div>
          <SlUser />
          <h2>create account</h2>
          <p>
            Sign up to personalize your experience and save your favorite job
            opportunities.
          </p>
        </div>
        <div>
          <IoBriefcaseOutline />
          <h2>find jobs</h2>
          <p>
            Explore verified remote positions from trusted companies across
            various industries.
          </p>
        </div>
        <div>
          <GrStatusGood />
          <h2>apply jobs</h2>
          <p>
            Choose the role that fits you best and apply directly through the
            employer’s site.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;

// About Page Structure

// Intro section

// Short paragraph about your platform — what it does (helps people find remote jobs, connects talent with opportunities, etc.).

// Maybe a sentence about your mission or inspiration.

// How it works

// A simple 3-step outline like:

// Search or filter for jobs

// Explore listings and company details

// Apply directly to your chosen role

// Frequently Asked Questions (FAQ)
// Example FAQs you could include:

// “How often are new jobs added?”

// “Are all jobs fully remote?”

// “Do I need to create an account to apply?”

// “Is this platform free to use?”

// “Can I search by company or job title?”
