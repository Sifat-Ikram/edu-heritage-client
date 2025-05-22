"use client";

import { FeeItem } from "@/types/admission";
import { motion } from "framer-motion";

const fees: FeeItem[] = [
  { label: "Application Fee", amount: "$50" },
  { label: "Enrollment Fee", amount: "$200" },
  { label: "Tuition per Semester", amount: "$1,500" },
];

export default function FeesSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Tuition & Fees
        </h3>
        <ul className="space-y-4">
          {fees.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white px-4 py-3 rounded-md shadow border-l-4 border-teal-500"
            >
              <div className="flex justify-between text-sm sm:text-base text-gray-700">
                <span>{item.label}</span>
                <span>{item.amount}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
