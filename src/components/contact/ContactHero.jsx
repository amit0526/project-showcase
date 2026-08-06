import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ContactHero() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
            📩 Contact
          </span>

          {/* Heading */}

          <h1
            className={`mt-6 text-5xl font-black leading-tight md:text-6xl ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          {/* Description */}

          <p
            className={`mx-auto mt-8 max-w-2xl text-lg leading-8 ${
              theme === "dark" ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have feedback about this Project Showcase, want to collaborate, or
            simply want to say hello? Feel free to reach out. I'd love to hear
            from you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
