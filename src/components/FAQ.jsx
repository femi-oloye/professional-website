const faqs = [
  {
    question: "What does an AI automation consultant do?",
    answer:
      "An AI automation consultant identifies repetitive workflows, designs the right system architecture, connects your tools, and deploys AI where it creates measurable operational gains.",
  },
  {
    question: "Can you build n8n automation workflows for my business?",
    answer:
      "Yes. I build n8n automation workflows for lead routing, CRM sync, onboarding, reporting, alerts, internal ops, and AI-assisted business processes.",
  },
  {
    question: "Do you offer RAG chatbot development?",
    answer:
      "Yes. I build RAG chatbots that search PDFs, SOPs, knowledge bases, contracts, and internal documentation so users get fast, grounded answers instead of hallucinated responses.",
  },
  {
    question: "What locations do you serve?",
    answer:
      "I work remotely and serve clients worldwide. Most projects are delivered asynchronously with clear milestones, weekly updates, and documented handoff.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-stone-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black">Questions Clients Usually Ask</h2>
          <p className="text-stone-400 mt-3 max-w-2xl mx-auto">
            Answers about AI automation consulting, n8n workflow automation, RAG chatbot development, and remote service coverage.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-stone-800 bg-stone-950 p-6 open:border-amber-700/50"
            >
              <summary className="cursor-pointer list-none text-left font-semibold text-white flex items-center justify-between gap-6">
                <span>{faq.question}</span>
                <span className="text-amber-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}