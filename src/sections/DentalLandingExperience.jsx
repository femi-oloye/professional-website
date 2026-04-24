import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BeforeAfterIllustration,
  ImpactSnapshotIllustration,
} from "../components/DentalIllustrations";
import Footer from "../components/Footer";

const HERO_COPY = {
  v1: {
    eyebrow: "Dental AI Growth System",
    title: 'Stop Losing Patients to "Hold" Music.',
    subtitle:
      "The 24/7 AI Receptionist for Dental Practices that qualifies leads, books appointments, and syncs with your PMS without the $50k salary.",
  },
  v2: {
    eyebrow: "Patient Acquisition Engine",
    title: "Turn Missed Calls Into Scheduled Treatments, Automatically.",
    subtitle:
      "A dental-specific AI receptionist that responds instantly, pre-qualifies each lead, and books high-value appointments around the clock.",
  },
};

function trackDentalEvent(eventName, payload = {}) {
  const detail = {
    event: eventName,
    page: "dental-ai-receptionist",
    timestamp: new Date().toISOString(),
    ...payload,
  };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(detail);

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    window.dispatchEvent(new CustomEvent("dental_conversion_event", { detail }));
  }
}

export default function DentalLandingExperience({ variant = "v1" }) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    fullName: "",
    practiceName: "",
    email: "",
    phone: "",
    monthlyLeads: "",
    pms: "",
    challenge: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [utmState, setUtmState] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  });
  const copy = useMemo(() => HERO_COPY[variant] || HERO_COPY.v1, [variant]);

  useEffect(() => {
    const pageTitle =
      variant === "v2"
        ? "Dental AI Receptionist | Variant B"
        : "AI Receptionist for Dental Practices | Book More Patients 24/7";
    document.title = pageTitle;

    if (!document.getElementById("dental-tracking-script")) {
      const script = document.createElement("script");
      script.id = "dental-tracking-script";
      script.type = "text/javascript";
      script.text = "window.__dentalTrackingLoaded = true; window.dataLayer = window.dataLayer || [];";
      document.head.appendChild(script);
    }

    const params = new URLSearchParams(window.location.search);
    const referrerHost = document.referrer
      ? (() => {
          try {
            return new URL(document.referrer).hostname;
          } catch {
            return "direct";
          }
        })()
      : "direct";

    setUtmState({
      utm_source: params.get("utm_source") || referrerHost,
      utm_medium: params.get("utm_medium") || "organic",
      utm_campaign: params.get("utm_campaign") || "dental_landing_default",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    });

    trackDentalEvent("dental_lp_view", { variant });
  }, [variant]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    trackDentalEvent("dental_form_submit_attempt", { variant });

    try {
      const response = await fetch("https://formsubmit.co/ajax/femi@insightloopai.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Dental Practice Audit Lead",
          _template: "table",
          source: variant === "v2" ? "dental-landing-v2" : "dental-landing-v1",
          fullName: formState.fullName,
          practiceName: formState.practiceName,
          email: formState.email,
          phone: formState.phone,
          monthlyLeads: formState.monthlyLeads,
          pms: formState.pms,
          challenge: formState.challenge,
          utm_source: utmState.utm_source,
          utm_medium: utmState.utm_medium,
          utm_campaign: utmState.utm_campaign,
          utm_term: utmState.utm_term,
          utm_content: utmState.utm_content,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit form");
      }

      setSubmitStatus("success");
      setFormState({
        fullName: "",
        practiceName: "",
        email: "",
        phone: "",
        monthlyLeads: "",
        pms: "",
        challenge: "",
      });
      trackDentalEvent("dental_form_submit_success", { variant });
      navigate(
        `/dental-ai-receptionist-thank-you?variant=${variant}&utm_source=${encodeURIComponent(utmState.utm_source)}&utm_medium=${encodeURIComponent(utmState.utm_medium)}&utm_campaign=${encodeURIComponent(utmState.utm_campaign)}`
      );
    } catch (error) {
      setSubmitStatus("error");
      trackDentalEvent("dental_form_submit_error", {
        variant,
        message: error instanceof Error ? error.message : "unknown",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-950 text-stone-50 min-h-screen">
      <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-bold tracking-tight">
            Insight<span className="text-amber-400">Loop</span>AI
          </a>
          <a
            href="#audit-offer"
            onClick={() => trackDentalEvent("dental_hero_cta_click", { variant, location: "header" })}
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
                {copy.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">{copy.title}</h1>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">{copy.subtitle}</p>
              <a
                href="#audit-offer"
                onClick={() => trackDentalEvent("dental_hero_cta_click", { variant, location: "hero" })}
                className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-7 py-3.5 rounded-xl font-semibold"
              >
                Book My Free Practice Audit
              </a>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6 space-y-4">
              <BeforeAfterIllustration />
              <ImpactSnapshotIllustration />
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
                <p className="text-2xl mb-3">Smart Intake</p>
                <h3 className="font-bold text-lg mb-2">AI Patient Qualification</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  AI agents qualify new patients via web or SMS, collecting insurance and symptom details before your team gets involved.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-2xl mb-3">Retention</p>
                <h3 className="font-bold text-lg mb-2">No-Show Prevention</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Automated WhatsApp and SMS reminders reduce no-shows and let patients reschedule instantly when plans change.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-stone-900 p-6">
                <p className="text-2xl mb-3">Revenue Ops</p>
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
            <p className="text-amber-300 font-semibold">- Dr. Aris T., Principal Dentist</p>
          </div>
        </section>

        <section id="audit-offer" className="py-20 px-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-stone-800 bg-stone-900 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                See how much revenue you are currently leaving on the table.
              </h2>
              <p className="text-stone-300 leading-relaxed">
                Get a Free Automation Roadmap. We will analyze your intake flow and highlight where your practice is losing ready-to-book patients.
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
              <input type="hidden" name="utm_source" value={utmState.utm_source} readOnly />
              <input type="hidden" name="utm_medium" value={utmState.utm_medium} readOnly />
              <input type="hidden" name="utm_campaign" value={utmState.utm_campaign} readOnly />
              <input type="hidden" name="utm_term" value={utmState.utm_term} readOnly />
              <input type="hidden" name="utm_content" value={utmState.utm_content} readOnly />
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={onChange}
                required
                placeholder="Full name"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                name="practiceName"
                value={formState.practiceName}
                onChange={onChange}
                required
                placeholder="Practice name"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={onChange}
                required
                placeholder="Work email"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={onChange}
                required
                placeholder="Phone number"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                name="monthlyLeads"
                value={formState.monthlyLeads}
                onChange={onChange}
                placeholder="Approx. monthly inbound leads"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input
                type="text"
                name="pms"
                value={formState.pms}
                onChange={onChange}
                placeholder="PMS/EHR (Open Dental, Dentrix, etc.)"
                className="w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <textarea
                name="challenge"
                value={formState.challenge}
                onChange={onChange}
                placeholder="Biggest patient acquisition bottleneck"
                rows={4}
                className="md:col-span-2 w-full rounded-lg border border-stone-700 bg-stone-950 px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3.5 rounded-xl font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Book My Free Practice Audit"}
              </button>

              {submitStatus === "success" && (
                <p className="md:col-span-2 text-emerald-300 text-sm">
                  Thank you. Your audit request was sent successfully. We will contact you shortly.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="md:col-span-2 text-red-300 text-sm">
                  We could not submit your request right now. Please retry or email femi@insightloopai.com.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
