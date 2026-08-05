import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative flex justify-center items-center"
    >
      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[430px],w-[430px] rounded-full bg-gradient-to-r- from-indigo-500/25 via-purple-500/20 to-cyan-400/20 blur-[110px]"
      />

      {/* Floating Circle 1 */}
      <motion.div
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-8 left-8 h-24 w-24 rounded-full border border-white/40 bg-white/20 backdrop-blur-xl shadow-xl"
      />

      {/* Floating Circle 2 */}
      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-6 h-20 w-20 rounded-full border border-white/40 bg-indigo-100/30 backdrop-blur-xl shadow-xl"
      />

      {/* Floating Circle 3 */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-4 h-14 w-14 rounded-full bg-purple-400/30 blur-md"
      />

      {/* Hero Image */}
      <motion.img
        src="/images/hero.png"
        alt="Developer Illustration"
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
        className="relative z-10 w-full max-w-2xl drop-shadow-[0_45px_90px_rgba(79,70,229,.35)]"
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 h-16 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
    </motion.div>
  );
}
