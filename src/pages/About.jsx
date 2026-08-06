import AboutHero from "../components/about/AboutHero";
import StatsSection from "../components/about/StatsSection";
import WhyShowcase from "../components/about/WhyShowcase";
import TechStack from "../components/about/TechStack";
import DevelopmentJourney from "../components/about/DevelopmentJourney";
import FutureGoals from "../components/about/FutureGoals";
import AboutCTA from "../components/about/AboutCTA";
import { SiDevelopmentcontainers } from "react-icons/si";

export default function About() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <WhyShowcase />
      <TechStack />
      <DevelopmentJourney />
      <FutureGoals />
      <AboutCTA />
    </>
  );
}
