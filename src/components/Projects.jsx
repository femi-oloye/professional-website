// src/components/Projects.jsx
const projects = [
  {
    title: "AI KPI Insight Agent",
    problem: "Businesses lack real-time visibility into key metrics.",
    solution: "Built automated KPI system with GPT insights.",
    impact: "Improved decision-making with real-time alerts.",
  },
  {
    title: "RAG Document Chatbot",
    problem: "Manual document search is slow.",
    solution: "Built GPT + FAISS chatbot for PDFs.",
    impact: "Reduced search time from minutes to seconds.",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2"><strong>Problem:</strong> {p.problem}</p>
            <p><strong>Solution:</strong> {p.solution}</p>
            <p><strong>Impact:</strong> {p.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
