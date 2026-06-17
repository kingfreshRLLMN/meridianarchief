type DossierSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export default function DossierSection({
  id,
  title,
  children,
}: DossierSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-lg border border-[#1f2937] bg-[#0b1120]/88 p-5 shadow-[0_0_24px_rgba(2,6,23,0.42)] md:p-6"
    >
      <h2 className="border-b border-[#1f2937] pb-3 text-2xl font-semibold text-[#f8fafc]">
        {title}
      </h2>
      <div className="mt-4 leading-7 text-[#d1d5db]">{children}</div>
    </section>
  );
}
