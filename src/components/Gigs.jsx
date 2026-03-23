// src/components/Gigs.jsx
const FIVERR = "https://www.fiverr.com/s/381LN3B";
const UPWORK = "https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share";

const gigs = [
  {
    icon: "🤖",
    title: "AI Chatbot Development",
    price: "From $300",
    desc: "Custom AI chatbot development with RAG, memory, and third-party API integrations. Ideal if you need a RAG chatbot developer for web, WhatsApp, or Slack.",
    features: [
      "GPT-4 / Claude integration",
      "RAG with document search",
      "API & CRM connections",
      "Multi-channel deployment",
    ],
    popular: false,
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    price: "From $200",
    desc: "End-to-end business process automation using n8n, Make, or custom Python scripts. A good fit if you need n8n automation for sales, ops, onboarding, or reporting.",
    features: [
      "n8n / Make / Zapier",
      "CRM & email automation",
      "Data sync pipelines",
      "Error handling & logging",
    ],
    popular: true,
  },
  {
    icon: "📊",
    title: "Data Analytics Dashboard",
    price: "From $250",
    desc: "Interactive KPI dashboards with AI-generated insights, automated reporting, and real-time alerts for teams that need clearer operational visibility.",
    features: [
      "Real-time KPI tracking",
      "AI-generated summaries",
      "Automated email reports",
      "Custom visualizations",
    ],
    popular: false,
  },
];

export default function Gigs() {
  return (
    <section id="services" className="py-24 px-6 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-black">What I Build For You</h2>
          <p className="text-stone-400 mt-3 max-w-xl">
            Available on Fiverr and Upwork for AI automation consulting, n8n workflow automation, RAG chatbot development, and custom data systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gigs.map((gig, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                gig.popular
                  ? "bg-gradient-to-b from-stone-950 to-stone-900 border-amber-700/50 shadow-xl shadow-black/20"
                  : "bg-stone-950 border-stone-800 hover:border-stone-600"
              }`}
            >
              {gig.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-600 to-orange-700 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    ★ Most Popular
                  </span>
                </div>
              )}

              <div className="text-3xl mb-4">{gig.icon}</div>
              <h3 className="text-lg font-bold mb-1">{gig.title}</h3>
              <p className={`text-sm font-semibold mb-3 ${
                gig.popular ? "text-amber-400" : "text-stone-400"
              }`}>
                {gig.price}
              </p>
              <p className="text-stone-400 text-sm leading-relaxed mb-5">{gig.desc}</p>

              <ul className="flex flex-col gap-2 mb-7 flex-1">
                {gig.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-stone-300">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Platform links */}
              <div className="flex flex-col gap-2">
                <a
                  href={FIVERR}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full text-center bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 py-2.5 rounded-xl text-sm font-semibold transition-all"
                >
                  Order on Fiverr
                </a>
                <a
                  href={UPWORK}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full text-center border border-stone-700 hover:border-stone-500 hover:bg-stone-800 py-2.5 rounded-xl text-sm text-stone-300 transition-all"
                >
                  Hire on Upwork
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
