import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl border p-8 shadow-xl ${
        theme === "dark"
          ? "border-slate-800 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <h2
        className={`text-3xl font-bold ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        Send a Message
      </h2>

      <p
        className={`mt-3 ${
          theme === "dark" ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form className="mt-8 space-y-6">
        {/* Name */}
        <div>
          <label
            className={`mb-2 block font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all focus:border-indigo-500 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label
            className={`mb-2 block font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all focus:border-indigo-500 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          />
        </div>

        {/* Subject */}
        <div>
          <label
            className={`mb-2 block font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Subject
          </label>

          <input
            type="text"
            placeholder="Message subject"
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all focus:border-indigo-500 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          />
        </div>

        {/* Message */}
        <div>
          <label
            className={`mb-2 block font-medium ${
              theme === "dark" ? "text-slate-300" : "text-slate-700"
            }`}
          >
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className={`w-full rounded-2xl border px-5 py-4 outline-none transition-all resize-none focus:border-indigo-500 ${
              theme === "dark"
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white text-slate-900"
            }`}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
