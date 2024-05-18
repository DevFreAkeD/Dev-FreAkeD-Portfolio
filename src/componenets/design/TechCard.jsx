import React from "react";
import { stack } from "../../assets";
import { collabApps } from "../../constants";

const TechCard = () => {
  return (
    <div className="relative flex justify-center items-center w-[22rem] aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
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
            className={`absolute flex justify-center items-center transform origin-center`}
            style={{ transform: `rotate(${index * 45}deg) translateX(11rem)` }}
          >
            <div
              className={`relative flex justify-center items-center w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
              style={{ transform: `rotate(-${index * 45}deg)` }}
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
  );
};

export default TechCard;
