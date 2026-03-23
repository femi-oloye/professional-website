// src/components/CaseStudy.jsx
const steps = [
  {
    step: "01",
    title: "Problem Discovery",
    detail:
      "E-commerce client spending 40+ hrs/week on manual customer support. 3-hour average response time losing sales.",
  },
  {
    step: "02",
    title: "System Design",
    detail:
      "Designed a WhatsApp AI bot with GPT-4, Airtable CRM sync, and a smart escalation router for complex tickets.",
  },
  {
    step: "03",
    title: "Build & Integration",
    detail:
      "Built with n8n for orchestration, Twilio for WhatsApp, OpenAI for smart replies, and Slack for agent alerts.",
  },
  {
    step: "04",
    title: "Results",
    detail:
      "Deployed in 2 weeks. Bot handles 80% of tickets autonomously. Human agents only touch escalations.",
  },
];

const results = [
  { value: "80%", label: "Tickets Handled by AI" },
  { value: "< 30s", label: "Avg. Response Time" },
  { value: "40 hrs", label: "Saved Per Week" },
  { value: "2 wks", label: "Delivery Time" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-2">Case Study</p>
          <h2 className="text-3xl md:text-4xl font-black">AI Customer Support Automation</h2>
          <p className="text-gray-400 mt-3 max-w-xl">
            How I helped an e-commerce brand cut support costs by 60% with a fully automated WhatsApp AI agent.
          </p>
        </div>

        {/* Result metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {results.map((r) => (
            <div
              key={r.label}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-5 text-center"
            >
              <p className="text-2xl font-black text-white">{r.value}</p>
              <p className="text-xs text-gray-500 mt-1">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Steps timeline */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-5 bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-black text-white">
                {s.step}
              </div>
              <div>
                <h4 className="font-bold mb-1">{s.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs text-gray-600 uppercase tracking-widest">Stack:</span>
          {["n8n", "OpenAI GPT-4", "Twilio", "Airtable", "Slack API"].map((t) => (
            <span key={t} className="text-xs font-mono text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
