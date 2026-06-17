import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-wide text-yellow-500">
            Meridian Archief
          </h1>

          <p className="mt-4 text-gray-400 text-lg">
            Public records, businesses and citizen archives of Meridian.
          </p>
        </div>
      </main>
    </>
  );
}