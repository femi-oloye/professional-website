// src/components/Projects.jsx
const projects = [
  {
    tag: "RAG Pipeline",
    title: "RAG Document Chatbot",
    description:
      "Upload a PDF and ask questions in plain English. The bot retrieves the relevant passages with FAISS vector search and answers from the document's content only, ready to adapt for contracts, SOPs, or internal knowledge bases.",
    metrics: ["Document-grounded answers", "PDF upload", "Live demo"],
    stack: ["LangChain", "FAISS", "OpenAI", "Streamlit"],
    color: "from-stone-500 to-stone-700",
    links: [
      { label: "Live Demo", href: "https://document-bot-rag-langchain.streamlit.app/" },
      { label: "Code", href: "https://github.com/femi-oloye/Document-QA-BOT-RAG-LANGCHAIN" },
    ],
  },
  {
    tag: "AI Agent",
    title: "AI KPI Insight Agent",
    description:
      "An AI agent for SaaS teams: ask plain-English questions like \"Why did CAC spike last month?\" and get a chart plus a written explanation instead of waiting on an analyst.",
    metrics: ["Natural-language queries", "Auto-generated charts", "Live demo"],
    stack: ["Python", "GPT", "Pandas", "Streamlit"],
    color: "from-amber-500 to-orange-700",
    links: [
      { label: "Live Demo", href: "https://ai-powered-saas-kpi-insight-agent.streamlit.app/" },
      { label: "Code", href: "https://github.com/femi-oloye/KPI-Insight-Companion-for-SaaS" },
    ],
  },
  {
    tag: "Client Template",
    title: "AI Support Chat Template",
    description:
      "Reusable FastAPI support assistant I can brand for each client. Includes PostgreSQL session storage, escalation logic, webhook handoff to n8n, optional API auth, and a frontend demo. Try it in the chat demo below.",
    metrics: ["Session memory", "Human handoff", "Deploy-ready stack"],
    stack: ["FastAPI", "PostgreSQL", "OpenAI", "n8n"],
    color: "from-sky-500 to-cyan-700",
    links: [{ label: "Try the Demo", href: "#chat-demo" }],
  },
  {
    tag: "LLM Analytics",
    title: "Customer Feedback Intelligence System",
    description:
      "Turns support tickets, NPS surveys, and feature requests into sentiment, recurring themes, and recommended actions on a dashboard, so SaaS teams spot churn signals without reading every message.",
    metrics: ["Sentiment & themes", "Action recommendations", "Live demo"],
    stack: ["Python", "GPT", "Streamlit", "Pandas"],
    color: "from-emerald-500 to-teal-700",
    links: [
      { label: "Live Demo", href: "https://ai-feedback-insight-system.streamlit.app/" },
      { label: "Code", href: "https://github.com/femi-oloye/ai-feedback-insight-system-" },
    ],
  },
  {
    tag: "Data Engineering",
    title: "Telecom KPI & Churn Tracking Pipeline",
    description:
      "End-to-end pipeline that ingests telecom data into Snowflake, trains a churn-prediction model tracked in MLflow, and feeds KPI dashboards, all orchestrated with Airflow.",
    metrics: ["Automated ingestion", "Churn prediction", "Scheduled pipelines"],
    stack: ["Python", "SQL", "Snowflake", "Airflow", "MLflow"],
    color: "from-amber-600 to-yellow-700",
    links: [{ label: "Code", href: "https://github.com/femi-oloye/Telecom-tracking-kpi" }],
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
            Working builds you can open, test, and inspect: the same kinds of AI automation, RAG chatbot, and data systems I deliver for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-600 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.color}`} />

              <div className="p-7 flex flex-col flex-1">
                <span className={`self-start inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${p.color} bg-opacity-10 text-white mb-4`}>
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

                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto pt-5">
                  {p.links.map((l) => {
                    const external = l.href.startsWith("http");
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer noopener" : undefined}
                        className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                      >
                        {l.label} →
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
