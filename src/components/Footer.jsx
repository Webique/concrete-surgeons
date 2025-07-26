import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      dir={isRTL ? 'rtl' : 'ltr'}
      className="bg-white text-black px-6 md:px-20 pt-12 pb-6 mt-0 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <img
            src="/logo1.jpg"
            alt="Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain transition-all duration-500"
          />
          <p className="opacity-70 leading-relaxed max-w-xs">
            {t('footer.tagline', 'Precision demolition, cutting & retrofitting — built for the future.')}
          </p>
        </div>

        {/* Contact Info + Socials */}
        <div className={`flex flex-col gap-2 ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
          <h4 className="font-bold text-lg mb-2">{t('footer.contact', 'Contact Us')}</h4>
          <p>+20 1028567000</p>
          <p>+20 1062318000</p>
          <p>+20 1028588003</p>
          <p>contact@csmisr.com</p>
          <p>{t('footer.hours', 'Sun–Thu: 9:00 AM – 5:00 PM')}</p>

          <div className="flex gap-4 mt-4 text-[#093B5D]">
            <a
              href="https://www.instagram.com/csmisr?igsh=OXB1dGxwbzIzMWN0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-600 transition"
            >
              <FaInstagram className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/company/h1-for-engineering-services/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedinIn className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.facebook.com/ConcreteSurgeons?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-700 transition"
            >
              <FaFacebookF className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg w-full h-40 md:h-48">
          <iframe
            title="Concrete Surgeons Map"
            src="https://www.google.com/maps?q=30.1254167,31.3768889&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-10 text-xs opacity-60">
        © {new Date().getFullYear()} Concrete Surgeons. {t('footer.rights', 'All rights reserved.')}.
      </div>
    </motion.footer>
  );
};

export default Footer;
