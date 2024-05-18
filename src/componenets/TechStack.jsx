import React from "react";
import Section from "./Section";
import { curve, stack } from "../assets";
import { collabApps } from "../constants";

const TechStack = () => {
  return (
    <Section
      className="pt-[7rem] -mt-[5.25rem]"
      crosses crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings id="tech-stack"
    >
      <div className="container relative z-2 text-center"> {/* Centering text */}
        <h1 className="h4 mb-6 inline-block relative"> {/* Using inline-block to allow positioning */}
          <span className="inline-block relative">
            Tech Stack
            <img
              src={curve}
              className="absolute left-0 bottom-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
      </div>

      <div className="flex justify-center items-center lg:ml-auto xl:w-[38rem] mt-4 mb-4 pt-10 pb-10">
        <div className="relative flex w-[22rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
          <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
              <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                <img
                  src={stack}
                  width={48}
                  height={48}
                  alt="stack"
                />
              </div>
            </div>
          </div>

          <ul className="absolute inset-0 flex justify-center items-center">
            {collabApps.map((app, index) => (
              <li
                key={app.id}
                className={`absolute flex justify-center items-center transform origin-center rotate-${index * 45}`}
                style={{ transform: `rotate(${index * 45}deg) translateX(11rem)` }}
              >
                <div
                  className={`relative flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl transform -rotate-${index * 45}`}
                >
                  <img
                    className="m-auto"
                    width={app.width}
                    height={app.height}
                    alt={app.title}
                    src={app.icon}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
