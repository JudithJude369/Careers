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
    <div className="flex flex-col lg:flex-row lg:items-stretch gap-6">
      {reviews.map(({ id, name, company, image, review }) => (
        <ul
          key={id}
          className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col hover:shadow-xl transition-all duration-300"
        >
          {/* Image container */}
          <li className="w-full bg-gray-100 flex justify-center items-center">
            <img src={image} alt={name} className="w-full object-contain" />
          </li>

          {/* Review content */}
          <div className="p-6 flex flex-col flex-grow text-gray-700 text-justify">
            <li className="italic text-gray-600">"{review}"</li>
            <li className="text-blue-700 font-semibold mt-4 text-lg">{name}</li>
            <li className="text-sm text-gray-500">Landed a job at {company}</li>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default Customers;
