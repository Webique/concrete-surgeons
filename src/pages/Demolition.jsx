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


{/* SECTION 1: Introduction & What Is It – Enhanced Design with Larger Image */}
<section className="bg-gradient-to-b from-white via-[#f6f9fc] to-[#e9eef5] py-28 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-24">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#093B5D]">{t("demolition.highReachTitle")}</h2>
      <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
        {t("demolition.highReachSubtitle")}
      </p>
    </motion.div>

    {/* WHAT IS IT */}
    <div className="grid md:grid-cols-12 gap-12 items-center">
      {/* Left – Text */}
      <div className="md:col-span-6 text-gray-800 text-[17px] leading-relaxed space-y-4">
        <h3 className="text-2xl font-bold text-[#093B5D]">{t("demolition.whatIsTitle")}</h3>
        <ul className="list-disc ml-5 space-y-2">
          {t("demolition.whatIsList", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Right – Larger Image */}
      <div className="md:col-span-6 text-center">
        <img
          src="/new.png"
          alt="High Reach Excavator"
          loading="lazy"
          className="w-full max-w-xl mx-auto rounded-xl shadow-md border border-gray-200 bg-white p-3"
        />
      </div>
    </div>

  </div>
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
        {t("demolition.safetyList", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
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
        {t("demolition.badgeSafety")}
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
          {t("demolition.badgeHighReach")}
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
          {t("demolition.toolsHighlightTitle")}
        </h3>
        <ul className="list-disc text-gray-700 text-lg ml-5 space-y-2">
          {t("demolition.toolsExtra", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="text-gray-600 mt-4 italic">
          {t("demolition.toolsNote")}
        </p>
      </motion.div>
    </div>
  </div>
</section>
{/* SECTION 2: Attachments & Pioneering – Elegant Design */}
<section className="bg-[#f7f9fc] py-24 px-6 md:px-20">
  <div className="max-w-6xl mx-auto space-y-24">

   {/* ATTACHMENTS BLOCK – with Multiple Tools */}
<div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
  <div className="grid md:grid-cols-12 gap-10 items-center">

    {/* Text Content */}
    <div className="md:col-span-6 text-gray-800 text-[17px] leading-relaxed space-y-4">
      <h3 className="text-2xl font-bold text-[#093B5D]">{t("demolition.attachmentsTitle")}</h3>
      <p>
        {t("demolition.attachmentsDesc")}
      </p>
      <ul className="list-disc ml-5 space-y-2">
        {t("demolition.attachmentsList", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Image Row */}
    <div className="md:col-span-6">
      <div className="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
        <img
          src="/neww1.png"
          alt="Pulverizer"
          loading="lazy"
          className="w-[100px] h-auto rounded-md shadow-sm"
        />
        <img
          src="/new2.png"
          alt="Steel Shear"
          loading="lazy"
          className="w-[100px] h-auto rounded-md shadow-sm"
        />
        <img
          src="/new3.png"
          alt="Crusher"
          loading="lazy"
          className="w-[100px] h-auto rounded-md shadow-sm"
        />
      </div>
    </div>

  </div>
</div>

    {/* PIONEERING BLOCK */}
    <div className="grid md:grid-cols-12 items-center gap-8">
      {/* Image */}
      <div className="md:col-span-4 text-center">
        <img
          src="/neww2.png"
          alt="Pioneering Equipment"
          loading="lazy"
          className="w-[180px] h-auto mx-auto rounded-lg shadow-sm"
        />
      </div>
      {/* Text */}
      <div className="md:col-span-8 text-gray-800 text-[17px] leading-relaxed">
        <h3 className="text-2xl font-bold text-[#093B5D] mb-4">{t("demolition.pioneeringTitle")}</h3>
        <p>
          {t("demolition.pioneeringDesc")}
        </p>
      </div>
    </div>

  </div>
</section>


{/* SECTION 3: Supporting Images & Final Closing */}
<section className="bg-[#e9ecf1] py-28 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-24">

    {/* SUPPORTING IMAGES – Premium Alternating Layout */}
    <div className="space-y-20">

      {/* Image + Text Block 1 */}
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <img
            src="/new5.png"
            alt="Urban Precision"
            loading="lazy"
            className="rounded-xl w-full max-w-sm mx-auto shadow-md object-cover"
          />
        </div>
        <div className="md:col-span-7 text-gray-700 text-lg leading-relaxed">
          <h4 className="text-xl font-semibold text-[#093B5D] mb-2">{t("demolition.urbanTitle")}</h4>
          {t("demolition.urbanDesc")}
        </div>
      </div>

      {/* Block 2 */}
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 text-gray-700 text-lg leading-relaxed order-2 md:order-1">
          <h4 className="text-xl font-semibold text-[#093B5D] mb-2">{t("demolition.machineryTitle")}</h4>
          {t("demolition.machineryDesc")}
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <img
            src="/new6.png"
            alt="Custom Equipment"
            loading="lazy"
            className="rounded-xl w-full max-w-sm mx-auto shadow-md object-cover"
          />
        </div>
      </div>

      {/* Block 3 */}
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5">
          <img
            src="/new7.png"
            alt="Real-Time Monitoring"
            loading="lazy"
            className="rounded-xl w-full max-w-sm mx-auto shadow-md object-cover"
          />
        </div>
        <div className="md:col-span-7 text-gray-700 text-lg leading-relaxed">
          <h4 className="text-xl font-semibold text-[#093B5D] mb-2">{t("demolition.monitoringTitle")}</h4>
          {t("demolition.monitoringDesc")}
        </div>
      </div>

    </div>

    {/* FINAL CLOSING */}
    <div className="text-center space-y-10 pt-16">
      <img
        src="/new8.png"
        alt="Concrete Surgeons"
        loading="lazy"
        className="mx-auto w-full max-w-md rounded-xl shadow-md"
      />
      <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
        {t("demolition.closingText")}
      </p>
    </div>

  </div>
</section>


{/* CONTROLLED DEMOLITION */}
<section className="bg-[#f7f9fc] py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-16">
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#093B5D]">{t("demolition.controlledTitle")}</h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto">
        {t("demolition.controlledDesc")}
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <ul className="text-gray-800 text-[17px] space-y-3 list-disc ml-6">
        {t("demolition.controlledList", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-6 justify-center">
        <img src="/تحميل.jpg" alt="Controlled Demo 1" loading="lazy" className="rounded-xl shadow-md object-cover w-full" />
        <img src="/تحميل ونش.jpg" alt="Controlled Demo 2" loading="lazy" className="rounded-xl shadow-md object-cover w-full" />
      </div>
    </div>
  </div>
</section>

{/* DIAMOND WIRE SAWING */}
<section className="bg-white py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-16">
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#093B5D]">{t("demolition.diamondTitle")}</h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto">
        {t("demolition.diamondDesc")}
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <ul className="text-gray-800 text-[17px] space-y-3 list-disc ml-6">
        {t("demolition.diamondList", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img
        src="/diamond wire cutting.jpg"
        alt="Diamond Wire Sawing"
        loading="lazy"
        className="rounded-xl shadow-md object-cover w-full max-w-md mx-auto"
      />
    </div>
  </div>
</section>

{/* ROBOTIC DEMOLITION */}
<section className="bg-[#f1f5f9] py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto space-y-16">
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#093B5D]">{t("demolition.roboticTitle")}</h2>
      <p className="text-gray-700 text-lg max-w-3xl mx-auto">
        {t("demolition.roboticDesc")}
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 items-center">
      <ul className="text-gray-800 text-[17px] space-y-3 list-disc ml-6">
        {t("demolition.roboticList", { returnObjects: true }).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-6 justify-center">
        <img src="/robot.jpg" alt="Brokk Robot 1" loading="lazy" className="rounded-xl shadow-md object-cover w-full" />
        <img src="/robot1.jpg" alt="Brokk Robot 2" loading="lazy" className="rounded-xl shadow-md object-cover w-full" />
      </div>
    </div>
  </div>
</section>





     
      {/* WHY CHOOSE CS */}
      <section ref={ref3} className="py-20 px-6 md:px-20 bg-[#1c3b8d] text-white">
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
              {t("demolition.whyList", { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
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
