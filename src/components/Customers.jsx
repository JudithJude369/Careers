const reviews = [
  {
    id: 1,
    name: "Amara Okafor",
    company: "Atlassian",
    image: "/assets/users/nigerian.webp",
    review:
      "After applying through the portal I secured a remote role at Atlassian. The entire process was smooth, transparent and supportive—now I’m working happily from home and flourishing in my role.",
  },
  {
    id: 2,
    name: "Tawanda Ncube",
    company: "Shopify",
    image: "/assets/users/zimbawe.webp",
    review:
      "I was impressed by how the site helped me get noticed for a role at Shopify. Thanks to the focused job-matches and interview prep resources, I now work remotely and feel a part of a global team.",
  },
  {
    id: 3,
    name: "Lukas Müller",
    company: "Elastic",
    image: "/assets/users/german.webp",
    review:
      "I applied, interviewed and landed a backend engineer role at Elastic — couldn’t be happier about the outcome.",
  },
];

const Customers = () => {
  return (
    <div className="flex  flex-col lg:flex-row lg:items-stretch gap-[2rem]">
      {reviews.map((story) => {
        const { id, name, company, image, review } = story;
        return (
          <ul
            key={id}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-100"
          >
            <li>
              <img src={image} alt={name} className="shadow-lg flex-grow" />
            </li>
            <div className="text-justify p-4">
              <li>"{review}"</li>
              <li className="text-blue-700 font-bold mt-4 text-[1.2rem]">
                {name}
              </li>
              <li>Landed a job at {company}</li>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default Customers;
