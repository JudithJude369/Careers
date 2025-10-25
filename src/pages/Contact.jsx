import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Validation Schema
const schema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form Submitted:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! ✅", {
      position: "top-right",
      autoClose: 3000,
    });

    reset();
  };

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <ToastContainer />

      {/* Header Section */}
      <section className="bg-gray-900 text-gray-100 pb-10 text-center shadow-lg pt-50">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-300">
          Have questions or feedback? We’d love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* 🧾 Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="John Doe"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="you@example.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Subject</label>
            <input
              type="text"
              {...register("subject")}
              placeholder="Job inquiry or feedback..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Message</label>
            <textarea
              rows="5"
              {...register("message")}
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full font-medium disabled:bg-gray-400 cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* 📞 Info Section */}
        <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl flex flex-col justify-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <p className="mb-6 text-gray-300">
            We’ll get back to you as soon as possible — usually within 24 hours.
          </p>

          <ul className="space-y-3">
            <li>
              <strong>Email:</strong> support@careers.com
            </li>
            <li>
              <strong>Phone:</strong> +234 800 000 0000
            </li>
            <li>
              <strong>Office Hours:</strong> Mon–Fri, 9am–6pm
            </li>
          </ul>

          <hr className="my-6 border-gray-700" />

          <div>
            <h4 className="text-lg font-medium mb-2">Looking for jobs?</h4>
            <p className="text-gray-300">
              Browse the latest remote job listings on our{" "}
              <a
                href="/jobs"
                className="text-blue-400 hover:underline font-semibold"
              >
                Jobs page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
