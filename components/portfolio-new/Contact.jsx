"use client";

import { useState } from "react";

export default function Contact({ heading }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919952917344";
    const text = `Hello, I'm *${name}*.\n\nEmail: ${email}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Contact Me"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Contact Me"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Contact Me"}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">How?</span> Have a question?
            Just drop me a line via email or make a WhatsApp call. I am
            available for new projects and interesting ideas.
          </p>
          <div>
            <a
              href="mailto:incarnationpictures@gmail.com"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              incarnationpictures@gmail.com
            </a>
          </div>
          <div>
            <a
              href="tel:+919952917344"
              className="link-hover-anim align-middle"
              data-link-animate="y"
            >
              +91 99529 17344
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="form contact-form wow fadeInUp"
            id="contact_form"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Your Name
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your name here"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                Email Address
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your email here"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                What&apos;s your question?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Enter your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  type="submit"
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Send Message</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Send Message
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the <a href="#">Terms &amp; Conditions</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}
