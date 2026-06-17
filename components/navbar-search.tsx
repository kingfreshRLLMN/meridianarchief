"use client";

import { usePathname } from "next/navigation";
import ArchiveSearchBar from "@/components/archive-search-bar";
import { searchItems } from "@/data/search-items";

export default function NavbarSearch() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <div className="hidden lg:block" />;
  }

  return <ArchiveSearchBar items={searchItems} compact />;
}
