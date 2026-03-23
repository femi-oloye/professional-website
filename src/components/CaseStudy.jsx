// src/components/CaseStudy.jsx
export default function CaseStudy() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6">Case Study</h2>

      <div className="bg-gray-900 p-6 rounded-xl">
        <h3 className="text-xl font-semibold">
          AI Customer Support Automation
        </h3>

        <p className="mt-3">
          Built a WhatsApp AI bot integrated with GPT, Airtable, and Slack.
        </p>

        <ul className="mt-3 list-disc ml-6 text-gray-300">
          <li>Automated customer responses</li>
          <li>Lead qualification system</li>
          <li>Escalation to human agents</li>
        </ul>

        <p className="mt-3">
          <strong>Result:</strong> Reduced manual workload and improved response time.
        </p>
      </div>
    </section>
  );
}
