"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Welcome to Our Admission Portal
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Discover everything you need to know about applying to our programs.
          This portal guides you through the process and gives you all the tools
          and information to get started on your academic journey.
        </p>
      </motion.div>
    </section>
  );
}
