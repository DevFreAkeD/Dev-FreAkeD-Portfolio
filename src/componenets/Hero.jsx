import Section from "./Section";
import { curve, background } from "../assets"; // Assuming you have imported the background image
import useTypingEffect from "./js/TypingEffect";
import Button from "./Button";

const Hero = () => {
  const { text } = useTypingEffect(["a Full-Stack Developer.", "a Gamer. ", "an Entrepreneur."]);
  

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings id="about-me"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hello,&nbsp;I&nbsp;Am {` `}
            <span className="inline-block relative">
             Tushar Nagar.
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            I am {text}

          </p>
          <Button href="/pricing" white>
            Contact Me
          </Button>
        </div>
      </div>
      <div className="container relative z-2 text-center"> {/* Centering text */}
        <h1 className="h3 mb-6 inline-block relative"> {/* Using inline-block to allow positioning */}
          <span className="inline-block relative">
            About Me
            <img
              src={curve}
              className="absolute left-0 bottom-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
          <p className="body-1 mx-auto pt-5 mb-6 text-n-2 lg:mb-8">
          I'm <b>Tushar Singh</b>, also known as <b>FreAkeD</b> in the gaming world. I began my coding journey in 2017, scripting for SA-MP servers.
          As a front-end enthusiast, I'm currently expanding my skills to become a full-stack developer. I love gaming and am passionate about exploring and growing in tech.
          </p>
        </h1>
      </div>
      <div className="absolute inset-0 w-auto" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(5px)' }}></div> {/* Background image with blur */}
      <div className="absolute inset-0 bg-black opacity-70" />
    </Section>
  );
};

export default Hero;
