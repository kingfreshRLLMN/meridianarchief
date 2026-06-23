import { lawbookCategories } from "@/data/lawbook";
import Link from "next/link";

type LawbookSidebarProps = {
  activeSlug: string;
};

export default function LawbookSidebar({
  activeSlug,
}: LawbookSidebarProps) {
  return (
    <nav
      aria-label="Wetboekcategorieën"
      className="overflow-hidden rounded-lg border border-[#1f2937] bg-[#09090b]"
    >
      <div className="border-b border-[#1f2937] px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0b85a]">
          Wetboek
        </p>
      </div>

      <ul className="py-2">
        {lawbookCategories.map((category) => {
          const active = category.slug === activeSlug;

          return (
            <li key={category.slug}>
              {category.published ? (
                <Link
                  href={category.href}
                  className={`flex items-center justify-between border-l-2 px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "border-[#c89b45] bg-[#0b1120] text-[#e0b85a]"
                      : "border-transparent text-[#d1d5db] hover:border-[#c89b45]/60 hover:bg-[#0b1120] hover:text-[#e0b85a]"
                  }`}
                >
                  <span>{category.title}</span>
                  <span aria-hidden="true">›</span>
                </Link>
              ) : (
                <span className="flex items-center justify-between border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#9ca3af]">
                  <span>{category.title}</span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#4b5563]">
                    Volgt
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
