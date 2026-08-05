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
      className="flex flex-col"
    >
      {/* Badge */}

      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-lg text-indigo-600 font-semibold">
          🚀 Frontend Developer
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h1
        variants={item}
        className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
      >
        Build
        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          Amazing Web Apps
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        variants={item}
        className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
      >
        I build responsive, scalable and modern web applications using React,
        JavaScript, Tailwind CSS and backend technologies with clean UI and
        smooth user experience.
      </motion.p>

      {/* Buttons */}

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-7 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-300"
        >
          Explore Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/about"
          className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          About Me
        </Link>
      </motion.div>

      {/* Tech Stack */}

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
        <Tech icon={<FaReact className="text-cyan-500" />} text="React" />

        <Tech icon={<FaJs className="text-yellow-400" />} text="JavaScript" />

        <Tech
          icon={<SiTailwindcss className="text-sky-500" />}
          text="Tailwind"
        />

        <Tech icon={<FaNodeJs className="text-green-500" />} text="Node.js" />
      </motion.div>

      {/* Stats */}

      <motion.div variants={item} className="mt-14 grid grid-cols-3 gap-5">
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
        y: -4,
        scale: 1.05,
      }}
      className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-md"
    >
      <span className="text-xl">{icon}</span>

      <span className="font-medium">{text}</span>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur-md p-6 text-center shadow-xl"
    >
      <h2 className="text-3xl font-black text-indigo-600">{number}</h2>

      <p className="mt-2 text-slate-500">{label}</p>
    </motion.div>
  );
}