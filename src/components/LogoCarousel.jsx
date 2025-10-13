import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 9000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="relative  w-full py-8 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-95 z-0"></div>
      <div className="relative z-10 px-6">
        <Slider {...settings}>
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-4">
              <div className="bg-white/95 rounded-lg shadow-md border border-gray-200 p-2 flex items-center justify-center">
                <img
                  src={logo}
                  alt={`company-logo-${i}`}
                  className="h-14 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
