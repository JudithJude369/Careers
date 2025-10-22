import { Loading } from "@/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useInputStore } from "@/store/inputStore";

const apiUrl = `https://remotive.com/api/remote-jobs`;

const Jobs = () => {
  const inputValue = useInputStore((state) => state.inputValue);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";
  const term = inputValue || searchTerm;

  const navigate = useNavigate();

  const { data, isPending, isError } = useQuery({
    queryKey: ["jobs", term],
    queryFn: async () => {
      const result = await axios.get(`${apiUrl}?search=${term}`);
      return result.data;
    },
    enabled: !!term,
  });

  // 🧠 Navigation handlers
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

  return (
    <main>
      {/* Header Section */}
      <section className="bg-gray-900 text-white text-center py-16 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold capitalize">Jobs</h1>
      </section>

      {/* Jobs List Section */}
      <section className="bg-gray-100 text-gray-900 py-10 px-6 sm:px-12">
        {/* Back to Home Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleBackHome}
            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 transition"
          >
            Back to Home
          </button>
        </div>

        {jobs.length < 1 ? (
          <h4 className="text-center text-lg text-gray-500 mt-10">
            No jobs found...
          </h4>
        ) : (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
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
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Jobs;
