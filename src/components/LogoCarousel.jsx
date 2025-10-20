import { motion } from "framer-motion";

const logos = [
  "/assets/companies/accenture_logo.png",
  "/assets/companies/adobe_logo.png",
  "/assets/companies/Amazon_logo.svg",
  "/assets/companies/Apple_logo.svg",
  "/assets/companies/google.png",
  "/assets/companies/IBM_logo.svg",
  "/assets/companies/Microsoft_logo.svg",
  "/assets/companies/Netflix_logo.svg",
  "/assets/companies/samsung_logo.png",
  "/assets/companies/YouTube.svg",
];

const LogoCarousel = () => {
  return (
    <section className="w-full  py-10 overflow-hidden">
      <div className="flex space-x-12">
        <motion.div
          className="flex space-x-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // adjust for speed (smaller = faster)
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarousel;
