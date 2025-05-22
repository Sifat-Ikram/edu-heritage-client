"use client";

import { Scholarship } from "@/types/admission";
import { motion } from "framer-motion";

const scholarships: Scholarship[] = [
  {
    name: "Merit-Based Scholarship",
    description: "Awarded to top performing applicants based on test scores.",
  },
  {
    name: "Need-Based Grant",
    description: "For students demonstrating financial need.",
  },
  {
    name: "Women in STEM",
    description: "Encouraging women to pursue science and tech programs.",
  },
];

export default function ScholarshipsSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Scholarships
        </h3>
        <div className="space-y-4">
          {scholarships.map((sch, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-md shadow p-4 border-l-4 border-teal-500"
            >
              <h4 className="font-medium text-gray-800">{sch.name}</h4>
              <p className="text-sm text-gray-600">{sch.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
