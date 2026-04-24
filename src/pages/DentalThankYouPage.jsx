import { useEffect, useMemo } from "react";

const CALENDAR_URL =
  "https://calendly.com/oluwafemi-ezra/30min?hide_event_type_details=1&hide_gdpr_banner=1";

export default function DentalThankYouPage() {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const variant = params.get("variant") || "v1";

  useEffect(() => {
    document.title = "Thank You | Book Your Dental Automation Call";
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50 px-6 py-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
        <section className="rounded-2xl border border-stone-800 bg-stone-900 p-8">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Lead Received
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Thank you. Your audit request is in.
          </h1>
          <p className="text-stone-300 leading-relaxed mb-6">
            Final step: pick a time for your strategy call so we can walk through your biggest patient
            acquisition bottlenecks and map your automation roadmap.
          </p>

          <div className="rounded-xl border border-stone-700 bg-stone-950 p-5 mb-6">
            <p className="text-sm text-stone-300">Submission details</p>
            <p className="mt-2 text-sm text-stone-400">
              Variant: <span className="text-stone-200 font-semibold">{variant.toUpperCase()}</span>
            </p>
            <p className="text-sm text-stone-400">
              Source: <span className="text-stone-200 font-semibold">{params.get("utm_source") || "direct"}</span>
            </p>
            <p className="text-sm text-stone-400">
              Campaign: <span className="text-stone-200 font-semibold">{params.get("utm_campaign") || "dental_landing_default"}</span>
            </p>
          </div>

          <a
            href="/dental-ai-receptionist"
            className="inline-block border border-stone-700 hover:border-stone-500 hover:bg-stone-800 px-5 py-3 rounded-xl text-sm font-semibold text-stone-300 transition-all"
          >
            Back to Landing Page
          </a>
        </section>

        <section className="rounded-2xl border border-stone-800 bg-stone-900 p-4">
          <div className="px-2 pb-3 pt-1 flex items-center justify-between">
            <h2 className="text-lg font-bold">Book Your Call</h2>
            <a
              href="https://calendly.com/oluwafemi-ezra/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="text-xs text-amber-400 hover:text-amber-300"
            >
              Open in new tab
            </a>
          </div>

          <iframe
            title="Book your dental automation strategy call"
            src={CALENDAR_URL}
            className="w-full h-[760px] rounded-xl border border-stone-800 bg-stone-950"
            loading="lazy"
          />
        </section>
      </div>
    </div>
  );
}
