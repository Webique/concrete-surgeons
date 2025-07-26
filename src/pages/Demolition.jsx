import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Demolition() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  useEffect(() => {
    document.title = t("demolition.title");
  }, [t]);

  return (
    <div className={`${isRTL ? "rtl text-right" : "ltr text-left"} text-black`}>
      {/* PAGE TITLE */}
      <section className="relative w-full h-[90vh] mt-[100px] overflow-hidden">
  {/* Background Video (swapped from Home) */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    poster="/video-thumbnail.jpg"
  >
    <source src="/your-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
  >
    <motion.h1
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
    >
      {t("demolition.title")}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md"
    >
      {t("demolition.subtitle")}
    </motion.p>
  </motion.div>
</section>


      {/* SAFETY DEMOLITION */}
<section ref={ref1} className="relative py-24 px-6 md:px-20 bg-white">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={inView1 ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
  >
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-[#093B5D] relative">
        {t("demolition.safetyTitle")}
        <span className="block h-1 w-20 bg-[#093B5D] mt-3 rounded-full"></span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        {t("demolition.safetyDesc")}
      </p>
      <ul className="list-disc ml-5 text-gray-700 text-lg space-y-1">
        <li>{t("demolition.safetyList.0")}</li>
        <li>{t("demolition.safetyList.1")}</li>
        <li>{t("demolition.safetyList.2")}</li>
        <li>{t("demolition.safetyList.3")}</li>
      </ul>
    </div>
    <div className="relative">
      <img
        src="/demo1.png"
        loading="lazy" // ✅ lazy load
        alt={t("demolition.safetyAlt")}
        className="w-full h-[400px] object-cover rounded-xl shadow-xl"
      />
      <span className="absolute top-4 left-4 bg-[#093B5D] text-white px-4 py-1 text-sm rounded shadow-md">
        {t("demolition.badgeSafety", "Safety First")}
      </span>
    </div>
  </motion.div>
</section>


     {/* HIGH-REACH DEMOLITION – PREMIUM EMPHASIS */}
<section className="relative py-28 px-6 md:px-20 bg-[#F0F2F5] overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#F0F2F5] to-[#E4E6E9]"></div>

  <div className="relative max-w-7xl mx-auto text-center space-y-12">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#093B5D]">
        {t("demolition.toolsTitle")}
      </h2>
      <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mt-6">
        {t("demolition.toolsDesc")}
      </p>
    </motion.div>

    {/* Video + Details */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
      {/* Video */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
      >
       <video
  className="w-full h-full object-cover"
  src="/demovid.mp4"
  controls
  playsInline
  preload="metadata"
  loading="lazy" // ✅ lazy load
></video>


        <div className="absolute top-4 left-4 bg-[#093B5D] text-white text-sm px-4 py-1 rounded shadow-md">
          {t("demolition.badgeHighReach", "High-Reach Precision")}
        </div>
      </motion.div>

      {/* Technical Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-5 text-left"
      >
        <h3 className="text-2xl font-bold text-[#093B5D]">
          {t("demolition.toolsHighlightTitle", "Technical Advantages")}
        </h3>
        <ul className="list-disc text-gray-700 text-lg ml-5 space-y-2">
          <li>{t("demolition.toolsExtra.0")}</li>
          <li>{t("demolition.toolsExtra.1")}</li>
        </ul>
        <p className="text-gray-600 mt-4 italic">
          {t("demolition.toolsNote", "Minimal disruption in dense urban and live infrastructure zones.")}
        </p>
      </motion.div>
    </div>
  </div>
</section>


      {/* EQUIPMENT */}
      <section ref={ref2} className="py-20 px-6 md:px-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="/demo2.png"
            alt={t("demolition.equipmentAlt")}
            loading="lazy" // ✅ lazy load
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#093B5D]">
              {t("demolition.equipmentTitle")}
            </h2>
            <ul className="list-disc text-lg ml-5 text-gray-700 space-y-1">
              <li>{t("demolition.equipmentList.0")}</li>
              <li>{t("demolition.equipmentList.1")}</li>
              <li>{t("demolition.equipmentList.2")}</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE CS */}
      <section ref={ref3} className="py-20 px-6 md:px-20 bg-[#093B5D] text-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b-2 pb-2 border-white/40">
              {t("demolition.whyTitle")}
            </h2>
            <ul className="list-disc text-lg ml-5 space-y-2 text-white">
              <li>{t("demolition.whyList.0")}</li>
              <li>{t("demolition.whyList.1")}</li>
              <li>{t("demolition.whyList.2")}</li>
              <li>{t("demolition.whyList.3")}</li>
            </ul>
          </div>
          <img
            src="/demo3.png"
            alt={t("demolition.whyAlt")}
            loading="lazy" // ✅ lazy load
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}
