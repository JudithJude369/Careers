import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from ".";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { useState } from "react";

const url = `https://remotive.com/api/remote-jobs?limit=10`;

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
    <section>
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
        } = newJobs;
        return (
          <div key={id} style={{ border: "5px solid red" }}>
            <p>{timeAgo}</p>
            <h2>{title}</h2>
            <p>{companyName}</p>
            <p>{category}</p>
            <p>{jobType}</p>
            <p>{salary}</p>
            <p>{location}</p>
            <Link to={`/jobs/${id}`}>
              <button>job details</button>
            </Link>
          </div>
        );
      })}

      <h2 onClick={handleClick} style={{ cursor: "pointer" }}>
        {viewAll ? "view less" : "view all"}
      </h2>
    </section>
  );
};

export default RecentJobs;
