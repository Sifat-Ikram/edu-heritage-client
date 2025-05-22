"use client";

import { motion } from "framer-motion";

const steps: string[] = [
  "Register an account on the admissions portal",
  "Fill out the application form with your academic and personal details",
  "Upload required documents",
  "Pay the application fee",
  "Submit the application and await confirmation",
];

export default function HowToApplySection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          How to Apply
        </h3>
        <ol className="space-y-4 text-sm sm:text-base text-gray-700 list-decimal list-inside">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white px-4 py-2 rounded-md shadow border-l-4 border-teal-500"
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
