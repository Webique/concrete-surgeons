import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function StructuralRetrofitting() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });

  useEffect(() => {
    document.title = t("retrofit.title");
  }, [t]);

  const retrofitSections = t("retrofit.services", { returnObjects: true });

  return (
    <div className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black`}>
      {/* HERO */}
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <img
          src="/diamond wire cutting.jpg"
          alt="Structural Retrofitting Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight drop-shadow-lg"
          >
            {t("retrofit.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl drop-shadow-md"
          >
            {t("retrofit.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* RETROFIT SECTIONS */}
      <section ref={ref1} className="py-20 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto space-y-12"
        >
          <h2 className="text-3xl font-bold text-[#093B5D] border-b-2 pb-2 border-[#093B5D]">
            {t("retrofit.servicesTitle")}
          </h2>

          {retrofitSections.map((section, idx) => (
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
                src={section.img}
                alt={section.title}
                className="rounded-xl shadow-md object-cover w-full h-64 md:h-72 hover:scale-105 transition-transform duration-500"
              />
              <div className="space-y-3 whitespace-pre-line">
                <h3 className="text-2xl font-bold text-[#093B5D]">
                  {section.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
