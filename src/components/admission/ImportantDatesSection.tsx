"use client";

import { motion } from "framer-motion";

const dates: { title: string; date: string }[] = [
  { title: "Application Opens", date: "June 1, 2025" },
  { title: "Application Deadline", date: "August 31, 2025" },
  { title: "Admission Test", date: "September 10, 2025" },
  { title: "Final Results", date: "October 5, 2025" },
];

export default function ImportantDatesSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          Important Dates
        </h3>
        <div className="space-y-4">
          {dates.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-lg shadow px-4 py-3 border-l-4 border-teal-500"
            >
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-gray-600">{item.date}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
