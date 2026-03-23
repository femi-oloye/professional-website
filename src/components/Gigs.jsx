// src/components/Gigs.jsx
const gigs = [
  {
    title: "AI Chatbot Development",
    price: "$300+",
    desc: "Custom GPT chatbot with RAG and API integrations",
  },
  {
    title: "Workflow Automation (n8n)",
    price: "$200+",
    desc: "Automate business processes and operations",
  },
  {
    title: "Data Analytics Dashboard",
    price: "$250+",
    desc: "KPI dashboards with insights and alerts",
  },
];

export default function Gigs() {
  return (
    <section id="services" className="py-16 px-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-8">Services & Packages</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {gigs.map((gig, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold">{gig.title}</h3>
            <p className="text-blue-400 mt-2">{gig.price}</p>
            <p className="mt-2 text-gray-300">{gig.desc}</p>

            <button className="mt-4 bg-blue-600 px-4 py-2 rounded">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
