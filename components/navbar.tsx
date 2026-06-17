import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/businesses", label: "Bedrijven" },
  { href: "/characters", label: "Inwoners" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1f2937] bg-[#020617]/92 px-4 py-3 text-[#f8fafc] backdrop-blur md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#1f2937] bg-[#09090b]">
            <Image
              src="/logo.png"
              alt="Meridian logo"
              width={36}
              height={36}
              className="h-8 w-8 object-contain"
            />
          </span>
          <span>
            <span className="block text-sm uppercase tracking-[0.2em] text-[#9ca3af]">
              Stadsarchief
            </span>
            <span className="block text-lg font-semibold text-[#c89b45]">
              Meridian
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap gap-2 text-sm font-medium text-[#f8fafc]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-transparent px-3 py-2 text-[#d1d5db] transition hover:border-[#c89b45]/60 hover:bg-[#0b1120] hover:text-[#f8fafc]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
