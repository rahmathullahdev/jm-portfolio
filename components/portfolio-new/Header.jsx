"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "@/components/headers/components/Nav";
import Link from "next/link";

export default function Header({ links, isDark, toggleTheme }) {
  return (
    <div className="main-nav-sub full-wrapper">
      {/* Logo */}
      <div className="nav-logo-wrap local-scroll">
        <Link
          href="#top"
          className="logo font-alt fs-8 fw-bold text-uppercase tracking-wider"
          style={{ whiteSpace: "nowrap" }}
        >
          JASHWANTH MANIKANDAN.
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menu</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll scrollspyLinks">
          <Nav links={links} />
        </ul>
        <ul className="items-end clearlist local-scroll">
          {/* Desktop Inline Theme Toggle */}
          {toggleTheme && (
            <li style={{ marginRight: "18px", display: "inline-flex", alignItems: "center", height: "100%" }}>
              <button 
                onClick={toggleTheme}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isDark ? "#fff" : "#111",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.15) rotate(15deg)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1) rotate(0)"}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  // Sun SVG
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 3px #F5792A)" }}>
                    <circle cx="12" cy="12" r="5" fill="#F5792A" stroke="#F5792A"></circle>
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
                  // Moon SVG
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 2px rgba(0,0,0,0.15))" }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#000" stroke="#000"></path>
                  </svg>
                )}
              </button>
            </li>
          )}
          <li>
            <a href="tel:+919952917344" className="opacity-1 no-hover">
              <span
                className="btn btn-mod btn-small btn-border btn-border-white btn-circle ttn"
                data-btn-animate="y"
              >
                <span className="btn-animate-y">
                  <span className="btn-animate-y-1">
                    Let’s talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span className="btn-animate-y-2" aria-hidden="true">
                    Let’s talk{" "}
                    <i
                      className="icon-arrow-right1 size-16"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
