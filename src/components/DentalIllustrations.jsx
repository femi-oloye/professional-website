export function BeforeAfterIllustration() {
  return (
    <svg
      viewBox="0 0 780 300"
      role="img"
      aria-label="Before and after dental front desk workflow"
      className="w-full h-auto rounded-xl border border-stone-800 bg-stone-950"
    >
      <rect x="0" y="0" width="390" height="300" fill="#2b1e1e" />
      <rect x="390" y="0" width="390" height="300" fill="#16251d" />

      <text x="24" y="34" fill="#fca5a5" fontSize="20" fontWeight="700">Before</text>
      <text x="414" y="34" fill="#86efac" fontSize="20" fontWeight="700">After</text>

      <circle cx="86" cy="98" r="26" fill="#7f1d1d" />
      <rect x="62" y="130" width="48" height="90" rx="12" fill="#991b1b" />
      <path d="M56 168 L24 148" stroke="#fca5a5" strokeWidth="8" strokeLinecap="round" />
      <path d="M116 168 L148 148" stroke="#fca5a5" strokeWidth="8" strokeLinecap="round" />
      <rect x="170" y="84" width="186" height="124" rx="12" fill="#3f1d1d" stroke="#7f1d1d" />
      <text x="186" y="116" fill="#fecaca" fontSize="14">Missed calls</text>
      <text x="186" y="140" fill="#fecaca" fontSize="14">Manual follow-ups</text>
      <text x="186" y="164" fill="#fecaca" fontSize="14">Double-bookings</text>

      <circle cx="478" cy="98" r="26" fill="#166534" />
      <rect x="454" y="130" width="48" height="90" rx="12" fill="#15803d" />
      <path d="M448 172 L474 156 L502 184" stroke="#86efac" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="560" y="84" width="186" height="124" rx="12" fill="#1a2e24" stroke="#166534" />
      <text x="576" y="116" fill="#bbf7d0" fontSize="14">Auto-bookings</text>
      <text x="576" y="140" fill="#bbf7d0" fontSize="14">Calendar sync</text>
      <text x="576" y="164" fill="#bbf7d0" fontSize="14">Calm front desk</text>
    </svg>
  );
}

export function ImpactSnapshotIllustration() {
  return (
    <svg
      viewBox="0 0 780 230"
      role="img"
      aria-label="Dashboard style impact snapshot"
      className="w-full h-auto rounded-xl border border-amber-700/40 bg-stone-950"
    >
      <rect x="0" y="0" width="780" height="230" fill="#1f1c18" />
      <rect x="26" y="24" width="728" height="182" rx="14" fill="#26211b" stroke="#b45309" />

      <text x="52" y="56" fill="#fcd34d" fontSize="14" fontWeight="700" letterSpacing="1">LIVE IMPACT SNAPSHOT</text>
      <text x="52" y="114" fill="#ffffff" fontSize="56" fontWeight="900">15</text>
      <text x="52" y="144" fill="#d6d3d1" fontSize="16">New appointments booked while you slept</text>

      <rect x="450" y="70" width="270" height="100" rx="10" fill="#1f2937" stroke="#374151" />
      <rect x="468" y="128" width="28" height="24" fill="#f59e0b" />
      <rect x="504" y="112" width="28" height="40" fill="#fb923c" />
      <rect x="540" y="96" width="28" height="56" fill="#fbbf24" />
      <rect x="576" y="86" width="28" height="66" fill="#f59e0b" />
      <rect x="612" y="76" width="28" height="76" fill="#fb923c" />
      <rect x="648" y="64" width="28" height="88" fill="#fbbf24" />
    </svg>
  );
}
