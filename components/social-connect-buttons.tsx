import Image from "next/image";

const socialLinks = [
  {
    name: "Discord",
    href: "#discord",
    icon: "/discord-icon.png",
    accent: "from-[#0b1120] via-[#c89b45] to-[#e0b85a]",
  },
  {
    name: "TikTok",
    href: "#tiktok",
    icon: "/tiktok-icon.png",
    accent: "from-[#050505] via-[#c89b45] to-[#f5ca68]",
  },
];

export default function SocialConnectButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
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
          <span className="relative flex size-9 shrink-0 items-center justify-center">
            <Image
              src={link.icon}
              alt={`${link.name} logo`}
              width={64}
              height={64}
              className="size-9 object-contain drop-shadow-[0_0_8px_rgba(224,184,90,0.32)] transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(224,184,90,0.65)]"
            />
          </span>
          <span className="relative">{link.name}</span>
        </a>
      ))}
    </div>
  );
}
