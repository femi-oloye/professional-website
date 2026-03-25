import { useEffect, useState } from "react";

const DASHBOARD_URL =
  "https://femi-oloye-anomaly-dashboard-app-kfzzai.streamlit.app/";
const EMBED_URL =
  "https://femi-oloye-anomaly-dashboard-app-kfzzai.streamlit.app/?embed=true";

const highlights = [
  "Real-time anomaly flagging for unusual financial behavior",
  "Clean risk monitoring view for non-technical stakeholders",
  "Built and deployed on Streamlit Cloud for fast sharing",
  "Designed for practical operations and decision support",
];

export default function LiveDashboard() {
  const [previewError, setPreviewError] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [forceFallback, setForceFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!previewLoaded) {
        setForceFallback(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [previewLoaded]);

  const showFallback = forceFallback || previewError;

  return (
    <section id="anomaly-dashboard" className="py-24 px-6 bg-stone-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Featured Live Product
          </p>
          <h2 className="text-3xl md:text-4xl font-black leading-tight">
            Financial Anomaly Detection Dashboard
          </h2>
          <p className="text-stone-400 mt-3 max-w-3xl">
            A production-style Streamlit application for identifying suspicious
            financial patterns and supporting faster investigation workflows.
            This is a live deployed demo that showcases my end-to-end ability to
            build, ship, and present data products professionally.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-2xl border border-stone-800 bg-stone-900 overflow-hidden shadow-xl shadow-black/25">
            <div className="px-4 py-3 border-b border-stone-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                Live Streamlit Deployment
              </div>
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                Open Fullscreen
              </a>
            </div>

            {showFallback ? (
              <div className="h-[520px] bg-stone-950 flex items-center justify-center p-6">
                <div className="max-w-md rounded-2xl border border-amber-700/40 bg-amber-950/30 p-6 text-center">
                  <p className="text-lg font-semibold text-amber-200 mb-2">
                    Live Preview Unavailable In This Browser
                  </p>
                  <p className="text-sm text-stone-300 mb-5 leading-relaxed">
                    Streamlit embeds can be blocked by cookie and redirect policies.
                    The dashboard is live and accessible directly.
                  </p>
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                  >
                    Open Live Dashboard
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                title="Financial Anomaly Detection Dashboard"
                src={EMBED_URL}
                loading="lazy"
                onLoad={() => setPreviewLoaded(true)}
                onError={() => setPreviewError(true)}
                className="w-full h-[520px] bg-stone-950"
              />
            )}

            <div className="px-4 py-3 border-t border-stone-800 bg-stone-950/80 text-xs text-stone-500">
              If the preview is blank or says redirected too many times, open the app directly.
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-2 text-amber-400 hover:text-amber-300"
              >
                Open live app
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-2xl border border-stone-800 bg-stone-900 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Why This Project Matters</h3>

            <ul className="space-y-3 text-sm text-stone-400 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="text-center bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 px-5 py-3 rounded-xl text-sm font-semibold transition-all"
              >
                Launch Dashboard
              </a>
              <a
                href="#contact"
                className="text-center border border-stone-700 hover:border-stone-500 hover:bg-stone-800 px-5 py-3 rounded-xl text-sm font-semibold text-stone-300 transition-all"
              >
                Request a Similar Build
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
