"use client";

import { InView } from "react-intersection-observer";
import { features } from "../../data/data";
import { Transition } from "@headlessui/react";

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="container m-auto px-5 mt-20 pb-20 border-b border-b-black"
    >
      <p className="text-[#FF014F] text-xl">Features</p>
      <p className="text-[#C4CFDE] text-[42px] sm:text-6xl font-bold mt-4">
        What I DO
      </p>

      <InView>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className="flex flex-wrap gap-[3%] justify-center items-center mt-8"
          >
            {Object.keys(features).map((feature, idx) => {
              return (
                <Transition.Root
                  show={inView}
                  key={features[feature].title}
                  className={"sm:w-[30%]"}
                >
                  <Transition.Child
                    as="div"
                    enter={`ease-in duration-[1000ms] transition-all`}
                    enterFrom="opacity-0 translate-y-48"
                    enterTo="opacity-100 translate-y-0"
                    className="bg-[#1B1E22] flex flex-col p-8 rounded-lg shadow-lg shadow-gray-800 w-full my-3"
                  >
                    <div>{features[feature].icon}</div>
                    <div className="mt-6">
                      <p className="text-white text-2xl font-medium">
                        {features[feature].title}
                      </p>
                      <p className="text-white mt-2">
                        {features[feature].description}
                      </p>
                    </div>
                  </Transition.Child>
                </Transition.Root>
              );
            })}
          </div>
        )}
      </InView>
    </section>
  );
};
