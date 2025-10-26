import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Job = () => {
  const { state: job } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch job by ID if not passed via navigation
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

  // States
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-lg">
        Loading job details...
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-20">
        <p className="text-red-500 mb-4 text-lg">Failed to load job details.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Go Back
        </button>
      </div>
    );

  if (!currentJob)
    return (
      <div className="text-center mt-20">
        <h4 className="text-xl mb-4">No job data found.</h4>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Go Back
        </button>
      </div>
    );

  const handleBackToJobs = () => navigate("/jobs");
  const handleBackHome = () => navigate("/");

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 text-center shadow-md pt-50">
        <h1 className="text-4xl font-bold tracking-tight">Job Details</h1>
        <p className="text-gray-300 mt-3 text-lg">
          Explore this opportunity and take the next step in your career.
        </p>
      </section>

      {/* Job Info */}
      <section className="max-w-5xl mx-auto bg-white mt-[-3rem] mb-16 p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10">
        <div className="mb-6 border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {currentJob.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {currentJob.company_name} • {currentJob.candidate_required_location}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8 text-gray-700">
          <p>
            <strong>💼 Category:</strong> {currentJob.category}
          </p>
          <p>
            <strong>🕒 Type:</strong> {currentJob.job_type}
          </p>
          <p>
            <strong>📅 Published:</strong>{" "}
            {new Date(currentJob.publication_date).toLocaleDateString()}
          </p>
          <p>
            <strong>🌍 Location:</strong>{" "}
            {currentJob.candidate_required_location}
          </p>
        </div>

        {/* Tags */}
        {currentJob.tags?.length > 0 && (
          <div className="mb-10">
            <h2 className="font-semibold text-gray-800 mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {currentJob.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900">
            Job Description
          </h2>
          <div
            className="prose prose-gray max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: currentJob.description }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href={currentJob.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center shadow-sm cursor-pointer"
          >
            Apply on Remotive
          </a>
          <button
            onClick={handleBackToJobs}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition text-center shadow-sm cursor-pointer"
          >
            Back to Jobs
          </button>
          <button
            onClick={handleBackHome}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition text-center shadow-sm cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default Job;
