import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from ".";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineBanknotes } from "react-icons/hi2";

const url = `https://remotive.com/api/remote-jobs?limit=20`;

const RecentJobs = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleClick = () => setViewAll((view) => !view);

  const { data, isPending, isError } = useQuery({
    queryKey: ["recentJobs"],
    queryFn: async () => {
      const result = await axios.get(url);
      return result.data;
    },
  });

  if (isPending) return <Loading />;
  if (isError)
    return (
      <section className="text-center mt-12">
        <h4>Failed to load jobs.</h4>
      </section>
    );

  const jobsToDisplay = viewAll ? data.jobs : data.jobs.slice(0, 5);

  return (
    <div className="px-6 md:px-10 lg:px-20 py-10">
      {/* Heading Section */}
      <div className="mb-12 text-center lg:text-left">
        <h4 className="text-2xl font-bold capitalize tracking-wide mb-2 text-gray-800">
          Recent Jobs Available
        </h4>
        <div className="lg:flex lg:justify-between lg:items-center">
          <p className="text-gray-600 text-lg">
            Get your desired job from top companies
          </p>
          <h2
            onClick={handleClick}
            className="hidden lg:block text-blue-700 text-lg font-semibold underline cursor-pointer hover:text-blue-500"
          >
            {viewAll ? "View Less" : "View All"}
          </h2>
        </div>
      </div>

      {/* Job Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsToDisplay.map((job) => {
          const {
            id,
            candidate_required_location: location,
            category,
            company_name: companyName,
            title,
            job_type: jobType,
            salary,
            company_logo,
            publication_date,
          } = job;

          const timeAgo = formatDistanceToNow(new Date(publication_date), {
            addSuffix: true,
          });

          return (
            <div
              key={id}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <div>
                <p className="text-sm text-blue-700 font-semibold bg-blue-100 inline-block px-3 py-1 rounded-full mb-4">
                  {timeAgo}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  {company_logo && (
                    <img
                      src={company_logo}
                      alt={companyName}
                      className="w-10 h-10 object-contain"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600">{companyName}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <IoBriefcaseOutline className="text-blue-700" />
                    <p>{category}</p>
                  </div>
                  <div className="flex items-center gap-2 capitalize">
                    <MdAccessTime className="text-blue-700" />
                    <p>{jobType}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineBanknotes className="text-blue-700" />
                    <p>{salary || "Not specified"}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMapPinLine className="text-blue-700" />
                    <p>{location}</p>
                  </div>
                </div>
              </div>

              {/* Job Details Button */}
              <Link to={`/jobs/${id}`} state={job}>
                <button className="w-full bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition duration-200 cursor-pointer">
                  View Job Details
                </button>
              </Link>
            </div>
          );
        })}
      </section>

      {/* Mobile View All Button */}
      <h2
        onClick={handleClick}
        className="lg:hidden text-blue-700 text-center mt-8 text-lg font-semibold underline cursor-pointer hover:text-blue-500"
      >
        {viewAll ? "View Less" : "View All"}
      </h2>
    </div>
  );
};

export default RecentJobs;
