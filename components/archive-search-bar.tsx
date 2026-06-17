"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type SearchItem = {
  name: string;
  href: string;
  type: "Inwoner" | "Bedrijf";
};

type ArchiveSearchBarProps = {
  items: SearchItem[];
  compact?: boolean;
};

export default function ArchiveSearchBar({
  items,
  compact = false,
}: ArchiveSearchBarProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return items
      .filter((item) => item.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => a.name.localeCompare(b.name, "nl"))
      .slice(0, 5);
  }, [items, query]);

  return (
    <div className="relative mx-auto w-full text-left">
      <label htmlFor="archive-search" className="sr-only">
        Zoek in Meridian Archief
      </label>
      <div className="neon-animated-frame group relative overflow-hidden rounded-lg bg-[#09090b]/92 transition focus-within:shadow-[0_0_48px_rgba(200,155,69,0.34)]">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#e0b85a]"
          aria-hidden="true"
        >
          Search
        </span>
        <input
          id="archive-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Zoek inwoner of bedrijf..."
          className={`w-full bg-transparent pl-24 pr-4 text-sm font-medium text-[#f8fafc] outline-none placeholder:text-[#6b7280] ${
            compact ? "h-11" : "h-14"
          }`}
        />
      </div>

      {results.length > 0 ? (
        <div className="absolute z-30 mt-3 w-full overflow-hidden rounded-lg border border-[#1f2937] bg-[#09090b]/96 shadow-[0_0_34px_rgba(200,155,69,0.18)] backdrop-blur">
          {results.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between border-b border-[#1f2937] px-4 py-3 text-sm text-[#f8fafc] transition last:border-b-0 hover:bg-[#0b1120] hover:text-[#e0b85a]"
              onClick={() => setQuery("")}
            >
              <span className="font-semibold">{item.name}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-[#9ca3af]">
                {item.type}
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
