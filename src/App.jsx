import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./componenets/Header"
import Hero from "./componenets/Hero"
import Footer from "./componenets/Footer";
//import TechStack from "./componenets/TechStack";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <div clssName="items-center justify-center">Tech Stack</div>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  )
};

export default App;
