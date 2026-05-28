"use client";

import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PortfolioNewMain from "./index";
import Hero from "./Hero";

export default function HomeWrapper({ customLinks }) {
  // Load initial theme state (default to dark as requested with premium dark theme)
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme !== null) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("portfolio-theme", newTheme ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="theme-bold">
        <div className="page" id="top">
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <Hero />
            </section>
            <PortfolioNewMain onePage dark={true} />
          </main>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Theme Styles Injection (based on the user's reference image gradient) */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Reference Navy-Purple Background Gradient */
        .dark-theme-mode {
          background: linear-gradient(135deg, #050c18 0%, #10081c 100%) !important;
          color: #ffffff !important;
          transition: background 0.5s ease-in-out;
        }
        
        .dark-theme-mode .page {
          background: transparent !important;
        }

        .dark-theme-mode main,
        .dark-theme-mode #main {
          background: transparent !important;
        }

        /* Set sections to transparent so the background gradient flows seamlessly */
        .dark-theme-mode .page-section {
          background: transparent !important;
        }

        /* Glassmorphic menu/nav adjustments in dark mode */
        .dark-theme-mode .main-nav {
          background: rgba(5, 12, 24, 0.75) !important;
          backdrop-filter: blur(20px) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        /* Dark mode Logo and Let's Talk button color visibility fixes */
        .dark-theme-mode .logo,
        .dark-theme-mode .logo:hover,
        .dark-theme-mode .logo:focus {
          color: #ffffff !important;
        }

        .dark-theme-mode .main-nav .btn-animate-y,
        .dark-theme-mode .main-nav .btn-animate-y-1,
        .dark-theme-mode .main-nav .btn-animate-y-2 {
          color: #ffffff !important;
        }

        .dark-theme-mode .main-nav .btn-border {
          border-color: rgba(255, 255, 255, 0.4) !important;
          color: #ffffff !important;
        }

        .dark-theme-mode .main-nav .btn-border:hover {
          background-color: #ffffff !important;
          color: #000000 !important;
          border-color: #ffffff !important;
        }

        .dark-theme-mode .main-nav .btn-border:hover .btn-animate-y-1,
        .dark-theme-mode .main-nav .btn-border:hover .btn-animate-y-2 {
          color: #000000 !important;
        }

        /* Standard text color overrides in dark mode */
        .dark-theme-mode .section-caption {
          color: #F5792A !important;
        }

        .dark-theme-mode .section-text,
        .dark-theme-mode p {
          color: rgba(255, 255, 255, 0.75) !important;
        }

        .dark-theme-mode h2,
        .dark-theme-mode h3,
        .dark-theme-mode h4,
        .dark-theme-mode h1 {
          color: #ffffff !important;
        }

        /* Outline titles in dark mode: Adding soft white glow */
        .dark-theme-mode .text-outline-2 {
          color: transparent !important;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.12) !important;
        }
        .dark-theme-mode .text-outline-1 {
          color: transparent !important;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.22) !important;
        }
        .dark-theme-mode .text-outline {
          color: #ffffff !important;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.1) !important;
        }

        /* Premium Reference-style Pills in Skills section */
        .dark-theme-mode .skill-card-template {
          background: rgba(255, 255, 255, 0.02) !important;
          backdrop-filter: blur(12px) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
        }

        /* Floating glassmorphic toggle button style */
        .floating-theme-toggle {
          position: fixed;
          bottom: 35px;
          right: 35px;
          width: 56px;
          height: 56px;
          border-radius: 50% !important;
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.5) !important;
          cursor: pointer;
          z-index: 9999999 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none !important;
          border-style: solid !important;
          padding: 0 !important;
          margin: 0 !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
        }
        
        .floating-theme-toggle:hover {
          transform: translateY(-5px) scale(1.08) rotate(15deg);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.6) !important;
          background: #ffffff !important;
        }

        .dark-theme-mode .floating-theme-toggle {
          background: rgba(10, 15, 30, 0.7) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.1) !important;
          color: #ffffff;
        }

        .dark-theme-mode .floating-theme-toggle:hover {
          background: rgba(15, 22, 42, 0.85) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        /* Adjust marquee in dark mode */
        .dark-theme-mode .marquee-style-2 {
          background: rgba(255, 255, 255, 0.02) !important;
          border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }
        
        .dark-theme-mode .marquee-track {
          color: rgba(255, 255, 255, 0.4) !important;
        }

        /* Navigation links color adjustments */
        .dark-theme-mode .main-nav .scroll-nav > li > a {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .dark-theme-mode .main-nav .scroll-nav > li > a:hover,
        .dark-theme-mode .main-nav .scroll-nav > li.active > a {
          color: #ffffff !important;
        }

        /* Services & Steps adjustments */
        .dark-theme-mode .steps-1-number {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25) !important;
          color: transparent !important;
        }
        .dark-theme-mode .steps-1-text {
          color: rgba(255, 255, 255, 0.65) !important;
        }

        /* Project card adjustments */
        .dark-theme-mode .video-showcase-card {
          background: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.06) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3) !important;
        }
        .dark-theme-mode .video-showcase-card:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.45) !important;
        }
        .dark-theme-mode .video-showcase-card h3 {
          color: #fff !important;
        }
        .dark-theme-mode .video-showcase-card p {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        .dark-theme-mode .video-showcase-card span {
          background-color: rgba(255, 255, 255, 0.08) !important;
          color: #ddd !important;
        }

        /* Collaborations panel */
        .dark-theme-mode .team-item {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
        }
        .dark-theme-mode .team-item:hover {
          background: rgba(255, 255, 255, 0.04) !important;
        }

        /* Testimonials adjustments */
        .dark-theme-mode .testimonials-card {
          background: rgba(255, 255, 255, 0.02) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
        
        /* Contact form fields adjustments */
        .dark-theme-mode .form-control {
          background: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
          color: #fff !important;
        }
        .dark-theme-mode .form-control:focus {
          border-color: rgba(255, 255, 255, 0.3) !important;
          background: rgba(255, 255, 255, 0.06) !important;
        }
      `}} />

      <div className={`theme-bold ${isDark ? "dark-theme-mode" : ""}`}>
        <div className="page" id="top">
          {/* Navigation Panel */}
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header links={customLinks} isDark={isDark} toggleTheme={toggleTheme} />
          </nav>
          {/* End Navigation Panel */}
          
          <main id="main">
            {/* Hero Section */}
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero dark={isDark} />
            </section>
            {/* End Hero Section */}

            {/* Main Sections */}
            <PortfolioNewMain onePage dark={isDark} />
          </main>

          {/* Footer */}
          <footer className={`footer-1 light-content ${isDark ? "dark-theme-mode" : "bg-dark-1"}`}>
            <Footer />
          </footer>
          {/* End Footer */}
        </div>
      </div>

      {/* Floating Theme Toggle (glowing circular action button) */}
      <button 
        className="floating-theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle light/dark theme"
      >
        {isDark ? (
          // Beautiful Golden Sun SVG
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" fill="#FFB000"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          // Elegant Indigo Moon SVG
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5046E6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#5046E6"></path>
          </svg>
        )}
      </button>
    </>
  );
}
