import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Footer />
    </>
  );
}
