// src/components/Footer.jsx

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "Upwork", href: "https://www.upwork.com/" },
  { label: "Email", href: "mailto:hello@insightloopai.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 px-6 text-center text-gray-500 text-sm">
      <div className="flex justify-center flex-wrap gap-6 mb-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="hover:text-white transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} InsightLoopAI. All rights reserved.</p>
    </footer>
  );
}
