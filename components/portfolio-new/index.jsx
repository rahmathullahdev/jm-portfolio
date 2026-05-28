import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Faq from "./Faq";
import Team from "./Team";
import Link from "next/link";
import Image from "next/image";
import Skills from "./Skills";
export default function PortfolioNewMain({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section  scrollSpysection  pb-0 ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-last order-md-first">
              <div className="overflow-hidden">
                <Image
                  width={800}
                  height={1095}
                  src="/assets/images/my-portfolio/about.png"
                  className="w-100 wow scaleOutIn"
                  alt="Jashwanth Manikandan - About"
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1 d-flex align-items-center mb-sm-80">
              <div className="wow fadeInUp">
                <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                  <span className="text-outline-2" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline-1" aria-hidden="true">
                    About
                  </span>
                  <span className="text-outline">About</span>
                </h2>
                <p className="section-text mb-60 mb-md-40 mb-sm-30">
                  <span className="section-title-inline">Turning imagination into cinematic visuals.</span> <br /><br />
                  I am a creative media professional specialized in turning bold concepts into high-end cinematic visuals. Bridging the gap between 3D environmental design, 2D motion graphics, and elite video post-production, I build immersive digital experiences for brands and creators alike. Driven by storytelling, engineered for visual impact.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#services"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={`/bold-about${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Learn more{" "}
                        <span className="visually-hidden">about us</span>
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-section overflow-hidden">
        <Experience />
      </div>
      <section
        className={`page-section scrollSpysection  pt-0  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="awards"
      >
        <Awards />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="skills"
      >
        <Skills />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-80">
              <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
                <span className="text-outline-2">Services</span>
                <span className="text-outline-1">Services</span>
                <span className="text-outline">Services</span>
              </h2>
              <p className="section-text mb-60 mb-md-40 mb-sm-30">
                <span className="section-title-inline">Brand Collaborations &amp; Creative Deliverables</span> <br /><br />
                Partnering with forward-thinking brands to deliver high-end commercials, promotional reels, and cutting-edge 3D environmental experiences.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <>
                    {" "}
                    <a
                      href="#contact"
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                      href={`/bold-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim underline align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Request a quote
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Request a quote
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
              {/* Accordion */}
              <Faq />
              {/* End Accordion */}
            </div>
          </div>
          {/* Divider */}
          <div className="page-section">
            <hr
              className={`${
                dark ? "white opacity-015" : "black"
              } black mt-0 mb-0"`}
            />
          </div>
          {/* End Divider */}
          {/* Steps */}

          <Services />
          {/* End Steps */}
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <Portfolio />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="collaborations"
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2 className="section-caption-border">Collaborations</h2>
                <h3 className="section-title-strong mb-40">
                  Worked with <span className="font-alt">top</span> talents
                </h3>
                <p className="mb-40">
                  Delivering high-end commercials, promotional video edits, and custom visual art assets for prominent industry talents.
                </p>
                <div className="local-scroll">
                  <a
                    href="#contact"
                    className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                  >
                    <span>Inquire Collaboration</span>
                  </a>
                </div>
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <div className="col-xl-6 offset-xl-1">
              <Team />
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""} `}
      >
        <Testimonials />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="blog"
      >
        <Blog />
      </section>
      <hr
        className={`${dark ? "white opacity-015" : "black"} black mt-0 mb-0"`}
      />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="contact"
      >
        <Contact />
      </section>
    </>
  );
}
