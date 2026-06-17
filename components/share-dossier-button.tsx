"use client";

import { useEffect, useRef, useState } from "react";

export default function ShareDossierButton() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function copyCurrentUrl() {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = url;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);
    }

    setCopied(true);

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    resetTimer.current = setTimeout(() => setCopied(false), 2200);
  }

  return (
    <button
      type="button"
      onClick={copyCurrentUrl}
      className="inline-flex min-w-36 items-center justify-center gap-2 rounded-md border border-[#c89b45]/45 bg-[#09090b]/80 px-4 py-2.5 text-sm font-semibold text-[#f8fafc] shadow-[0_0_20px_rgba(200,155,69,0.08)] transition hover:border-[#e0b85a] hover:bg-[#c89b45]/10 hover:shadow-[0_0_24px_rgba(200,155,69,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e0b85a]"
      aria-live="polite"
    >
      {copied ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-[#e0b85a]"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-[#e0b85a]"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49" />
        </svg>
      )}
      <span>{copied ? "Link gekopieerd" : "Dossier delen"}</span>
    </button>
  );
}
