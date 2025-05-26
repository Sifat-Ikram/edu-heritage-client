"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TuitionTable from "./TuitionTable";
import { ProgramFees } from "@/types/admission";

export default function TuitionAccordion({
  programs,
}: {
  programs: ProgramFees[];
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First one open by default

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 bg-white dark:bg-[#161929] text-gray-800 dark:text-white">
      {programs.map((program, i) => (
        <div
          key={i}
          className="border border-gray-200 dark:border-gray-100 rounded-md overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-[#008080] bg-gray-50 dark:text-gray-800 transition cursor-pointer"
          >
            <div className="flex items-center space-x-5">
              <span className="text-base sm:text-lg">
                <program.icon />
              </span>
              <span className="text-base sm:text-lg">{program.title}</span>
            </div>
            {activeIndex === i ? (
              <FaChevronUp className="text-sm sm:text-base" />
            ) : (
              <FaChevronDown className="text-sm sm:text-base" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {activeIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-5 pb-5"
              >
                <TuitionTable title="Fees Breakdown" fees={program.fees} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
