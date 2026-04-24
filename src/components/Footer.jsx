// src/components/Footer.jsx

const socials = [
  { label: "Fiverr", href: "https://www.fiverr.com/s/381LN3B" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share" },
  { label: "Email", href: "mailto:femi@insightloopai.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800/60 bg-stone-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-amber-950/30">
            IL
          </div>
          <span className="text-white font-bold text-sm">
            Insight<span className="text-amber-400">Loop</span> <span className="text-stone-300">AI Solutions</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="text-stone-500 hover:text-stone-100 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-stone-600 text-sm">
          © {new Date().getFullYear()} InsightLoop AI Solutions
        </p>
      </div>
    </footer>
  );
}
