"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const actorCollaborations = [
  {
    name: "Dhirav",
    role: "Director",
    description: "Collaborated on post-production workflows, scene pacing, and promotional assets for directorial film projects.",
    imgSrc: "/assets/images/my-portfolio/Dhirav_director.png",
  },
  {
    name: "George Maryan",
    role: "Actor & Comedian",
    description: "Created dynamic character showreels, high-impact trailer edits, and promotional media content.",
    imgSrc: "/assets/images/my-portfolio/George_Maryan_Indian_actor_and_comedian.png",
  },
  {
    name: "Harish Uthaman",
    role: "Actor",
    description: "Delivered action-sequenced edits, portfolio presentations, and customized social media campaign assets.",
    imgSrc: "/assets/images/my-portfolio/Harish_Uthaman_actor.png",
  },
  {
    name: "Dinesh",
    role: "Dance Master",
    description: "Designed rhythmic video sequences, promotional teaser assets, and energetic motion designs.",
    imgSrc: "/assets/images/my-portfolio/Dinesh_dance_master.png",
  },
];

export default function Team() {
  const isotopContainer = useRef();
  
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".col-sm-6",
      layoutMode: "masonry",
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    initIsotop();
  }, []);

  return (
    <div ref={isotopContainer} className="row mb-n30 masonry">
      {/* Team Item */}
      {actorCollaborations.map((member, index) => (
        <div
          key={index}
          className={`col-sm-6 mb-30 ${
            index === 1 ? "mt-140 mt-xs-0 pt-140 pt-xs-0" : ""
          } `}
        >
          <div className="team-1-item round">
            <h4 className="team-1-title">
              {member.name.split(" ").map((part, idx) => (
                <React.Fragment key={idx}>
                  {part}
                  <br className="d-sm-none" />
                </React.Fragment>
              ))}
            </h4>
            <div className="team-1-image">
              <Image
                width={288}
                height={392}
                src={member.imgSrc}
                alt={member.name}
              />
            </div>
            <h5 className="team-1-role">{member.role}</h5>
            <p className="team-1-descr">{member.description}</p>

          </div>
        </div>
      ))}
      {/* End Team Item */}
    </div>
  );
}
