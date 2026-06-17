const socialLinks = [
  {
    name: "Discord",
    href: "#discord",
    icon: "D",
    accent: "from-[#5865f2] to-[#c89b45]",
  },
  {
    name: "TikTok",
    href: "#tiktok",
    icon: "T",
    accent: "from-[#25f4ee] via-[#c89b45] to-[#fe2c55]",
  },
];

export default function SocialConnectButtons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="group flex h-12 min-w-36 items-center gap-3 rounded-lg border border-[#1f2937] bg-[#09090b]/88 px-4 text-sm font-semibold text-[#f8fafc] shadow-lg shadow-black/20 transition hover:border-[#c89b45] hover:bg-[#0b1120]"
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br ${link.accent} text-sm font-bold text-[#020617] transition group-hover:scale-105`}
            aria-hidden="true"
          >
            {link.icon}
          </span>
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
}
