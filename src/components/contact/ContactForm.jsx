import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaPaperPlane } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { theme } = useTheme();

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_oyztihs",
        "template_tr72ymo",
        form.current,
        "N1kbGkFVyr-Yn7GI_",
      )
      .then(() => {
        setStatus("success");
        setLoading(false);

        form.current.reset();
      })
      .catch((error) => {
        console.log(error);

        setStatus("error");

        setLoading(false);
      });
  };

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

      <form ref={form} onSubmit={sendEmail} className="mt-8 space-y-6">
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />
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
            name="from_name"
            type="text"
            required
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
            name="from_email"
            required
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
            name="subject"
            required
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
            name="message"
            required
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
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          <FaPaperPlane />
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="rounded-xl bg-green-100 p-4 text-center font-medium text-green-700">
            ✅ Message sent successfully! I'll get back to you soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-xl bg-red-100 p-4 text-center font-medium text-red-700">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </motion.div>
  );
}
