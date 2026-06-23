export type PenaltyRow = {
  offense: string;
  detention?: string;
  drivingBan?: string;
  fine?: string;
  measure?: string;
};

type PenaltyTableProps = {
  rows: PenaltyRow[];
};

export default function PenaltyTable({ rows }: PenaltyTableProps) {
  const hasDrivingBan = rows.some((row) => row.drivingBan);
  const hasMeasure = rows.some((row) => row.measure);

  return (
    <div className="overflow-x-auto rounded-lg border border-[#1f2937]">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead className="bg-[#111827] text-xs uppercase tracking-[0.12em] text-[#9ca3af]">
          <tr>
            <th className="px-4 py-3 font-semibold">Strafbaar feit</th>
            <th className="px-4 py-3 font-semibold">Celstraf</th>
            {hasDrivingBan ? (
              <th className="px-4 py-3 font-semibold">Rijontzegging</th>
            ) : null}
            <th className="px-4 py-3 font-semibold">Boete</th>
            {hasMeasure ? (
              <th className="px-4 py-3 font-semibold">Maatregel</th>
            ) : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1f2937] bg-[#09090b]/80">
          {rows.map((row) => (
            <tr key={row.offense} className="align-top hover:bg-[#0b1120]">
              <td className="px-4 py-3 font-medium text-[#f8fafc]">
                {row.offense}
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-[#d1d5db]">
                {row.detention ?? "Geen"}
              </td>
              {hasDrivingBan ? (
                <td className="whitespace-nowrap px-4 py-3 text-[#d1d5db]">
                  {row.drivingBan ?? "Geen"}
                </td>
              ) : null}
              <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#e0b85a]">
                {row.fine ?? "Geen"}
              </td>
              {hasMeasure ? (
                <td className="px-4 py-3 text-[#9ca3af]">
                  {row.measure ?? "Geen"}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
