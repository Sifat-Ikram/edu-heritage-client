"use client";

import { TuitionFeeItem } from "@/types/admission";

interface Props {
  title: string;
  fees: TuitionFeeItem[];
}

export default function TuitionTable({ title, fees }: Props) {
  return (
    <div className="overflow-x-auto my-8">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <table className="min-w-full border rounded-lg overflow-hidden">
        <thead className="bg-[#e0fafa] dark:bg-[#161929] text-gray-800 dark:text-white text-left">
          <tr>
            <th className="p-3">Expense</th>
            <th className="p-3">Semester</th>
            <th className="p-3">Annual</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-[#161929] text-sm">
          {fees.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-3">{item.label}</td>
              <td className="p-3">{item.semester}</td>
              <td className="p-3">{item.annual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
