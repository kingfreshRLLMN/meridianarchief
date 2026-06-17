import Navbar from "@/components/navbar";

export default function FiascoInkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-500 mb-2">Bedrijfsdossier</p>

          <h1 className="text-5xl font-bold mb-4">
            Fiasco Ink
          </h1>
          <p className="text-gray-400 mb-8">
            Hoogwaardige tattoozaak gevestigd in Meridian.
          </p>

          <section className="border border-zinc-800 bg-zinc-950 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Bedrijfsinformatie
            </h2>

            <p className="text-gray-300 leading-7">
              Fiasco Ink staat bekend om custom tattoo designs, vakmanschap en precisie.
              De zaak heeft binnen korte tijd een sterke naam opgebouwd.
            </p>
          </section>

          <section className="border border-zinc-800 bg-zinc-950 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">
              Eigenaar
            </h2>

            <p className="text-gray-300">
              Bobby Ray Fiasco
            </p>
          </section>
        </div>
      </main>
    </>
  );
}