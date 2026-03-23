// src/components/Hero.jsx
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section id="hero" className="py-24 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        AI Automation Engineer & Data Scientist
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        I build production-ready AI systems that automate workflows,
        generate insights, and scale business operations.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => scrollTo("contact")}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Hire Me
        </button>
        <button
          onClick={() => scrollTo("projects")}
          className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg transition-colors"
        >
          View Projects
        </button>
      </div>
    </section>
  );
}
