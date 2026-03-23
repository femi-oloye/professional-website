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
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-orange-700/10 rounded-full blur-[100px]" />
      </div>

      <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-4 py-1.5 rounded-full mb-8">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Remote-first and available worldwide
      </div>

      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 max-w-5xl">
        AI Automation Consultant, n8n Automation Specialist, and{" "}
        <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
          RAG Chatbot Developer
        </span>
      </h1>

      <p className="text-lg text-stone-400 max-w-3xl mx-auto leading-relaxed mb-4">
        I help businesses automate workflows, deploy AI chatbots, build RAG systems,
        and launch analytics dashboards that reduce manual work and improve decision-making.
      </p>
      <p className="text-sm md:text-base text-stone-500 max-w-2xl mx-auto leading-relaxed mb-10">
        Serving startups, agencies, and operations teams worldwide with remote AI automation consulting,
        n8n workflow automation, and custom document-aware chatbots.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-8 py-3.5 rounded-xl font-semibold text-base shadow-xl shadow-amber-950/30 transition-all hover:scale-105"
        >
          Start a Project
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="border border-stone-700 hover:border-stone-500 bg-stone-900/50 hover:bg-stone-800/50 px-8 py-3.5 rounded-xl font-semibold text-base transition-all"
        >
          View My Work
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16 text-sm">
        <a
          href="https://www.fiverr.com/s/381LN3B"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 bg-stone-900 border border-stone-800 hover:border-stone-600 px-4 py-2 rounded-lg transition-all group"
        >
          <span className="text-green-400 font-bold text-base">f</span>
          <span className="text-stone-400 group-hover:text-stone-100 transition-colors">Hire on Fiverr</span>
        </a>
        <a
          href="https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 bg-stone-900 border border-stone-800 hover:border-stone-600 px-4 py-2 rounded-lg transition-all group"
        >
          <span className="text-green-500 font-bold">↑</span>
          <span className="text-stone-400 group-hover:text-stone-100 transition-colors">Hire on Upwork</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-800 rounded-2xl overflow-hidden w-full max-w-3xl">
        {stats.map((s) => (
          <div key={s.label} className="bg-stone-950 flex flex-col items-center py-6 px-4">
            <span className="text-2xl font-black text-white">{s.value}</span>
            <span className="text-xs text-stone-500 mt-1">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
