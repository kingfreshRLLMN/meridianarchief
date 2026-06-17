import Navbar from "@/components/navbar";
import Image from "next/image";

export default function BobbyRayPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-500 mb-2">Inwonersdossier</p>

          <h1 className="text-5xl font-bold mb-4">
            Bobby Ray Fiasco
          </h1>
          <Image
            src="/characters/bobby-ray.png"
            alt="Bobby Ray Fiasco"
            width={400}
            height={400}
            className="rounded-xl mb-8 object-cover w-auto h-auto"
          />
          <p className="text-gray-400 mb-8">
            Bekend ondernemer binnen Meridian en eigenaar van Fiasco Ink.
          </p>

          <section className="border border-zinc-800 bg-zinc-950 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Openbare informatie
            </h2>

            <p className="text-gray-300 leading-7">
              Bobby Ray Fiasco staat binnen Meridian bekend als een ondernemer
              met een sterke reputatie en een duidelijke focus op kwaliteit en loyaliteit.
            </p>
          </section>

          <section className="border border-zinc-800 bg-zinc-950 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Familie
            </h2>

            <p className="text-gray-300">
              Hugo Fiasco (broer)
            </p>
          </section>

          <section className="border border-zinc-800 bg-zinc-950 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Geruchten
            </h2>

            <p className="text-gray-300 leading-7">
              Binnen Meridian gaan verhalen rond over een verleden in de vechtsportwereld,
              maar deze informatie is nooit officieel bevestigd.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}