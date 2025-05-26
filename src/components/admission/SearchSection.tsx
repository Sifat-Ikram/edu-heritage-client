"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  "Computer Science",
  "Business Administration",
  "Electrical Engineering",
  "Psychology",
  "Economics",
  "Mechanical Engineering",
];

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const filteredPrograms = programs.filter((program) =>
    program.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-10 px-4 md:px-10 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
          Search Undergraduate Programs
        </h3>
        <input
          type="text"
          placeholder="Search for a program..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
        />
        <div className="mt-6 space-y-3">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white px-4 py-3 rounded shadow border-l-4 border-teal-500 text-gray-700 text-sm sm:text-base"
            >
              {program}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
