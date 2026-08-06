import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-100 via-indigo-50 to-violet-100">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-size-[60px_60px]" />

      {/* Glow 1 */}
      <div className="absolute -top-32 -left-32 h-105 w-105 rounded-full bg-indigo-500/20 blur-[120px] animate-pulse" />

      {/* Glow 2 */}
      <div className="absolute -bottom-32 -right-32 h-125 w-125 rounded-full bg-purple-500/20 blur-[140px]" />

      {/* Glow 3 */}
      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 overflow-hidden">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-b from-transparent to-white" />
    </section>
  );
}
