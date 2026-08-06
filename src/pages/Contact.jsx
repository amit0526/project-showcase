import { useTheme } from "../components/context/ThemeContext";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ResponseBanner from "../components/contact/ResponseBanner";

import Footer from "../components/Footer";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`min-h-screen transition-colors duration-300 ${
          theme === "dark" ? "bg-slate-950" : "bg-white"
        }`}
      >
        {/* Hero */}
        <ContactHero />

        {/* Contact Section */}
        <section className="pb-20 sm:pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
            <ContactInfo />

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
