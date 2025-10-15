import { motion } from "framer-motion";

const logos = [
  "/assets/accenture_logo.png",
  "/assets/adobe_logo.png",
  "/assets/Amazon_logo.svg",
  "/assets/Apple_logo.svg",
  "/assets/google.png",
  "/assets/IBM_logo.svg",
  "/assets/Microsoft_logo.svg",
  "/assets/Netflix_logo.svg",
  "/assets/samsung_logo.png",
  "/assets/YouTube.svg",
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
