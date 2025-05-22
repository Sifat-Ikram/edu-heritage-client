"use client";

import { motion } from "framer-motion";

const departments = [
  {
    title: "Computer Science",
    description: "Learn cutting-edge technologies and software development.",
  },
  {
    title: "Business Administration",
    description: "Gain skills in management, finance, and entrepreneurship.",
  },
  {
    title: "Electrical Engineering",
    description: "Explore circuit design, signal processing, and more.",
  },
  {
    title: "Psychology",
    description: "Understand human behavior and cognitive processes.",
  },
];

export default function DepartmentsSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-gray-800">
          Available Departments
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-6 shadow-lg bg-white hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
                {dept.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                {dept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
