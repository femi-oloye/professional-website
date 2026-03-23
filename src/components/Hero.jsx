// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        AI Automation Engineer & Data Scientist
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        I build production-ready AI systems that automate workflows,
        generate insights, and scale business operations.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Hire Me
        </button>
        <button className="border px-6 py-3 rounded-lg">
          View Projects
        </button>
      </div>
    </section>
  );
}
