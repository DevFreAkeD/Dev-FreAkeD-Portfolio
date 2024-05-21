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
        <h1 className="h4 mb-6 inline-block relative">
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
                    { text: "C", colour: "blue" },
                    { text: "C++", colour: "green" },
                    { text: "HTML", colour: "purple" },
                    { text: "CSS", colour: "purple" },
                    { text: "JavaScript", colour: "yellow" },
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
                    { text: "ReactJS", colour: "blue" },
                    { text: "TailwindCSS", colour: "green" },
                    { text: "Bootstrap", colour: "purple" },
                    { text: "ExpressJS", colour: "yellow" },
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
                    { text: "MySQL", colour: "blue" },
                    { text: "MongoDB", colour: "green" },
                    { text: "SQL Lite", colour: "purple" },
                    { text: "PostgreSQL", colour: "orange" },
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
                    { text: "NPM", colour: "red" },
                    { text: "NodeJS", colour: "green" },
                    { text: "Vercel", colour: "gray" },
                    { text: "Netlify", colour: "red" },
                    { text: "PHPMyAdmin", colour: "orange" },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 pl-2 lg:pl-5 flex mt justify-center md:pt-20">
          {/* Right part */}
          <TechRing apps={collabApps} />
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
