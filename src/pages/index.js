import Acomplishments from "../components/Acomplishments/Acomplishments";
import About from "../components/About/About";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
