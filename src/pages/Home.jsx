// Home.jsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";


import home1 from "/home1.jpg";
import home2 from "/home2.jpg";
import home3 from "/home3.jpg";
import home4 from "/home4.jpg";
import home5 from "/home5.jpg";
import home6 from "/home6.jpg";
import home7 from "/home7.jpg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png"; // Main client logo

const logos = [client1, client2, client3, client4, client5, client6, client7];


const images = [home1, home2, home3, home4, home5, home6, home7];

export default function Home() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    document.title = t("home.title");
  }, [t]);

  return (
    <div className={`${isRTL ? "rtl" : "ltr"} text-black`}>
    {/* HERO SECTION – Premium Cinematic with Word Animation */}
<section className="relative w-full h-screen overflow-hidden text-white">
  {/* Background Image (swapped from Demolition) */}
<div
  className="absolute top-0 left-0 w-full h-full object-cover"
  style={{
    backgroundImage: `url('/demohero.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
></div>


  {/* Centered Content */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-center">
   

    {/* Headline with Word-by-Word Animation */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="flex flex-wrap justify-center gap-x-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl text-white text-center"
    >
      {t("home.heroTitle")
        .split(" ")
        .map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -5 },
              visible: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  duration: 0.8,
                },
              },
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
    </motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl"
    >
      {t("home.heroSubtitle")}
    </motion.p>

    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.6 }}
      className="mt-8"
    >
      <a
  href="https://wa.me/201028567000?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote." // ✅ WhatsApp link
  target="_blank" // ✅ Opens in new tab
  rel="noopener noreferrer" // ✅ Security best practice
  className="inline-block bg-gradient-to-r from-[#093B5D] to-[#71869A] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
>
  {t("home.cta", "Get a Quote")}
</a>

    </motion.div>
  </div>
</section>




      {/* ABOUT US SECTION */}
      <section ref={aboutRef} className="py-24 px-6 text-white bg-[#093B5D]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold border-b-2 pb-2 border-[#71869A]">
            {t("home.aboutTitle")}
          </h2>
          <p className="text-lg leading-relaxed text-[#DFD9D7]">
            {t("home.aboutDescription")}
          </p>
        </motion.div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <section className="bg-white py-12 overflow-hidden">
  <div className="w-full whitespace-nowrap animate-marquee flex gap-12">
    {logos.concat(logos).map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`client-${idx}`}
        className="h-16 md:h-20 w-auto object-contain"
      />
    ))}
  </div>
</section>
{/* CORE SERVICES – Premium Overlapping Style */}
{/* CORE SERVICES – Premium Overlapping Style */}
<section ref={servicesRef} className="w-full bg-[#F8F9FA] overflow-hidden">
  <div className="flex flex-col space-y-24 px-4 md:px-16 py-20">

    {/* Animated Section Title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#093B5D] relative inline-block">
        {t("home.servicesTitle")}
        <span className="block h-1 w-24 bg-[#093B5D] mx-auto mt-4 rounded-full"></span>
      </h2>
      <p className="text-[#093B5D] mt-6 text-base md:text-lg font-light max-w-3xl mx-auto">
        {t("home.servicesSubtitle")}
      </p>
    </motion.div>

    {/* DEMOLITION */}
    <Link to="/services/demolition">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden group cursor-pointer"
      >
        <img
          src={images[1]}
          alt="Demolition"
          loading="lazy" // ✅ lazy load
          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 text-white">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
            {t("home.services.demolition.title")}
          </h3>
          <p className="text-sm md:text-lg font-light max-w-3xl drop-shadow-md">
            {t("home.services.demolition.description")}
          </p>
        </div>
      </motion.div>
    </Link>

    {/* CUTTING */}
    <Link to="/services/cutting">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full h-[45vh] md:h-[55vh] rounded-3xl overflow-hidden group cursor-pointer"
      >
        <img
          src={images[2]}
          alt="Cutting"
          loading="lazy" // ✅ lazy load
          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex flex-col justify-center px-6 md:px-16 text-white">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
            {t("home.services.cutting.title")}
          </h3>
          <p className="text-sm md:text-lg font-light max-w-3xl drop-shadow-md">
            {t("home.services.cutting.description")}
          </p>
        </div>
      </motion.div>
    </Link>


  </div>
</section>



    </div>
  );
}

function ImageSlider() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute w-full h-full animate-fadeSlider">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slider-${index}`}
            className="absolute w-full h-full object-cover transition-opacity duration-1000 opacity-0 animation-delay"
            loading="lazy" // ✅ lazy load
            style={{ animationDelay: `${index * 6}s` }}
          />
        ))}
      </div>
    </div>
  );
}