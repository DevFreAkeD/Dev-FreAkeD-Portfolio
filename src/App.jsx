import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./componenets/Header"
import Hero from "./componenets/Hero"
import Footer from "./componenets/Footer";
import TechStack from "./componenets/TechStack";
import Projects from "./componenets/Projects";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <TechStack />
        <Projects />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
};

export default App;
