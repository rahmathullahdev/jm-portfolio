"use client";

import React, { useState } from "react";

const skillsData = [
  {
    id: 1,
    name: "Blender",
    category: "3D Modelling & Visuals",
    proficiency: 95,
    glowColor: "rgba(245, 121, 42, 0.4)",
    borderColor: "rgba(245, 121, 42, 0.3)",
    accentColor: "#F5792A",
    capabilities: ["3D Environment Design", "Hard Surface Modelling", "Studio Lighting", "Octane & Cycles Render"],
    description: "Creating highly detailed 3D assets, stadium architectures, photorealistic product renders, and environmental visual backdrops.",
    svgIcon: (
      <img 
        src="/assets/images/blender-logo.png" 
        alt="Blender Logo" 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "contain",
          display: "block"
        }} 
      />
    )
  },
  {
    id: 2,
    name: "Adobe Photoshop",
    category: "Graphic Design & Digital Art",
    proficiency: 90,
    glowColor: "rgba(0, 200, 255, 0.4)",
    borderColor: "rgba(0, 200, 255, 0.3)",
    accentColor: "#00C8FF",
    capabilities: ["Matte Painting", "Image Manipulation", "Custom Branding Assets", "Texture Design"],
    description: "Designing modern digital asset layouts, complex composite graphics, premium branding templates, and high-fidelity textures.",
    svgIcon: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        {/* Photoshop App Logo */}
        <rect x="14" y="14" width="100" height="100" rx="18" fill="#001E36" stroke="#00C8FF" strokeWidth="4" />
        <text 
          x="64" 
          y="78" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="46" 
          fontWeight="bold" 
          fill="#00C8FF" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Ps
        </text>
      </svg>
    )
  },
  {
    id: 3,
    name: "Adobe After Effects",
    category: "2D Motion & VFX",
    proficiency: 88,
    glowColor: "rgba(209, 36, 255, 0.4)",
    borderColor: "rgba(209, 36, 255, 0.3)",
    accentColor: "#D124FF",
    capabilities: ["2D Character Animation", "Kinetic Typography", "Motion Tracking", "VFX Compositing"],
    description: "Crafting fluid vector-based character animations, dynamic title graphics, and seamless visual effects composites.",
    svgIcon: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        {/* After Effects App Logo */}
        <rect x="14" y="14" width="100" height="100" rx="18" fill="#120024" stroke="#D124FF" strokeWidth="4" />
        <text 
          x="64" 
          y="78" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="46" 
          fontWeight="bold" 
          fill="#D124FF" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Ae
        </text>
      </svg>
    )
  },
  {
    id: 4,
    name: "Adobe Premiere Pro",
    category: "Cinematic Video Editing",
    proficiency: 92,
    glowColor: "rgba(234, 38, 199, 0.4)",
    borderColor: "rgba(234, 38, 199, 0.3)",
    accentColor: "#EA26C7",
    capabilities: ["Reels & Commercial Editing", "Professional Color Grading", "Sound Design", "Dialogue Pacing"],
    description: "Editing fast-paced promotional commercials, viral vertical reels, documentary cinematics, and premium color graded video projects.",
    svgIcon: (
      <svg viewBox="0 0 128 128" width="100%" height="100%">
        {/* Premiere Pro App Logo */}
        <rect x="14" y="14" width="100" height="100" rx="18" fill="#1F0018" stroke="#EA26C7" strokeWidth="4" />
        <text 
          x="64" 
          y="78" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontSize="46" 
          fontWeight="bold" 
          fill="#EA26C7" 
          textAnchor="middle"
          dominantBaseline="middle"
        >
          Pr
        </text>
      </svg>
    )
  }
];

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container">
      {styleTag}
      
      {/* Dynamic Design Header */}
      <div className="row mb-60 mb-sm-40">
        <div className="col-lg-10">
          <h2 className="section-caption mb-20">Creative Toolkit</h2>
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-30">
            <span className="text-outline-2" aria-hidden="true">
              Technical Arsenal
            </span>
            <span className="text-outline-1" aria-hidden="true">
              Technical Arsenal
            </span>
            <span className="text-outline">Technical Arsenal</span>
          </h2>
          <p className="section-text text-gray max-width-700 mt-20">
            Harnessing industry-leading software to engineer top-tier creative assets, immersive 3D models, and high-energy motion reels.
          </p>
        </div>
      </div>

      {/* Grid of Interactive Software Cards */}
      <div className="row g-4">
        {skillsData.map((skill) => {
          const isHovered = hoveredCard === skill.id;
          return (
            <div key={skill.id} className="col-md-6 col-lg-3">
              <div
                className="skill-card-template"
                style={{
                  position: "relative",
                  borderRadius: "24px",
                  padding: "30px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: isHovered ? "#fff" : "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: isHovered ? `1px solid ${skill.accentColor}` : "1px solid rgba(0,0,0,0.08)",
                  boxShadow: isHovered 
                    ? `0 20px 40px -10px ${skill.glowColor}, 0 0 20px 0 ${skill.glowColor}`
                    : "0 10px 30px rgba(0,0,0,0.02)",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  overflow: "hidden"
                }}
                onMouseEnter={() => setHoveredCard(skill.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Accent Corner Glow */}
                <div 
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: skill.accentColor,
                    filter: "blur(40px)",
                    opacity: isHovered ? 0.3 : 0.08,
                    transition: "opacity 0.4s"
                  }}
                />

                {/* Software Logo Area */}
                <div 
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    marginBottom: "25px",
                    transform: isHovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {skill.svgIcon}
                </div>

                {/* Information Header */}
                <div style={{ marginBottom: "15px" }}>
                  <span 
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      color: isHovered ? skill.accentColor : "#888",
                      display: "block",
                      marginBottom: "6px",
                      transition: "color 0.3s"
                    }}
                  >
                    {skill.category}
                  </span>
                  <h3 
                    style={{
                      fontFamily: 'var(--font-alt), "Plus Jakarta Sans", sans-serif',
                      fontSize: "22px",
                      fontWeight: "800",
                      color: "#000",
                      margin: 0
                    }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* Software Description */}
                <p 
                  style={{ 
                    fontSize: "13.5px", 
                    lineHeight: "1.6", 
                    color: "#555", 
                    marginBottom: "25px",
                    flexGrow: 1 
                  }}
                >
                  {skill.description}
                </p>

                {/* Capabilities Pills / Design details */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                  {skill.capabilities.map((capability, index) => (
                    <span 
                      key={index}
                      style={{
                        padding: "5px 11px",
                        borderRadius: "15px",
                        fontSize: "11px",
                        fontWeight: "600",
                        backgroundColor: isHovered ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0.03)",
                        color: isHovered ? "#111" : "#555",
                        border: "1px solid rgba(0, 0, 0, 0.04)",
                        transition: "all 0.3s"
                      }}
                    >
                      {capability}
                    </span>
                  ))}
                </div>

                {/* Premium Interactive Slide-up Progress Line */}
                <div 
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    backgroundColor: "rgba(0,0,0,0.05)"
                  }}
                >
                  <div 
                    style={{
                      height: "100%",
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.accentColor,
                      boxShadow: isHovered ? `0 0 10px ${skill.accentColor}` : "none",
                      transform: isHovered ? "scaleY(1.5)" : "scaleY(1)",
                      transformOrigin: "bottom",
                      transition: "transform 0.3s, box-shadow 0.3s"
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Inline CSS overrides for Dark Mode integration
const styleTag = (
  <style dangerouslySetInnerHTML={{ __html: `
    .light-content .skill-card-template {
      background: rgba(30, 30, 30, 0.6) !important;
      border-color: rgba(255, 255, 255, 0.06) !important;
    }
    .light-content .skill-card-template:hover {
      background: #1a1a1a !important;
    }
    .light-content .skill-card-template h3 {
      color: #fff !important;
    }
    .light-content .skill-card-template p {
      color: #ccc !important;
    }
    .light-content .skill-card-template span {
      background-color: rgba(255, 255, 255, 0.07) !important;
      color: #eee !important;
      border-color: rgba(255, 255, 255, 0.05) !important;
    }
    .light-content .skill-card-template span:hover {
      background-color: rgba(255, 255, 255, 0.12) !important;
    }
  `}} />
);
