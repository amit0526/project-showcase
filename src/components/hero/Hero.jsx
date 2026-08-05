import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/15 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-purple-500/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
