import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative flex items-center justify-center w-full min-w-0"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-105 w-105 rounded-full bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-[110px]"
      />

      {/* Floating Circle */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-6 top-8 hidden h-24 w-24 rounded-full border border-white/50 bg-white/20 shadow-xl backdrop-blur-xl md:block"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12 right-6 hidden h-20 w-20 rounded-full border border-white/50 bg-indigo-100/30 shadow-xl backdrop-blur-xl md:block"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-2 top-1/2 hidden h-14 w-14 rounded-full bg-purple-400/30 blur-md md:block"
      />

      {/* Image */}

      <motion.img
        src="/images/hero.png"
        alt="Developer"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-[0_45px_90px_rgba(79,70,229,.35)]"
      />

      {/* Bottom Glow */}

      <div className="absolute bottom-2 h-16 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
    </motion.div>
  );
}
