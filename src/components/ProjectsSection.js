"use client";

import { InView } from "react-intersection-observer";
import { projects } from "../../data/data";
import { Transition } from "@headlessui/react";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black"
    >
      <p className="text-[#FF014F] text-xl text-center">Check out my work</p>
      <p className="text-[#C4CFDE] text-[42px] sm:text-6xl font-bold mt-4 text-center">
        My Projects
      </p>

      {/* <InView>
        {({ inView, ref }) => ( */}
      <div
        // ref={ref}
        className="flex flex-wrap gap-[3%] justify-between items-center mt-8"
      >
        {Object.keys(projects).map((project, idx) => {
          return (
            <Transition.Root
              show={true}
              key={projects[project].title}
              className={"sm:w-[30%]"}
            >
              <Transition.Child
                as="a"
                enter={`ease-in duration-[1000ms] transition-all`}
                enterFrom="opacity-0 translate-y-48"
                enterTo="opacity-100 translate-y-0"
                className="bg-[#1B1E22] transition-colors ease-out delay-200 hover:bg-[#16191b] flex flex-col p-8 rounded-lg shadow-lg shadow-gray-800 w-full my-3 text-white hover:text-[#FF014F] "
                href={projects[project].link}
              >
                <div className="project-image-div overflow-hidden w-full rounded-lg">
                  <Image
                    src={projects[project].image}
                    alt={projects[project].title}
                    className="transition-transform duration-[0.4s] ease-in"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-2xl font-medium">
                    {projects[project].title}
                  </p>
                  <p className="text-white mt-2">
                    {projects[project].description}
                  </p>
                </div>
              </Transition.Child>
            </Transition.Root>
          );
        })}
      </div>
      {/* )}
       </InView> */}
    </section>
  );
};
