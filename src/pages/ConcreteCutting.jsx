import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ConcreteCutting() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  useEffect(() => {
    document.title = t("cutting.title", "Concrete Cutting Services");
  }, [t]);

  const servicesWithImages = [
    {
      title: t("cutting.services.0.title"),
      desc: t("cutting.services.0.desc"),
      img: "/structural modifcation.jpg"
    },
    {
      title: t("cutting.services.1.title"),
      desc: t("cutting.services.1.desc"),
      img: "/maxresdefault.jpg"
    },
    {
      title: t("cutting.services.2.title"),
      desc: t("cutting.services.2.desc"),
      img: "/DSC_0896.jpg"
    },
    {
      title: t("cutting.services.3.title"),
      desc: t("cutting.services.3.desc"),
      img: "/G0014909.JPG"
    },
    {
      title: t("cutting.services.4.title"),
      desc: t("cutting.services.4.desc"),
      img: "/حلوة.jpg"
    },
    {
      title: t("cutting.services.5.title"),
      desc: t("cutting.services.5.desc"),
      img: "/steel repair anchoring.jpg"
    },
    {
      title: t("cutting.services.6.title"),
      desc: t("cutting.services.6.desc"),
      img: "/diamond wire cutting.jpg"
    }
  ];

  return (
    <div className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black`}>
        {/* HERO – Premium Cinematic Style */}
<section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src="/diamond wire cutting.jpg" // Or replace with a more striking concrete cutting image
    alt="Concrete Cutting Hero"
    loading="lazy" // ✅ lazy load
    className="absolute inset-0 w-full h-full object-cover brightness-75"
  />

  {/* Overlay Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-lg"
    >
      {t("cutting.title")}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl drop-shadow-md"
    >
      {t("cutting.subtitle")}
    </motion.p>

  </div>
</section>


      {/* SERVICES WITH IMAGES */}
      <section ref={ref1} className="py-20 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <h2 className="text-3xl font-bold text-[#093B5D] border-b-2 pb-2 border-[#093B5D]">
            {t("cutting.servicesTitle")}
          </h2>

          {servicesWithImages.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                idx % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                loading="lazy" // ✅ lazy load
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-72 hover:scale-105 transition-transform duration-500"
              />
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#093B5D]">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROJECT – DAMIETTA PORT */}
      <section ref={ref2} className="py-20 px-6 md:px-20 bg-[#F8F9FA]">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-8"
        >
          <h2 className="text-3xl font-bold text-[#093B5D] border-b-2 pb-2 border-[#093B5D]">
            {t("cutting.projectTitle")}
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images.jpeg"
              alt="Damietta Project Logo"
              loading="lazy" 
              className="w-40 h-40 object-contain rounded-md shadow"
            />
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
              {t("cutting.projectDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <img
              src="/تحميل ونش.jpg"
              alt="Damietta Port Operation"
              loading="lazy"
              className="rounded-xl shadow-md object-cover h-56 w-full hover:scale-105 transition-transform duration-500"
            />
            <img
              src="/حلوة.jpg"
              alt="Precision Cutting"
              loading="lazy"
              className="rounded-xl shadow-md object-cover h-56 w-full hover:scale-105 transition-transform duration-500"
            />
            <img
              src="/تحميل.jpg"
              alt="Concrete Handling"
              loading="lazy" 
              className="rounded-xl shadow-md object-cover h-56 w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-[#093B5D] mb-4">
              {t("cutting.videoTitle")}
            </h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <video
            className="w-full h-full object-cover"
            src="/D.mp4"
            controls
            playsInline
            preload="metadata"
          ></video>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
