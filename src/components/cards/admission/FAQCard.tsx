"use client";

import { FAQCardProps } from "@/types/admission";

export default function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-teal-500">
      <h4 className="font-semibold text-gray-800 mb-2">{question}</h4>
      <p className="text-gray-600 text-sm">{answer}</p>
    </div>
  );
}
