// src/components/Footer.jsx

const BUSINESS_NAME = "InsightLoopAI Solutions";
const INVITES_URL = "https://invites.insightloopai.com";

const socials = [
  { label: "Fiverr", href: "https://www.fiverr.com/s/381LN3B" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0181c3a41fc2bcb53a?mp_source=share" },
  { label: "Email", href: "mailto:femi@insightloopai.com" },
];

const contact = [
  { label: "femi@insightloopai.com", href: "mailto:femi@insightloopai.com" },
  { label: "0806 875 4514", href: "tel:+2348068754514" },
  { label: "WhatsApp", href: "https://wa.me/2348068754514" },
];

// Our products are sold on their own sites, each with its own policies.
const products = [
  {
    name: "Wedding Invitation Studio",
    href: INVITES_URL,
    policies: [
      { label: "Terms", href: `${INVITES_URL}/terms` },
      { label: "Privacy", href: `${INVITES_URL}/privacy` },
      { label: "Refunds & delivery", href: `${INVITES_URL}/refunds` },
    ],
  },
];

const linkProps = (href) =>
  href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {};

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
            Insight<span className="text-amber-400">Loop</span><span className="text-stone-300">AI Solutions</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...linkProps(s.href)}
              className="text-stone-500 hover:text-stone-100 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-stone-600 text-sm">
          © {new Date().getFullYear()} {BUSINESS_NAME}
        </p>
      </div>

      {/* Products and contact */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-stone-800/60 grid gap-8 md:grid-cols-2 text-sm">
        <div>
          <h3 className="text-stone-300 font-semibold mb-3">Our products</h3>
          {products.map((p) => (
            <div key={p.name}>
              <a
                href={p.href}
                className="text-amber-300 hover:text-amber-200 transition-colors font-medium"
              >
                {p.name}
              </a>
              <p className="text-stone-500 mt-1">
                Design a wedding invitation online and download it instantly.
              </p>
              <p className="text-stone-500 mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {p.policies.map((pol) => (
                  <a key={pol.label} href={pol.href} className="hover:text-stone-100 transition-colors underline-offset-4 hover:underline">
                    {pol.label}
                  </a>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div className="md:text-right">
          <h3 className="text-stone-300 font-semibold mb-3">Contact {BUSINESS_NAME}</h3>
          <p className="text-stone-500 flex flex-wrap md:justify-end gap-x-4 gap-y-1">
            {contact.map((c) => (
              <a key={c.label} href={c.href} {...linkProps(c.href)} className="hover:text-stone-100 transition-colors">
                {c.label}
              </a>
            ))}
          </p>
          <p className="text-stone-600 mt-2">Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
