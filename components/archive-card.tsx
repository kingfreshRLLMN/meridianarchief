import Link from "next/link";

type ArchiveCardProps = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
};

export default function ArchiveCard({
  href,
  eyebrow,
  title,
  description,
  meta,
}: ArchiveCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-[#1f2937] bg-[#0b1120] p-5 transition hover:border-[#c89b45] hover:bg-[#111827]"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b85a]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-[#f8fafc]">{title}</h2>
      <p className="mt-3 leading-7 text-[#9ca3af]">{description}</p>
      {meta ? (
        <p className="mt-5 border-t border-[#1f2937] pt-4 text-sm text-[#d1d5db]">
          {meta}
        </p>
      ) : null}
    </Link>
  );
}
