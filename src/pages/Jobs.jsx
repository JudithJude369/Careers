import { Loading } from "@/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useInputStore } from "@/store/inputStore";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const apiUrl = `https://remotive.com/api/remote-jobs`;

const Jobs = () => {
  const inputValue = useInputStore((state) => state.inputValue);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const term = inputValue || searchTerm;

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 9;

  const { data, isPending, isError } = useQuery({
    queryKey: ["jobs", term],
    queryFn: async () => {
      const result = await axios.get(`${apiUrl}?search=${term}`);
      return result.data;
    },
    enabled: !!term,
  });

  const handleBackHome = () => navigate("/");
  const handleViewDetails = (job) =>
    navigate(`/jobs/${job.id}`, { state: job });

  if (isPending)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h4 className="text-xl text-red-500 font-semibold mb-4">
          Failed to load jobs.
        </h4>
        <button
          onClick={handleBackHome}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Back to Home
        </button>
      </section>
    );

  const jobs = data?.jobs || [];

  // Paginate jobs
  const startIndex = currentPage * jobsPerPage;
  const selectedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);
  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <section className="bg-gray-900 text-white text-center pb-10 shadow-lg pt-50">
        <h1 className="text-3xl sm:text-4xl font-bold capitalize">Jobs</h1>
      </section>

      <section className="bg-gray-100 text-gray-900 py-10 px-6 sm:px-12 min-h-[80vh]">
        <div className="flex justify-center mb-8">
          <button
            onClick={handleBackHome}
            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>

        {jobs.length < 1 ? (
          <h4 className="text-center text-lg text-gray-500 mt-10">
            No jobs found...
          </h4>
        ) : (
          <>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedJobs.map((job) => (
                <li
                  key={job.id}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
                >
                  <div>
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 mb-1">
                      <strong>Company:</strong> {job.company_name}
                    </p>
                    <p className="text-gray-600 mb-1">
                      <strong>Location:</strong>{" "}
                      {job.candidate_required_location || "Worldwide"}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Category:</strong> {job.category}
                    </p>
                  </div>

                  <button
                    onClick={() => handleViewDetails(job)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>

            {/* Pagination Controls */}
            {pageCount > 1 && (
              <div className="flex justify-center mt-10">
                <ReactPaginate
                  previousLabel={"← Previous"}
                  nextLabel={"Next →"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageChange}
                  containerClassName={"flex items-center space-x-2"}
                  pageClassName={
                    "px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-gray-200"
                  }
                  activeClassName={"bg-gray-900 text-white"}
                  previousClassName={
                    "px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-gray-200"
                  }
                  nextClassName={
                    "px-3 py-1 border rounded cursor-pointer text-gray-700 hover:bg-gray-200"
                  }
                  disabledClassName={"opacity-50 cursor-not-allowed"}
                />
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Jobs;
