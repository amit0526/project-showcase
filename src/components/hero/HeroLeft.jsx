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
      className="flex flex-col w-full min-w-0"
    >
      {/* Badge */}

      <motion.div variants={item}>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-5 py-2 text-sm font-semibold text-indigo-600 shadow-lg backdrop-blur-xl">
          🚀 Frontend Developer
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-8 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl"
      >
        Build
        <span className="block bg-linear-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          Amazing Web Apps
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-7 max-w-full lg:max-w-xl text-base sm:text-lg leading-8 text-slate-600"
      >
        I build responsive, scalable and modern web applications using React,
        JavaScript, Tailwind CSS and backend technologies with clean UI and
        smooth user experience.
      </motion.p>

      {/* Buttons */}

      <motion.div
        variants={item}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          to="/projects"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-300"
        >
          Explore Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/about"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 font-semibold text-slate-700 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          About Me
        </Link>
      </motion.div>

      {/* Tech Stack */}

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
        <Tech icon={<FaReact className="text-cyan-500" />} text="React" />

        <Tech icon={<FaJs className="text-yellow-400" />} text="JavaScript" />

        <Tech
          icon={<SiTailwindcss className="text-sky-500" />}
          text="Tailwind"
        />

        <Tech icon={<FaNodeJs className="text-green-500" />} text="Node.js" />
      </motion.div>

      {/* Stats */}

      <motion.div variants={item} className="mt-12 grid grid-cols-2 sm:grid-col-3 gap-3">
        <Stat number="11+" label="Projects" />
        <Stat number="8+" label="Tech" />
        <Stat number="100%" label="Responsive" />
      </motion.div>
    </motion.div>
  );
}

function Tech({ icon, text }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{ duration: 0.25 }}
      className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl"
    >
      <span className="text-xl">{icon}</span>

      <span className="font-medium text-slate-700">{text}</span>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.04,
      }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/70 bg-white/80 p-4 text-center shadow-xl backdrop-blur-xl"
    >
      <h2 className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
        {number}
      </h2>

      <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}
