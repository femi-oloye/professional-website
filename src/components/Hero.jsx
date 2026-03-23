// src/components/Hero.jsx
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "15+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Job Success" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Availability badge */}
      <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Available for new projects
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-4xl">
        AI Automation &amp; Data Solutions{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          That Actually Ship
        </span>
      </h1>

      <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
        I build production-ready AI systems — chatbots, workflow automation,
        RAG pipelines, and data dashboards — that scale real business operations.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-3.5 rounded-xl font-semibold text-base shadow-xl shadow-blue-900/30 transition-all hover:scale-105"
        >
          Start a Project
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="border border-gray-700 hover:border-gray-500 bg-gray-900/50 hover:bg-gray-800/50 px-8 py-3.5 rounded-xl font-semibold text-base transition-all"
        >
          View My Work
        </button>
      </div>

      {/* Platform trust links */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 text-sm">
        <a
          href="https://www.fiverr.com/s/381LN3B"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-gray-600 px-4 py-2 rounded-lg transition-all group"
        >
          <span className="text-green-400 font-bold text-base">f</span>
          <span className="text-gray-400 group-hover:text-white transition-colors">Hire on Fiverr</span>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 bg-gray-900 border border-gray-800 hover:border-gray-600 px-4 py-2 rounded-lg transition-all group"
        >
          <span className="text-green-500 font-bold">↑</span>
          <span className="text-gray-400 group-hover:text-white transition-colors">Hire on Upwork</span>
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800 rounded-2xl overflow-hidden w-full max-w-3xl">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-950 flex flex-col items-center py-6 px-4">
            <span className="text-2xl font-black text-white">{s.value}</span>
            <span className="text-xs text-gray-500 mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
