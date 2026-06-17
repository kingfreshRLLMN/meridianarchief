import type { NarrativeParagraph } from "@/data/characters";
import Link from "next/link";

type DossierNarrativeProps = {
  paragraphs: NarrativeParagraph[];
};

export default function DossierNarrative({
  paragraphs,
}: DossierNarrativeProps) {
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>
          {paragraph.map((part, partIndex) =>
            "href" in part ? (
              <Link
                key={`${part.href}-${partIndex}`}
                href={part.href}
                className="font-semibold text-[#f8fafc] underline decoration-[#c89b45]/55 underline-offset-4 transition hover:text-[#e0b85a]"
              >
                {part.name}
              </Link>
            ) : (
              <span key={`${part.text}-${partIndex}`}>{part.text}</span>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
