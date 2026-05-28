import React from "react";

const servicesList = [
  {
    number: "01",
    title: "3D Modelling",
    text: "Technical environment design, product visualizations, and assets modelled to perfection using Blender.",
  },
  {
    number: "02",
    title: "2D Animation",
    text: "Engaging 2D character animations, dynamic motion graphics, and vector-based assets created inside After Effects.",
  },
  {
    number: "03",
    title: "Video Editing",
    text: "Cinematic travel films, high-energy reels, commercial ads, and promotional content edited inside Premiere Pro.",
  },
  {
    number: "04",
    title: "Graphic Design",
    text: "Branding materials, digital asset layouts, custom artwork, and sleek vector elements compiled in Photoshop.",
  },
];

export default function Services() {
  return (
    <div className="row g-5">
      {servicesList.map((step, index) => (
        <div key={index} className="col-sm-6 col-lg-3">
          <h3 className="steps-1-title">
            <span className="steps-1-number">{step.number}</span> {step.title}
          </h3>
          <div className="steps-1-text">{step.text}</div>
        </div>
      ))}
    </div>
  );
}
