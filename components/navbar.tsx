import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black px-8 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          Meridian Archief
        </Link>

        <div className="flex gap-6 text-white">
          <Link href="/businesses">Bedrijven</Link>
          <Link href="/characters">Inwoners</Link>
          <Link href="/timeline">Tijdlijn</Link>
        </div>
      </div>
    </nav>
  );
}