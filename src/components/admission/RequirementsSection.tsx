"use client";

import { motion } from "framer-motion";

const requirements: string[] = [
  "Completed application form",
  "High school diploma or equivalent",
  "Transcripts from previous institutions",
  "English proficiency test scores (if applicable)",
  "A statement of purpose and recommendation letters",
];

export default function RequirementsSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          Admission Requirements
        </h3>
        <ul className="space-y-4 text-sm sm:text-base text-gray-700 list-disc list-inside">
          {requirements.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-50 px-4 py-2 rounded-md shadow"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
