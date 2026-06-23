"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const portals = [
  {
    href: "/businesses",
    eyebrow: "Register",
    title: "Bedrijven",
  },
  {
    href: "/characters",
    eyebrow: "Dossiers",
    title: "Inwoners",
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
  const [isOpeningLawbook, setIsOpeningLawbook] = useState(false);

  const openLawbook = () => {
    if (isOpeningLawbook) {
      return;
    }

    setIsOpeningLawbook(true);
    window.setTimeout(() => {
      router.push("/wetboek");
    }, 760);
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

          if (portal.transition === "book") {
            return (
              <button
                key={portal.href}
                type="button"
                onClick={openLawbook}
                className={`${portalClass} cursor-pointer`}
              >
                {content}
              </button>
            );
          }

          return (
            <Link key={portal.href} href={portal.href} className={portalClass}>
              {content}
            </Link>
          );
        })}
      </div>

      {isOpeningLawbook ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617]/92 backdrop-blur-md"
          aria-live="polite"
          aria-label="Wetboek wordt geopend"
        >
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
          <p className="absolute mt-48 text-xs font-semibold uppercase tracking-[0.28em] text-[#e0b85a]">
            Wetboek openen
          </p>
        </div>
      ) : null}
    </>
  );
}
