"use client";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { InView } from "react-intersection-observer";
import { skills } from "../../data/data";

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black"
    >
      <p className="text-[#FF014F] text-xl">Skills I am expert at</p>
      <p className="text-[#C4CFDE] text-[42px] sm:text-6xl font-bold mt-4">
        Professional Skills
      </p>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-5">
        {Object.keys(skills).map((skill) => {
          return (
            <InView>
              {({ inView, ref }) => {
                const percentage = inView ? skills[skill].percentage : 0;
                return (
                  <div
                    ref={ref}
                    className="mt-5 h-[200px] w-[200px] text-center"
                  >
                    <CircularProgressbarWithChildren
                      value={percentage}
                      styles={buildStyles({
                        rotation: 0,
                        strokeLinecap: "round",
                        textSize: "16px",
                        pathTransitionDuration: 2,
                        pathColor: `rgba(255, 1, 79, ${percentage / 100})`,
                        textColor: "text-[#FF014F]",
                        trailColor: "white",
                        backgroundColor: "#3e98c7",
                      })}
                    >
                      <p className="text-white text-2xl">
                        {skills[skill].title}
                      </p>
                    </CircularProgressbarWithChildren>
                  </div>
                );
              }}
            </InView>
          );
        })}
      </div>
    </section>
  );
};
