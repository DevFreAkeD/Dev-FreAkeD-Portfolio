import React from "react";
import Section from "./Section";
import { curve } from "../assets";
import { collabApps } from "../constants";
import TechCard from "./design/TechCard";
import TechRing from "./design/TechRing";

const TechStack = () => {
  return (
    <Section
      className="pt-[7rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="tech-stack"
    >
      <div className="container relative z-2 text-center">
        <h1 className="h3 mb-6 inline-block relative font-code text-transform: uppercase">
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
      <div className="container flex flex-col lg:flex-row justify-center items-center mt-8 pb-10">
        <div className="w-full lg:w-1/2 pr-2 lg:pr-4 mb-8 lg:mb-0">
          {/* Left part */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Cards */}
            {/* Card 1 */}
            <TechCard
              heading="Languages"
              cards={[
                {
                  buttons: [
                    { text: "C", color: "blue" },
                    { text: "C++", color: "red" },
                    { text: "HTML", color: "purple" },
                    { text: "Python", color: "gray" },
                    { text: "CSS", color: "orange" },
                    { text: "JavaScript", color: "yellow" },
                  ],
                },
              ]}
            />
            {/* Card 2 */}
            <TechCard
              heading="Libraries/Frameworks"
              cards={[
                {
                  buttons: [
                    { text: "ReactJS", color: "blue" },
                    { text: "VueJS", color: "green" },
                    { text: "TailwindCSS", color: "gray" },
                    { text: "Bootstrap", color: "purple" },
                    { text: "ExpressJS", color: "yellow" },
                  ],
                },
              ]}
            />
            {/* Card 3 */}
            <TechCard
              heading="Databases"
              cards={[
                {
                  buttons: [
                    { text: "MySQL", color: "blue" },
                    { text: "MongoDB", color: "green" },
                    { text: "SQL Lite", color: "purple" },
                  ],
                },
              ]}
            />
            {/* Card 4 */}
            <TechCard
              heading="Tools"
              cards={[
                {
                  buttons: [
                    { text: "NodeJS", color: "green" },
                    { text: "Vercel", color: "gray" },
                    { text: "Figma", color: "purple" },
                    { text: "Netlify", color: "red" },
                    { text: "Git", color: "orange" },
                    { text: "GitHub", color: "blue" },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pl-2 lg:pl-5 flex mt justify-center md:pt-10">
          {/* Right part */}
          <TechRing apps={collabApps} />
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
