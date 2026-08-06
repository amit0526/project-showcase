import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { contactInfo } from "../../data/contactInfo";

export default function ContactInfo() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-6">
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.title}
            href={item.link || "#"}
            target={item.link?.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{ y: -6 }}
            className={`group flex items-center gap-4 rounded-3xl border p-5 sm:p-6 shadow-lg transition-all duration-300 ${
              theme === "dark"
                ? "border-slate-800 bg-slate-900 hover:border-indigo-500"
                : "border-slate-200 bg-white hover:border-indigo-400"
            }`}
          >
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
              <Icon size={24} />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <h3
                className={`text-lg font-bold ${
                  theme === "dark" ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-1 break-all text-sm sm:text-base ${
                  theme === "dark" ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.value}
              </p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
