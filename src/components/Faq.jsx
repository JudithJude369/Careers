import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
    <div>
      <h2>frequently asked questions</h2>
      <p>
        If you’ve got a question, there’s a good chance we’ve answered it below.
      </p>
      <article>
        {faqs.map((faq) => {
          const { id, question, answer } = faq;
          return (
            <ul key={id}>
              <div onClick={() => handleToggle(id)}>
                <li>{question}</li>
                <div>{activeId === id ? <FaMinus /> : <FaPlus />}</div>
              </div>
              {activeId === id && <li>{answer}</li>}
            </ul>
          );
        })}
      </article>
    </div>
  );
};

export default Faq;
