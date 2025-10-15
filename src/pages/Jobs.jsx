const Jobs = () => {
  return <div>Jobs</div>;
};

export default Jobs;

// JobsPage.jsx
// import { useSearchParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchJobs = async (search) => {
//   const res = await axios.get(
//     `https://remotive.com/api/remote-jobs?search=${search}`
//   );
//   return res.data.jobs;
// };

// const JobsPage = () => {
//   const [params] = useSearchParams();
//   const searchTerm = params.get("search") || "";

//   const { data: jobs, isLoading, isError } = useQuery({
//     queryKey: ["jobs", searchTerm],
//     queryFn: () => fetchJobs(searchTerm),
//   });

//   if (isLoading) return <p>Loading jobs...</p>;
//   if (isError) return <p>Something went wrong.</p>;

//   return (
//     <div className="max-w-5xl mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4">
//         Showing results for: {searchTerm}
//       </h2>
//       <ul className="space-y-4">
//         {jobs?.map((job) => (
//           <li key={job.id} className="p-4 bg-gray-50 rounded-lg shadow">
//             <h3 className="text-lg font-bold">{job.title}</h3>
//             <p>{job.company_name}</p>
//             <a
//               href={job.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600"
//             >
//               View Details
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobsPage;
