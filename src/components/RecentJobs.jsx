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

  const handleClick = () => {
    setViewAll((view) => {
      return !view;
    });
  };

  const { data, isPending, isError } = useQuery({
    queryKey: ["recentJobs"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });
  // console.log(data);

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return (
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <h4>Failed to load jobs.</h4>
      </section>
    );
  }

  const jobsToDisplay = viewAll ? data.jobs : data.jobs.slice(0, 5);
  return (
    <div className="">
      <div className="mb-12 text-center lg:text-left">
        <h4 className="capitalize text-[1.5rem] font-semibold tracking-wide">
          recent jobs available
        </h4>
        <div className=" lg:flex lg:justify-between lg:items-center">
          <p className="text-[1.2rem]">
            Get your desired job from top companies
          </p>
          <h2
            onClick={handleClick}
            className="  hover:text-blue-500 cursor-pointer text-2xl text-center font-semibold text-blue-700 underline m-4 hidden lg:flex"
          >
            {viewAll ? "View less" : "View all"}
          </h2>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-2 ">
        {jobsToDisplay.map((newJobs) => {
          // adds how long timeAgo, jobs been posted
          const timeAgo = formatDistanceToNow(
            new Date(newJobs.publication_date),
            {
              addSuffix: true,
            }
          );
          const {
            id,
            candidate_required_location: location,
            category,
            company_name: companyName,
            title,
            job_type: jobType,
            salary,
            company_logo,
          } = newJobs;
          return (
            <div
              key={id}
              className="px-8 py-4 grid grid-cols-1 text-[1rem] text-gray-700 rounded-3xl shadow-lg"
            >
              <p className="rounded-xl bg-gray-300 text-blue-700 p-1 max-w-[100px]  text-[0.8rem] text-center font-bold mb-7">
                {timeAgo}
              </p>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center mb-4">
                <img
                  src={company_logo}
                  alt={companyName}
                  className="max-w-[50px]"
                />
                <div className=" leading-tight">
                  <h2 className="text-[1.5rem] font-bold">{title}</h2>
                  <p className="text-[1rem] tracking-wide">{companyName}</p>
                </div>
              </div>
              <section className="grid grid-cols-1 gap-[0.5rem] lg:grid-cols-5 lg:items-center">
                <div className="flex gap-2 items-center">
                  <IoBriefcaseOutline className="text-2xl text-blue-700" />
                  <p>{category}</p>
                </div>

                <div className="flex gap-2 items-center capitalize">
                  <MdAccessTime className="text-2xl text-blue-700" />
                  <p>{jobType}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <HiOutlineBanknotes className="text-2xl text-blue-700" />
                  <p>{salary}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <RiMapPinLine className="text-2xl text-blue-700" />
                  <p>{location}</p>
                </div>

                <Link to={`/jobs/${id}`} className="m-4">
                  <button className=" font-medium capitalize text-gray-100 bg-blue-700 p-2 w-full rounded-xl shadow-2xl cursor-pointer hover:bg-blue-500 hover:font-bold">
                    job details
                  </button>
                </Link>
              </section>
            </div>
          );
        })}

        <h2
          onClick={handleClick}
          className="cursor-pointer text-2xl text-center font-semibold text-blue-700 underline m-4 lg:hidden  hover:text-blue-500"
        >
          {viewAll ? "View less" : "View all"}
        </h2>
      </section>
    </div>
  );
};

export default RecentJobs;
