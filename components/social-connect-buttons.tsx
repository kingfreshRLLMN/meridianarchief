const socialLinks = [
  {
    name: "Discord",
    href: "#discord",
    short: "DC",
    accent: "from-[#5865f2] via-[#7b83ff] to-[#c89b45]",
  },
  {
    name: "TikTok",
    href: "#tiktok",
    short: "TT",
    accent: "from-[#25f4ee] via-[#c89b45] to-[#fe2c55]",
  },
];

export default function SocialConnectButtons() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="neon-animated-frame group relative flex h-14 w-44 items-center gap-3 overflow-hidden rounded-lg bg-[#09090b]/90 px-4 text-sm font-semibold text-[#f8fafc] transition duration-300 hover:bg-[#0b1120]"
        >
          <span
            className={`absolute -left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-gradient-to-br ${link.accent} opacity-20 blur-2xl transition group-hover:opacity-35`}
            aria-hidden="true"
          />
          <span
            className={`relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br ${link.accent} text-xs font-bold text-[#020617] transition group-hover:scale-105`}
            aria-hidden="true"
          >
            {link.short}
          </span>
          <span className="relative">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
