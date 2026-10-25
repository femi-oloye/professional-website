// src/components/CaseStudy.jsx
const steps = [
  {
    step: "01",
    title: "Problem",
    detail:
      "Bill-payment platforms (power, airtime, TV) lose money to transactions that fail but still debit the wallet, duplicate charges, and amount mismatches, and these often surface only when customers complain.",
  },
  {
    step: "02",
    title: "System Design",
    detail:
      "Designed a modular rule engine: each anomaly type is its own rule, flags are combined per transaction, and every flagged transaction gets a primary anomaly type and a severity level.",
  },
  {
    step: "03",
    title: "Build",
    detail:
      "Built with Python and Pandas on a synthetic fintech dataset, with a Streamlit dashboard for KPIs, anomaly breakdowns, trends over time, and a drill-down table filterable by service.",
  },
  {
    step: "04",
    title: "Outcome",
    detail:
      "Ops and finance teams can see revenue at risk, leakage %, and which transactions to investigate first, without writing SQL. The engine can plug into a real transaction database.",
  },
];

const results = [
  { value: "5", label: "Anomaly Rules" },
  { value: "3", label: "Severity Levels" },
  { value: "5,000+", label: "Transactions Analysed" },
  { value: "Live", label: "Deployed Demo" },
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 px-6 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Build Walkthrough</p>
          <h2 className="text-3xl md:text-4xl font-black">Transaction Anomaly &amp; Revenue Leakage Detection</h2>
          <p className="text-stone-400 mt-3 max-w-xl">
            How I take a build from problem to working system, using the financial anomaly dashboard above. Built on synthetic data for demonstration.
          </p>
        </div>

        {/* Result metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {results.map((r) => (
            <div
              key={r.label}
              className="bg-stone-950 border border-stone-800 rounded-2xl p-5 text-center"
            >
              <p className="text-2xl font-black text-white">{r.value}</p>
              <p className="text-xs text-stone-500 mt-1">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Steps timeline */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-5 bg-stone-950 border border-stone-800 rounded-2xl p-6 hover:border-stone-600 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-xs font-black text-white">
                {s.step}
              </div>
              <div>
                <h4 className="font-bold mb-1">{s.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs text-stone-600 uppercase tracking-widest">Stack:</span>
          {["Python", "Pandas", "Streamlit", "Parquet"].map((t) => (
            <span key={t} className="text-xs font-mono text-stone-400 bg-stone-800 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
          <a
            href="https://github.com/femi-oloye/anomaly-dashboard"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            View code →
          </a>
        </div>
      </div>
    </section>
  );
}
