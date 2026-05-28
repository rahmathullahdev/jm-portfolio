"use client";
import React, { useEffect, useRef, useState } from "react";

// Customized pipeline for Jashwanth Manikandan - Visual Artist & Editor
const visualFaqs = [
  {
    id: 1,
    question: "01. Concept & Storyboarding",
    answer: "Creative brainstorming, visual mood boarding, and planning shot-by-shot storyboards to establish a clear visual direction for 2D, 3D, or video editing projects.",
  },
  {
    id: 2,
    question: "02. 3D Modelling & Asset Creation",
    answer: "Environmental sculpting, photorealistic product lighting set-ups, and custom 2D/3D visual asset creation tailored to your brand's specifications inside Blender and After Effects.",
  },
  {
    id: 3,
    question: "03. Video Post-Production & Sound Sync",
    answer: "Cinematic travel edits, brand commercials, or high-energy social media reels engineered with precise visual pacing, seamless sound design, and expert color grading.",
  },
  {
    id: 4,
    question: "04. Render & Final Delivery",
    answer: "Compiling and rendering final assets in pristine ultra-high resolution (4K, 9:16 vertical reels, and custom aspect ratios) optimized for immediate commercial and social channel deployment.",
  },
];

export default function Faq() {
  const questionRefs = useRef([]);
  const answerRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  useEffect(() => {
    questionRefs.current.forEach((el) => {
      if (el) el.classList.remove("active");
    });
    answerRefs.current.forEach((el) => {
      if (el) {
        el.style.height = "0px";
        el.style.overflow = "hidden";
        el.style.transition = "all 0.5s ease-in-out";
        el.style.marginBottom = "0px";
      }
    });
    if (currentIndex !== -1 && questionRefs.current[currentIndex] && answerRefs.current[currentIndex]) {
      questionRefs.current[currentIndex].classList.add("active");
      const element = answerRefs.current[currentIndex];
      element.style.height = element.scrollHeight + "px";
      element.style.overflow = "hidden";
      element.style.transition = "all 0.5s ease-in-out";
      element.style.marginBottom = "1.55em";
    }
  }, [currentIndex]);
  return (
    <dl className="accordion-1 wow fadeInUp">
      {visualFaqs.map((elm, index) => (
        <React.Fragment key={index}>
          <dt
            onClick={() => {
              setCurrentIndex((pre) => (pre == index ? -1 : index));
            }}
          >
            <a ref={(el) => (questionRefs.current[index] = el)}>
              <span>{elm.question}</span>
              <i className="icon-plus" />
            </a>
          </dt>
          <dd
            className="black"
            ref={(el) => (answerRefs.current[index] = el)}
            style={{ display: "block" }}
          >
            {elm.answer}
          </dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

