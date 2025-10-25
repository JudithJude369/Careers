import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const faqs = [
  {
    id: 1,
    question: "How often are new jobs added?",
    answer:
      "New job listings are updated daily to ensure you have access to the latest remote opportunities from trusted companies.",
  },
  {
    id: 2,
    question: "Are all jobs fully remote?",
    answer:
      "Yes, all job listings on Careers are remote-friendly positions sourced from verified employers around the world.",
  },
  {
    id: 3,
    question: "Do I need to create an account to apply?",
    answer:
      "You can browse and explore jobs without an account, but creating one allows you to save searches and personalize your experience.",
  },
  {
    id: 4,
    question: "Is this platform free to use?",
    answer:
      "Absolutely! Careers is completely free for job seekers — no hidden fees or subscriptions required.",
  },
  {
    id: 5,
    question: "Can I search by company or job title?",
    answer:
      "Yes, you can easily search by company name, job title, or keyword to find roles that match your interests and skills.",
  },
];

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 capitalize">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        If you’ve got a question, there’s a good chance we’ve answered it below.
      </p>

      <article className="max-w-3xl mx-auto space-y-4">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
          >
            <button
              onClick={() => handleToggle(id)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-800 focus:outline-none cursor-pointer"
            >
              {question}
              <span className="text-blue-600">
                {activeId === id ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Animate open/close */}
            <AnimatePresence initial={false}>
              {activeId === id && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-5 pb-4 text-gray-600 text-sm md:text-base"
                >
                  {answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Faq;
