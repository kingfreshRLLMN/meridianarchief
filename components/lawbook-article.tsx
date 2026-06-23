type LawbookArticleProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function LawbookArticle({
  id,
  number,
  title,
  children,
}: LawbookArticleProps) {
  return (
    <article id={id} className="scroll-mt-28 border-b border-[#1f2937] py-8">
      <header className="flex items-start gap-4">
        <span className="mt-1 shrink-0 font-mono text-sm font-semibold text-[#c89b45]">
          {number}
        </span>
        <h2 className="text-2xl font-semibold text-[#f8fafc]">{title}</h2>
      </header>
      <div className="mt-5 space-y-4 leading-8 text-[#d1d5db]">{children}</div>
    </article>
  );
}
