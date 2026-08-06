import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden [bg-gradient-to-br from-slate-100 via-indigo-50 to-violet-100]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] [bg-[size:60px_60px]" />

      {/* Mesh Gradient */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_20%_20%,rgba(99,102,241,.18),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(168,85,247,.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,.12),transparent_35%)" />

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-105 w-105 rounded-full bg-indigo-500/25 blur-[140px] animate-pulse" />

      <div className="absolute -bottom-24 -right-24 h-125 w-125, rounded-full bg-purple-500/20 blur-[150px]" />

      <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />

      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-b from-transparent to-white"></div>
    </section>
  );
}
