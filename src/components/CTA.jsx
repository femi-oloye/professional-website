// src/components/CTA.jsx
export default function CTA() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to automate?
        </p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
          {"Let's Build Your "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI System
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Whether you need an AI chatbot, a data pipeline, or full workflow
          automation — I'll scope it, build it, and ship it.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-3.5 rounded-xl font-semibold text-base shadow-xl shadow-blue-900/30 transition-all hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="https://www.fiverr.com/s/381LN3B"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-gray-700 hover:border-gray-500 bg-gray-900/50 px-8 py-3.5 rounded-xl font-semibold text-base transition-all"
          >
            View Fiverr Gigs
          </a>
        </div>

        <p className="mt-8 text-gray-600 text-sm">
          Response within 24 hours &middot; 100% Job Success on Upwork
        </p>
      </div>
    </section>
  );
}
