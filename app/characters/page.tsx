import Link from "next/link";
import Navbar from "@/components/navbar";

export default function CharactersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white p-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Inwonersregister
        </h1>

        <p className="text-gray-400 mb-8">
          Openbare dossiers van bekende inwoners binnen Meridian.
        </p>

        <Link
          href="/characters/bobby-ray-fiasco"
          className="block border border-zinc-800 bg-zinc-950 rounded-xl p-6 hover:border-yellow-500 transition"
        >
          <h2 className="text-2xl font-bold">Bobby Ray Fiasco</h2>
          <p className="text-gray-400">
            Eigenaar van Fiasco Ink
          </p>
        </Link>
      </main>
    </>
  );
}