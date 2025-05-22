"use client";

import { TestDetail } from "@/types/admission";
import { motion } from "framer-motion";

const testDetails: TestDetail[] = [
  {
    section: "Mathematics",
    duration: "45 mins",
    topics: ["Algebra", "Geometry", "Statistics"],
  },
  {
    section: "English",
    duration: "30 mins",
    topics: ["Reading Comprehension", "Grammar", "Vocabulary"],
  },
  {
    section: "Logical Reasoning",
    duration: "30 mins",
    topics: ["Pattern Recognition", "Puzzles", "Problem Solving"],
  },
];

export default function TestDetailsSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Admission Test Details
        </h3>
        <div className="space-y-4">
          {testDetails.map((test, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-md shadow p-4 border-l-4 border-teal-500"
            >
              <div className="font-medium text-gray-800">
                {test.section} -{" "}
                <span className="text-sm font-normal text-gray-600">
                  {test.duration}
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                {test.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
