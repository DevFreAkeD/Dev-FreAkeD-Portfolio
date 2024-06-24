import Section from "./Section";
import { curve, grid } from "../assets";
import { SectionGradient } from "./design/SectionGradient";
import { projects } from "../constants";

const Projects = () => {
  return (
    <Section
      className="pt-[7rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="projects"
    >
      <div className="container relative z-2 text-center">
        <h1 className="h4 mb-6 inline-block relative font-">
          <span className="inline-block relative font-code text-transform: uppercase">
            Projects
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
      <SectionGradient />
      <div className="container mt-7">
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-6 pb-[7rem]">
          {projects.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className={`md:flex even:md:translate-y-[2.5rem] p-0.25 rounded-[1.25rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              style={{ height: "100%" }}
            >
              <div className="relative p-4 bg-n-8 rounded-[1.25rem] overflow-hidden flex flex-col justify-between h-full">
                <div className="absolute top-0 left-0">
                  <img
                    className="w-full"
                    src={grid}
                    width={300}
                    height={300}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-5">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={200}
                        height={120}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div>
                    <h6 className="h5 mb-2">{item.title}</h6>
                    <p className="body-4 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
