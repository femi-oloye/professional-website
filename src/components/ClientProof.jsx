const proofCards = [
  {
    title: "Public Hiring Profiles",
    body:
      "Clients can review and hire through Fiverr and Upwork, giving them clear public platforms for communication, scope, and project delivery.",
  },
  {
    title: "Remote Worldwide Delivery",
    body:
      "InsightLoopAI works remotely with startups, agencies, and operations teams worldwide using milestone-based delivery and documented handoff.",
  },
  {
    title: "Fast Response & Support",
    body:
      "Project inquiries typically get a response within 24 hours, and delivered systems include documentation and post-delivery support.",
  },
];

export default function ClientProof() {
  return (
    <section id="proof" className="py-20 px-6 bg-stone-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Client Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-black">
            Clear Trust Signals, Public Platforms, Real Delivery Process
          </h2>
          <p className="text-stone-400 mt-3 max-w-2xl mx-auto">
            If you are hiring an AI automation consultant, you need more than design. You need clear communication,
            visible platforms, and a delivery model you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {proofCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-stone-800 bg-stone-950 p-6 hover:border-stone-700 transition-colors"
            >
              <h3 className="text-lg font-bold mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed text-stone-400">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.fiverr.com/s/381LN3B"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-200 transition-colors hover:border-amber-600"
          >
            <span className="text-green-400 font-bold">f</span>
            View Fiverr Profile
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-700 bg-stone-950 px-5 py-3 text-sm font-semibold text-stone-200 transition-colors hover:border-amber-600"
          >
            <span className="text-green-500 font-bold">↑</span>
            View Upwork Profile
          </a>
          <a
            href="mailto:femi@insightloopai.com"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 px-5 py-3 text-sm font-semibold text-white transition-all hover:from-amber-500 hover:to-orange-600"
          >
            Email Directly
          </a>
        </div>
      </div>
    </section>
  );
}