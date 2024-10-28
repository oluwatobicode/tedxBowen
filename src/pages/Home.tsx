import CountDown from "../components/CountDown";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Tedx from "../components/Tedx";
import TedXBowen from "../components/TedxBowen";
import TicketIntro from "../components/TicketIntro";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <Tedx />
      <CountDown />
      <TedXBowen />
      <TicketIntro />
      <Team />
      <Footer />
    </>
  );
};
export default Home;
