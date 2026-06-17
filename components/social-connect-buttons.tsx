const socialLinks = [
  {
    name: "Discord",
    href: "#discord",
    short: "DC",
    accent: "from-[#5865f2] via-[#7b83ff] to-[#c89b45]",
    glow: "group-hover:shadow-[0_0_42px_rgba(88,101,242,0.45)]",
  },
  {
    name: "TikTok",
    href: "#tiktok",
    short: "TT",
    accent: "from-[#25f4ee] via-[#c89b45] to-[#fe2c55]",
    glow: "group-hover:shadow-[0_0_42px_rgba(254,44,85,0.38)]",
  },
];

export default function SocialConnectButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`group relative flex h-20 items-center gap-4 overflow-hidden rounded-lg border border-[#1f2937] bg-[#09090b]/90 px-5 text-base font-semibold text-[#f8fafc] shadow-lg shadow-black/20 transition duration-300 hover:border-[#c89b45] hover:bg-[#0b1120] ${link.glow}`}
        >
          <span
            className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${link.accent} opacity-80`}
            aria-hidden="true"
          />
          <span
            className={`absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-gradient-to-br ${link.accent} opacity-20 blur-2xl transition group-hover:opacity-35`}
            aria-hidden="true"
          />
          <span
            className={`relative flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br ${link.accent} text-sm font-bold text-[#020617] transition group-hover:scale-105`}
            aria-hidden="true"
          >
            {link.short}
          </span>
          <span className="relative text-lg">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
