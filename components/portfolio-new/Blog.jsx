"use client";

import React from "react";
import Image from "next/image";

// Jashwanth Manikandan's acting role in "Mellisai"
const myMovies = [
  {
    id: 1,
    title: "Mellisai",
    role: "Lead Actor",
    date: "Official Poster I",
    imgSrc: "/assets/images/my-portfolio/my-movie/1.png",
    rellaxSpeed: 1,
    rellaxPercentage: 0.1
  },
  {
    id: 2,
    title: "Mellisai",
    role: "Lead Actor",
    date: "Official Poster II",
    imgSrc: "/assets/images/my-portfolio/my-movie/2.png",
    rellaxSpeed: 0,
    rellaxPercentage: 0
  },
  {
    id: 3,
    title: "Mellisai",
    role: "Lead Actor",
    date: "Official Poster III",
    imgSrc: "/assets/images/my-portfolio/my-movie/3.png",
    rellaxSpeed: -1,
    rellaxPercentage: 0.1
  }
];

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mb-md-80">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">Featured Film</span>
            <span className="text-outline-1">Featured Film</span>
            <span className="text-outline">Featured Film</span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">Mellisai.</span> I played the lead main role in the Tamil feature film <strong>"Mellisai"</strong>. Explore the official promotional posters for the movie below.
          </p>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="row gy-4">
        {myMovies.map((movie, i) => (
          <div
            key={movie.id}
            className={`post-prev-2 col-md-6 col-lg-4 
              ${i == 0 ? "mt-140 mt-md-0" : ""}
              ${i == 2 ? "mt-n140 mt-md-0" : ""}
            `}
            data-rellax-y=""
            data-rellax-speed={movie.rellaxSpeed || 0}
            data-rellax-percentage={movie.rellaxPercentage || 0}
          >
            {/* Poster Card */}
            <div 
              className="post-prev-2-img"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.06)",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <Image
                width={600}
                height={800}
                src={movie.imgSrc}
                alt={movie.title}
                style={{ objectFit: "cover", width: "100%", height: "auto", aspectRatio: "3/4" }}
              />
            </div>
            
            {/* Meta Text details */}
            <div style={{ marginTop: "20px" }}>
              <span 
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(0,0,0,0.05)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                  color: "#555"
                }}
              >
                {movie.role}
              </span>
              <h3 
                className="post-prev-2-title font-alt"
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                  color: "#000"
                }}
              >
                {movie.title}
              </h3>
              <div 
                className="post-prev-2-info"
                style={{
                  fontSize: "14px",
                  color: "#888",
                  fontWeight: "500"
                }}
              >
                {movie.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

