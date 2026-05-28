"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "@/components/headers/components/Nav";
import Link from "next/link";

export default function Header({ links }) {
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
