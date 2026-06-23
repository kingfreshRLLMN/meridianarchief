"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type PortalTransition = "business" | "character" | "book";

const portals = [
  {
    href: "/businesses",
    eyebrow: "Register",
    title: "Bedrijven",
    transition: "business",
  },
  {
    href: "/characters",
    eyebrow: "Dossiers",
    title: "Inwoners",
    transition: "character",
  },
  {
    href: "/wetboek",
    eyebrow: "Wetboek",
    title: "Regels",
    transition: "book",
  },
];

const portalClass =
  "group rounded-lg border border-[#1f2937] bg-[#0b1120]/92 p-5 text-center shadow-[0_0_30px_rgba(200,155,69,0.10)] transition hover:border-[#c89b45] hover:bg-[#111827] hover:shadow-[0_0_42px_rgba(200,155,69,0.24)] md:p-6";

export default function HomePortalCards() {
  const router = useRouter();
  const [activeTransition, setActiveTransition] =
    useState<PortalTransition | null>(null);

  const openPortal = (href: string, transition: PortalTransition) => {
    if (activeTransition) {
      return;
    }

    setActiveTransition(transition);
    window.setTimeout(() => {
      router.push(href);
    }, transition === "book" ? 4000 : 2400);
  };

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {portals.map((portal) => {
          const content = (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b85a]">
                {portal.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f8fafc] lg:text-4xl">
                {portal.title}
              </h2>
            </>
          );

          return (
            <button
              key={portal.href}
              type="button"
              onClick={() =>
                openPortal(portal.href, portal.transition as PortalTransition)
              }
              className={`${portalClass} cursor-pointer`}
            >
              {content}
            </button>
          );
        })}
      </div>

      <PortalTransitionOverlay transition={activeTransition} />
    </>
  );
}

function PortalTransitionOverlay({
  transition,
}: {
  transition: PortalTransition | null;
}) {
  if (!transition) {
    return null;
  }

  const label =
    transition === "business"
      ? "Register openen"
      : transition === "character"
        ? "Dossier scannen"
        : "Wetboek openen";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/92 backdrop-blur-md"
      aria-live="polite"
      aria-label={label}
    >
      {transition === "business" ? <BusinessRegisterTransition /> : null}
      {transition === "character" ? <CharacterDossierTransition /> : null}
      {transition === "book" ? <LawbookTransition /> : null}
      <p className="absolute mt-48 text-xs font-semibold uppercase tracking-[0.28em] text-[#e0b85a]">
        {label}
      </p>
    </div>
  );
}

function BusinessRegisterTransition() {
  return (
    <div className="business-register-stage">
      <div className="business-register-card">
        <span className="business-register-label">Register</span>
        <span className="business-register-line business-register-line-one" />
        <span className="business-register-line business-register-line-two" />
        <span className="business-register-line business-register-line-three" />
        <span className="business-register-stamp">Goedgekeurd</span>
      </div>
    </div>
  );
}

function CharacterDossierTransition() {
  return (
    <div className="character-dossier-stage">
      <div className="character-dossier-card">
        <span className="character-dossier-photo" />
        <span className="character-dossier-line character-dossier-line-one" />
        <span className="character-dossier-line character-dossier-line-two" />
        <span className="character-dossier-line character-dossier-line-three" />
        <span className="character-dossier-scan" />
      </div>
    </div>
  );
}

function LawbookTransition() {
  return (
    <div className="book-open-stage">
      <div className="book-open-shadow" />
      <div className="book-open-cover book-open-cover-left" />
      <div className="book-open-cover book-open-cover-right" />
      <div className="book-open-pages">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
