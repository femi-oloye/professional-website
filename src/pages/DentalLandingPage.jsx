import { useEffect } from "react";

export default function DentalLandingPage() {
  useEffect(() => {
    document.title =
      "AI Receptionist for Dental Practices | Book More Patients 24/7";
  }, []);

  return (
    <div className="bg-stone-950 text-stone-50 min-h-screen">
      <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold tracking-tight">
            Insight<span className="text-amber-400">Loop</span>AI
          </a>
          <a
            href="#audit-offer"
            className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Book My Free Practice Audit
          </a>
        </div>
      </header>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Dental AI Growth System
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Stop Losing Patients to "Hold" Music.
              </h1>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                The 24/7 AI Receptionist for Dental Practices that qualifies leads,
                books appointments, and syncs with your PMS without the $50k salary.
              </p>
              <a
                href="#audit-offer"
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-7 py-3.5 rounded-xl font-semibold"
              >
                Book My Free Practice Audit
              </a>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="rounded-xl border border-red-900/40 bg-red-950/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-red-300 mb-2">Before</p>
                  <p className="text-sm text-stone-300">Stressed front desk, missed calls, manual follow-ups.</p>
                </div>
                <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4">
                  <p className="text-xs uppercase tracking-wider text-emerald-300 mb-2">After</p>
                  <p className="text-sm text-stone-300">Calm team, auto-bookings, clear schedule control.</p>
                </div>
              </div>
              <div className="rounded-xl border border-amber-700/40 bg-amber-950/20 p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-amber-300 mb-1">Live Impact Snapshot</p>
                <p className="text-3xl font-black text-white">15</p>
                <p className="text-sm text-stone-300">New appointments booked while you slept</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-stone-900/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8">The Cost of Doing Nothing</h2>
            <div className="overflow-x-auto rounded-2xl border border-stone-800">
              <table className="w-full text-left">
                <thead className="bg-stone-900">
                  <tr>
                    <th className="p-4 text-stone-300">The Old Way</th>
                    <th className="p-4 text-amber-300">The AI Way</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-stone-800">
                    <td className="p-4 text-stone-400">80% of calls go to voicemail after hours.</td>
                    <td className="p-4 text-stone-200">100% of leads engaged instantly, 24/7.</td>
                  </tr>
                  <tr className="border-t border-stone-800">
                    <td className="p-4 text-stone-400">Staff spends 4 hours/day on manual follow-ups.</td>
                    <td className="p-4 text-stone-200">Staff focuses 100% on in-office patient care.</td>
                  </tr>
                  <tr className="border-t border-stone-800">
                    <td className="p-4 text-stone-400">Human error leads to scheduling double-bookings.</td>
                    <td className="p-4 text-stone-200">Direct API sync with your calendar (Open Dental/Dentrix).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-2xl mb-3">🧠</p>
                <h3 className="font-bold text-lg mb-2">Smart Patient Intake</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  AI agents qualify new patients via web or SMS, collecting insurance and symptom details before your team gets involved.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-2xl mb-3">📲</p>
                <h3 className="font-bold text-lg mb-2">No-Show Prevention</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Automated WhatsApp/SMS reminders reduce no-shows and let patients reschedule instantly when plans change.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-2xl mb-3">✅</p>
                <h3 className="font-bold text-lg mb-2">Instant Insurance Verification</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Integration-ready workflows push intake data into billing and verification paths to accelerate your revenue cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-6 bg-stone-900/60">
          <div className="max-w-6xl mx-auto rounded-2xl border border-stone-800 bg-stone-900 p-6">
            <div className="grid md:grid-cols-3 gap-5 text-sm">
              <div>
                <p className="text-amber-300 font-semibold mb-2">HIPAA Compliant</p>
                <p className="text-stone-400">Data is encrypted and handled according to strict healthcare privacy standards.</p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold mb-2">EHR/PMS Integration</p>
                <p className="text-stone-400">Integration-ready for tools like Dentrix, Eaglesoft, Open Dental, and Solutionreach.</p>
              </div>
              <div>
                <p className="text-amber-300 font-semibold mb-2">Human-in-the-loop Guarantee</p>
                <p className="text-stone-400">AI handles the noise; your staff keeps the final control.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-amber-700/40 bg-amber-950/20 p-8">
            <p className="text-stone-200 text-lg leading-relaxed mb-4">
              "We were spending $3,000 a month on Google Ads but losing half the leads because our front desk was too busy to answer. This system booked 22 new implants in the first 30 days."
            </p>
            <p className="text-amber-300 font-semibold">— Dr. Aris T., Principal Dentist</p>
          </div>
        </section>

        <section id="audit-offer" className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-5">
              See how much revenue you're currently leaving on the table.
            </h2>
            <p className="text-stone-300 leading-relaxed mb-8">
              Get a Free Automation Roadmap. We'll analyze your current intake process and show you exactly where you're losing leads.
            </p>
            <a
              href="mailto:femi@insightloopai.com?subject=Free%20Practice%20Audit%20Request"
              className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-8 py-3.5 rounded-xl font-semibold"
            >
              Book My Free Practice Audit
            </a>
            <p className="text-stone-500 text-sm mt-4">No commitment. Clear opportunities in one call.</p>
          </div>
        </section>
      </main>
    </div>
  );
}