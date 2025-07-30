import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Demolition from './pages/Demolition';
import ConcreteCutting from './pages/ConcreteCutting';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures scroll reset on route change */}
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/demolition" element={<Demolition />} />
          <Route path="/services/cutting" element={<ConcreteCutting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
