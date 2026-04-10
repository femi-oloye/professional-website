// src/components/Projects.jsx
const projects = [
  {
    tag: "AI Agent",
    title: "AI KPI Insight Agent",
    description:
      "AI automation consulting project for a growing operations team: a GPT-4 KPI agent that pulls live business data, detects anomalies, and sends Slack alerts without manual reporting.",
    metrics: ["70% faster reporting", "Real-time alerts", "GPT-4 insights"],
    stack: ["Python", "GPT-4", "Slack API", "PostgreSQL"],
    color: "from-amber-500 to-orange-700",
  },
  {
    tag: "RAG Pipeline",
    title: "RAG Document Chatbot",
    description:
      "RAG chatbot development project using GPT and FAISS vector search. Built for a legal firm to search across 10,000+ PDF contracts in seconds with reliable document-grounded answers.",
    metrics: ["Search time < 3s", "10k+ documents", "95% accuracy"],
    stack: ["LangChain", "FAISS", "GPT-4", "FastAPI"],
    color: "from-stone-500 to-stone-700",
  },
  {
    tag: "Automation",
    title: "WhatsApp AI Support Bot",
    description:
      "n8n automation and AI support system for WhatsApp. Handles FAQs, qualifies leads, syncs to Airtable CRM, and escalates complex issues to human agents.",
    metrics: ["60% ticket reduction", "24/7 uptime", "Lead capture"],
    stack: ["n8n", "OpenAI", "Twilio", "Airtable"],
    color: "from-emerald-500 to-teal-700",
  },
  {
    tag: "Client Template",
    title: "AI Support Chat Template",
    description:
      "Reusable FastAPI support assistant template for client delivery. Includes PostgreSQL session storage, escalation logic, webhook handoff to n8n, optional API auth, and a frontend demo experience.",
    metrics: ["Reusable by client", "Human handoff", "Deploy-ready stack"],
    stack: ["FastAPI", "PostgreSQL", "OpenAI", "n8n"],
    color: "from-sky-500 to-cyan-700",
  },
  {
    tag: "Data Analytics",
    title: "Sales Intelligence Dashboard",
    description:
      "Real-time BI dashboard with AI-driven sales forecasting, cohort analysis, and automated weekly email digests with actionable recommendations.",
    metrics: ["Live forecasting", "Weekly digests", "3x decision speed"],
    stack: ["Python", "Plotly", "Pandas", "SendGrid"],
    color: "from-amber-600 to-yellow-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-black">Featured Projects</h2>
          <p className="text-stone-400 mt-3 max-w-xl">
            Real systems built for real clients, including AI automation consulting, RAG chatbot development, and workflow automation delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.color}`} />

              <div className="p-7">
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${p.color} bg-opacity-10 text-white mb-4`}>
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.metrics.map((m) => (
                    <span key={m} className="text-xs bg-stone-800 text-stone-300 px-3 py-1 rounded-full">
                      ✦ {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-800">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs font-mono text-stone-500 bg-stone-800/60 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
