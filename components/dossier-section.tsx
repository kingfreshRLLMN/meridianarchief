type DossierSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function DossierSection({
  title,
  children,
}: DossierSectionProps) {
  return (
    <section className="rounded-lg border border-[#1f2937] bg-[#0b1120] p-5 md:p-6">
      <h2 className="text-lg font-semibold text-[#c89b45]">{title}</h2>
      <div className="mt-4 leading-7 text-[#d1d5db]">{children}</div>
    </section>
  );
}
