"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const phases = [
  { at: 0, label: "verbinding openen" },
  { at: 28, label: "stadsarchief laden" },
  { at: 58, label: "dossierindex controleren" },
  { at: 84, label: "publieke records vrijgeven" },
  { at: 100, label: "toegang verleend" },
];

function getPhase(progress: number) {
  return phases.reduce((active, phase) => {
    return progress >= phase.at ? phase : active;
  }, phases[0]);
}

function AnimatedLabel({ label }: { label: string }) {
  return (
    <span aria-label={label} className="inline-flex">
      {label.split("").map((letter, index) => (
        <span
          key={`${label}-${index}`}
          className="boot-letter"
          style={{ animationDelay: `${index * 28}ms` }}
        >
          {letter === " " ? "\u00a0" : letter}
        </span>
      ))}
    </span>
  );
}

export default function ArchiveBootScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const progressId = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(progressId);
          window.setTimeout(() => setVisible(false), 650);
          return 100;
        }

        return Math.min(100, current + 4);
      });
    }, 90);

    return () => window.clearInterval(progressId);
  }, []);

  const phase = useMemo(() => getPhase(progress), [progress]);

  return (
    <>
      {visible ? (
        <div
          className={`fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#020617] px-4 text-[#f8fafc] transition-opacity duration-700 ${
            progress >= 100 ? "opacity-0" : "opacity-100"
          }`}
          role="status"
          aria-live="polite"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,155,69,0.16),_transparent_34%),linear-gradient(180deg,_rgba(2,6,23,0.88),_#020617)]" />
          <div className="absolute inset-0 opacity-[0.08] boot-grid" />

          <section className="relative w-full max-w-2xl rounded-lg border border-[#1f2937] bg-[#09090b]/88 p-6 shadow-2xl shadow-black/50 md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-[#c89b45]/40 bg-[#020617]">
                <Image
                  src="/logo.png"
                  alt="Meridian logo"
                  width={52}
                  height={52}
                  className="h-12 w-12 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e0b85a]">
                  Meridian Archief
                </p>
                <h1 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Dossieromgeving wordt geopend
                </h1>
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-[#9ca3af]">
                <span>
                  <AnimatedLabel label={phase.label} />
                </span>
                <span className="font-mono text-[#e0b85a]">
                  {progress.toString().padStart(3, "0")}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full border border-[#1f2937] bg-[#020617]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8f6a2c] via-[#c89b45] to-[#e0b85a] shadow-[0_0_24px_rgba(200,155,69,0.55)] transition-[width] duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-5 grid gap-2 text-xs text-[#9ca3af] sm:grid-cols-2">
                <p>Publieke toegang: actief</p>
                <p className="sm:text-right">Metagame-filter: ingeschakeld</p>
              </div>
            </div>
          </section>
        </div>
      ) : null}

      <div
        className={`transition-opacity duration-500 ${
          visible ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
