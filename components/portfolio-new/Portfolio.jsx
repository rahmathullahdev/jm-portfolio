"use client";
import React, { useState } from "react";

const customProjects = [
  {
    id: 1,
    videoSrc: "/assets/images/my-portfolio/projects/project-3.mp4",
    title: "3D Character Animation Showcase",
    category: "3D Animation",
    description: "Engaging character animations, storytelling assets, and smooth motion graphics.",
  },
  {
    id: 2,
    videoSrc: "/assets/images/my-portfolio/projects/project-1.mp4",
    title: "Product Visualization",
    category: "2D Modelling",
    description: "Photorealistic 2D product visualizations, studio lighting set-ups, and concept renders.",
  },
  {
    id: 3,
     videoSrc: "/assets/images/my-portfolio/projects/project-01.mp4",
    title: "ICC T20 Worldcup Environment Design",
    category: "3D Modelling",
    description: "High-fidelity 3D environment modelling and stadium architectural asset design.",
  },
  {
    id: 4,
    videoSrc: "/assets/images/my-portfolio/projects/MMRT Chronicles.webm",
    title: "MMRT Chronicles - Racing Cinematic",
    category: "Reels Editing",
    description: "A high-octane racing documentary showcase edited for Madras Motor Race Track (MMRT), highlighting speed, dynamic sound design, and color grading.",
  },
  {
    id: 5,
    videoSrc: "/assets/images/my-portfolio/projects/RK Cartering.webm",
    title: "RK Catering - Promotional Commercial",
    category: "Reels Editing",
    description: "A premium, fast-paced commercial promotional ad reel for RK Catering, highlighting luxury gourmet presentation and event dynamic editing.",
  },
  {
    id: 6,
    videoSrc: "/assets/images/my-portfolio/projects/The Bhai Friends.webm",
    title: "The Bhai Friends - Biryani Catering Promo",
    category: "Reels Editing",
    description: "A premium, dynamic commercial promotional ad reel for The Bhai Friends Biryani Catering, showcasing mouth-watering culinary preparation, rich traditional flavors, and cinematic food styling.",
  },
];

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const modalStyles = {
    backdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.95)",
      backdropFilter: "blur(15px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99999,
    },
    content: {
      position: "relative",
      width: "auto",
      height: "90%",
      aspectRatio: "9/16",
      backgroundColor: "#000",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    },
    player: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    close: {
      position: "absolute",
      top: "15px",
      right: "20px",
      fontSize: "36px",
      color: "#fff",
      border: "none",
      background: "none",
      cursor: "pointer",
      zIndex: 100000,
      transition: "transform 0.2s",
    }
  };

  return (
    <div className="container" id="portfolio">
      {/* Header with Signature Bold Outline Style */}
      <div className="row mb-60 mb-sm-40">
        <div className="col-lg-10">
          <h2 className="section-caption mb-20">Our Portfolio</h2>
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-30">
            <span className="text-outline-2" aria-hidden="true">
              Creativity meets technology
            </span>
            <span className="text-outline-1" aria-hidden="true">
              Creativity meets technology
            </span>
            <span className="text-outline">Creativity meets technology</span>
          </h2>
          <p className="section-text text-gray max-width-700 mt-20">
            A curated showcase of high-end 3D modelling, 2D animations, and cinematic vertical Reels.
          </p>
        </div>
      </div>

      {/* Premium 3-Column Vertical Showcase Grid (col-lg-4) */}
      <div className="row g-4">
        {customProjects.map((item, index) => (
          <div key={index} className="col-sm-6 col-lg-4">
            <div 
              className="video-showcase-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.06)",
                backgroundColor: "#fff",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer"
              }}
              onClick={() => setSelectedVideo(item.videoSrc)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.05)";
              }}
            >
              {/* Loop Video Card - 9:16 vertical smartphone Reels preview */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "9/16", overflow: "hidden", backgroundColor: "#000" }}>
                <video
                  src={item.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                
                {/* Overlay Hover Darken & Play Button */}
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.4s"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.25)"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "rgba(0,0,0,0.1)"}
                >
                  <div 
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
                    }}
                  >
                    <i className="mi-play" style={{ fontSize: "24px", color: "#000", marginLeft: "4px" }} />
                  </div>
                </div>
              </div>

              {/* Text Meta Content */}
              <div style={{ padding: "24px" }}>
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
                    marginBottom: "12px",
                    color: "#555"
                  }}
                >
                  {item.category}
                </span>
                <h3 
                  className="font-alt"
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    lineHeight: "1.4",
                    color: "#000"
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#666",
                    marginBottom: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div 
          style={modalStyles.backdrop}
          onClick={() => setSelectedVideo(null)}
        >
          <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
            <button 
              style={modalStyles.close} 
              onClick={() => setSelectedVideo(null)}
              onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
              onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
            >
              &times;
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay 
              style={modalStyles.player} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
