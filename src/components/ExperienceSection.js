"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuStars } from "react-icons/lu";
import { experience } from "../../data/data";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black"
    >
      <p className="text-[#FF014F] text-xl">Services I have provided</p>
      <p className="text-[#C4CFDE] text-[42px] sm:text-6xl font-bold mt-4">
        Experience
      </p>

      <div className="mt-10">
        <VerticalTimeline>
          {Object.keys(experience).map((exp) => {
            return (
              <VerticalTimelineElement
                key={experience[exp].appName}
                className=""
                date={experience[exp].date}
                iconStyle={{ background: "#1b1e22", color: "#fff" }}
                icon={experience[exp].icon}
                contentStyle={{
                  backgroundColor: "#1b1e22",
                  boxShadow: "3px 3px 5px #1f2937",
                  color: "White",
                }}
              >
                <h3 className="text-2xl font-semibold">
                  {experience[exp].appName}
                </h3>
                <p className="!m-0">{experience[exp].description}</p>
                <p className="text-[#FF014F]">
                  Tech: {experience[exp].technology}
                </p>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{ background: "#1b1e22", color: "#fff" }}
            icon={<LuStars className="h-5 w-5 text-white" />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};
