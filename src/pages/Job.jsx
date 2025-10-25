import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Job = () => {
  const { state: job } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // 🧠 Fetch job by ID if not passed via navigation
  const {
    data: jobData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      const res = await axios.get(`https://remotive.com/api/remote-jobs`);
      return res.data.jobs.find((j) => j.id === Number(id));
    },
    enabled: !job, // only fetch if no job in state
  });

  const currentJob = job || jobData;

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        Loading job details...
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 mb-4">Failed to load job details.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );

  if (!currentJob) {
    return (
      <div className="text-center mt-20">
        <h4 className="text-xl mb-4">No job data found.</h4>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // 🧠 Button handlers
  const handleBackToJobs = () => navigate("/jobs");
  const handleBackHome = () => navigate("/");

  return (
    <main>
      {/* Header */}
      <section className="text-gray-100 bg-gray-900 pt-50 pb-10 text-center">
        <h1 className="text-3xl font-bold capitalize">Job Details</h1>
      </section>

      {/* Job Details Section */}
      <section className="bg-gray-100 text-gray-900 py-10 px-6 sm:px-10 max-w-4xl mx-auto rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          {currentJob.title}
        </h1>

        <div className="space-y-2">
          <p>
            <strong>Company:</strong> {currentJob.company_name}
          </p>
          <p>
            <strong>Location:</strong> {currentJob.candidate_required_location}
          </p>
          <p>
            <strong>Category:</strong> {currentJob.category}
          </p>
          <p>
            <strong>Type:</strong> {currentJob.job_type}
          </p>
          <p>
            <strong>Publication Date:</strong> {currentJob.publication_date}
          </p>
        </div>

        {/* 🏷️ Tags */}
        {currentJob.tags?.length > 0 && (
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {currentJob.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Description:</h2>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: currentJob.description }}
          />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href={currentJob.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            Apply on Remotive
          </a>

          <button
            onClick={handleBackToJobs}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Back to Jobs
          </button>

          <button
            onClick={handleBackHome}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Back to Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default Job;
