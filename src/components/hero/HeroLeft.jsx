import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaArrowRight } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HeroLeft() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col w-full"
    >
      {/* Badge */}

      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-lg text-indigo-600 font-semibold">
          🚀 Frontend Developer
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight wrap-break-word text-slate-900"
      >
        Build
        <span className="block bg-linear-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          Amazing Web Apps
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-7 max-w-xl text-base sm:text-lg leading-8 text-slate-600"
      >
        I build responsive, scalable and modern web applications using React,
        JavaScript, Tailwind CSS and backend technologies with clean UI and
        smooth user experience.
      </motion.p>

      {/* Buttons */}

      <motion.div
        variants={item}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-3 font-semibold text-white shadow-[0_15px_35px_rgba(79,70,229,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(79,70,229,.45)]"
        >
          Explore Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/about"
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl px-7 py-4 font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          About Me
        </Link>
      </motion.div>

      {/* Tech Stack */}

      <motion.div
        variants={item}
        className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
      >
        <Tech icon={<FaReact className="text-cyan-500" />} text="React" />
        <Tech icon={<FaJs className="text-yellow-400" />} text="JavaScript" />
        <Tech
          icon={<SiTailwindcss className="text-sky-500" />}
          text="Tailwind"
        />
        <Tech icon={<FaNodeJs className="text-green-500" />} text="Node.js" />
      </motion.div>

      {/* Stats */}

      <motion.div variants={item} className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Stat number="10+" label="Projects" />
        <Stat number="8+" label="Technologies" />
        <Stat number="100%" label="Responsive" />

        
      </motion.div>
    </motion.div>
  );
}

function Tech({ icon, text }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-3 rounded-full border border-white/70 bg-white/80 backdrop-blur-xl px-5 py-3 shadow-lg hover:shadow-indigo-200"
    >
      <span className="text-2xl">{icon}</span>

      <span className="font-semibold text-slate-700">{text}</span>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-4 sm:p-6 text-center shadow-xl"
    >
      <h2 className="text-3xl sm:text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        {number}
      </h2>

      <p className="mt-2 text-slate-500 font-medium">{label}</p>
    </motion.div>
  );
}
