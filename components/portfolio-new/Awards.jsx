"use client";

import React, { useState } from "react";

// Real award assets and titles matching Jashwanth Manikandan's portfolio
const myAwards = [
  {
    id: 1,
    title: "El Adonai Awards",
    description: "Best Visual Effects & 3D Environment Design",
    date: "2022",
    imgSrc: "/assets/images/my-portfolio/awards/EL ADONAI AWARDS 2022.png"
  },
  {
    id: 2,
    title: "Vee's Media Festival",
    description: "Official Selection - Creative Post-Production",
    date: "2021",
    imgSrc: "/assets/images/my-portfolio/awards/Vee's media shortfilm festivals 2021.jpg"
  },
  {
    id: 3,
    title: "Hashtag Awards",
    description: "Honorable Mention - Outstanding Motion Graphics",
    date: "2023",
    imgSrc: "/assets/images/my-portfolio/awards/hashtag.jpg"
  },
    {
    id: 4,
    title: "BlackSheep Awards",
    description: "Honorable Mention - Outstanding Art Direction",
    date: "2023",
    imgSrc: "/assets/images/my-portfolio/awards/BlackSheep.png"
  }
];

export default function Awards() {
  // Duplicate awards list so the marquee is very wide and loops seamlessly
  const repeatedAwards = [...myAwards, ...myAwards, ...myAwards, ...myAwards, ...myAwards, ...myAwards, ...myAwards, ...myAwards];

  // Track hovered state for the cards to apply zoom/hover styles inline
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container overflow-hidden-x">
      {/* Outline styled Title */}
      <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
        <span className="text-outline-2">Awards / Recognitions</span>
        <span className="text-outline-1">Awards / Recognitions</span>
        <span className="text-outline">Awards / Recognitions</span>
      </h2>
      <hr className="mt-0 mb-50" />

      {/* Styled pure CSS Marquee Wrapper */}
      <div className="custom-marquee-container wow fadeInUp">
        <style dangerouslySetInnerHTML={{ __html: `
          .custom-marquee-container {
            position: relative;
            width: 100vw;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            overflow: hidden;
            padding: 15px 0 35px;
          }
          .custom-marquee-row {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
            user-select: none;
            width: 100%;
          }
          .custom-marquee-track-left {
            display: flex;
            white-space: nowrap;
            animation: marquee-scroll-left 45s linear infinite;
          }
          .custom-marquee-row:hover .custom-marquee-track-left {
            animation-play-state: paused;
          }
          
          /* Theme color variables applied to cards via classes */
          .custom-marquee-card {
            background: rgba(255, 255, 255, 0.85);
            border: 1px solid rgba(0, 0, 0, 0.08);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.03);
          }
          .light-content .custom-marquee-card {
            background: rgba(26, 26, 26, 0.85);
            border-color: rgba(255, 255, 255, 0.08);
            box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);
          }
          .custom-marquee-card:hover {
            background: #fff !important;
          }
          .light-content .custom-marquee-card:hover {
            background: #1f1f1f !important;
          }
          .custom-card-title {
            color: #000;
          }
          .light-content .custom-card-title {
            color: #fff;
          }
          .custom-card-desc {
            color: #666;
          }
          .light-content .custom-card-desc {
            color: #aaa;
          }

          @keyframes marquee-scroll-left {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          
          @media (max-width: 991px) {
            .mobile-card-scale {
              width: 500px !important;
              padding: 22px !important;
            }
            .mobile-img-scale {
              width: 120px !important;
              height: 120px !important;
              margin-right: 22px !important;
            }
            .mobile-title-scale {
              font-size: 19px !important;
            }
            .mobile-desc-scale {
              font-size: 14px !important;
            }
          }
          @media (max-width: 768px) {
            .mobile-card-scale {
              width: 420px !important;
              padding: 18px !important;
              margin: 0 12px !important;
            }
            .mobile-img-scale {
              width: 100px !important;
              height: 100px !important;
              margin-right: 18px !important;
            }
            .mobile-title-scale {
              font-size: 16px !important;
            }
            .mobile-desc-scale {
              font-size: 13px !important;
            }
          }
          @media (max-width: 576px) {
            .mobile-card-scale {
              width: 345px !important;
              padding: 14px !important;
              margin: 0 8px !important;
            }
            .mobile-img-scale {
              width: 80px !important;
              height: 80px !important;
              margin-right: 14px !important;
              border-radius: 12px !important;
            }
            .mobile-title-scale {
              font-size: 14px !important;
            }
            .mobile-desc-scale {
              font-size: 11px !important;
            }
          }
        `}} />

        {/* Single Row: Scrolling Left */}
        <div className="custom-marquee-row">
          <div className="custom-marquee-track-left">
            {repeatedAwards.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <div 
                  className="custom-marquee-card mobile-card-scale" 
                  key={`award-${index}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "720px", // Direct giant width override
                    flexShrink: 0,
                    borderRadius: "28px",
                    padding: "32px", // Direct giant padding override
                    margin: "0 20px",
                    backdropFilter: "blur(12px)",
                    textAlign: "left",
                    whiteSpace: "normal",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                    transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 25px 55px rgba(0,0,0,0.09)" : "0 15px 45px rgba(0,0,0,0.03)",
                    cursor: "pointer"
                  }}
                >
                  {/* Image Wrapper */}
                  <div 
                    className="custom-card-img-wrap mobile-img-scale"
                    style={{
                      width: "180px", // Direct giant image wrapper width override
                      height: "180px", // Direct giant image wrapper height override
                      flexShrink: 0,
                      borderRadius: "20px",
                      overflow: "hidden",
                      marginRight: "35px", // Direct giant margin override
                      background: "rgba(0, 0, 0, 0.03)",
                      border: "1px solid rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <img
                      className="custom-card-img"
                      src={item.imgSrc}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "100%", // Direct override to force filling the container
                        height: "100%", // Direct override to force filling the container
                        objectFit: "cover", // Direct override to ensure no white borders
                        display: "block",
                        transition: "transform 0.5s ease",
                        transform: isHovered ? "scale(1.08)" : "scale(1)"
                      }}
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="custom-card-content" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <span 
                      className="custom-card-date"
                      style={{
                        fontSize: "14px", // Scaled up date
                        fontWeight: "700",
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: "1.5px",
                        marginBottom: "8px",
                        display: "block"
                      }}
                    >
                      {item.date}
                    </span>
                    <h4 
                      className="custom-card-title mobile-title-scale"
                      style={{
                        fontFamily: 'var(--font-alt), "Plus Jakarta Sans", sans-serif',
                        fontSize: "25px", // Direct giant title size scale up
                        fontWeight: "800",
                        lineHeight: "1.3",
                        marginBottom: "6px"
                      }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="custom-card-desc mobile-desc-scale mb-0"
                      style={{
                        fontSize: "17px", // Direct giant description size scale up
                        lineHeight: "1.5",
                        margin: 0
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}





