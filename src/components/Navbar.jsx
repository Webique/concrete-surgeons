import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navRef = useRef();
  const isRTL = i18n.language === 'ar';
  let lastScroll = window.scrollY;

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(currentScroll < lastScroll || currentScroll < 10);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    {
      label: t('nav.services'),
      submenu: [
        { path: '/services/demolition', label: t('nav.demolition') },
        { path: '/services/cutting', label: t('nav.cutting') },
      ],
    },
    { path: '/case-studies', label: t('nav.caseStudies') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div
        className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"
        ref={navRef}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-24 h-24 object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex items-center gap-6 ${
            isRTL ? 'flex-row-reverse text-right' : 'text-left'
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {(isRTL ? [...navItems].reverse() : navItems).map((item, idx) =>
            item.submenu ? (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <span className="text-sm text-gray-800 hover:text-primary cursor-pointer transition duration-300">
                  {item.label}
                </span>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white border rounded shadow-xl z-50 mt-2 min-w-[180px] space-y-1"
                    >
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-gray-800 hover:text-primary transition duration-300"
              >
                {item.label}
              </Link>
            )
          )}

          <button
            onClick={toggleLanguage}
            className="border px-3 py-1 text-sm rounded-full hover:bg-primary hover:text-white transition"
          >
            {i18n.language === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8"
          aria-label="Toggle Menu"
        >
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden bg-white px-6 pt-4 pb-6 space-y-4 shadow-inner ${
              isRTL ? 'text-right' : 'text-left'
            }`}
          >
            {navItems.map((item, idx) =>
              item.submenu ? (
                <div key={idx} className="space-y-2">
                  <div className="text-sm text-gray-800 font-semibold">{item.label}</div>
                  <div className="ml-4 space-y-2">
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        to={sub.path}
                        className="block text-sm text-gray-700 hover:text-primary"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-sm text-gray-800 hover:text-primary transition duration-300"
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              onClick={toggleLanguage}
              className="block border px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition"
            >
              {i18n.language === 'en' ? 'عربي' : 'EN'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
