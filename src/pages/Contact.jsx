import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ResponseBanner from "../components/contact/ResponseBanner";

import { useTheme } from "../components/context/ThemeContext";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        {/* Hero */}
        <ContactHero />

        {/* Contact Section */}
        <section className="pb-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            {/* Left */}
            <ContactInfo />

            {/* Right */}
            <ContactForm />
          </div>
        </section>

        {/* Bottom Banner */}
        <ResponseBanner />
      </main>

      <Footer />
    </>
  );
}
