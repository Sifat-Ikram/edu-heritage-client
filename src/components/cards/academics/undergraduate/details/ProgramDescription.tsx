"use client";

import React from "react";
import { motion } from "framer-motion";

type ProgramDescriptionProps = {
  details?: string;
};

const ProgramDescription: React.FC<ProgramDescriptionProps> = ({ details }) => {
  const hasDetails = details && details.trim().length > 0;

  return (
    <section className="text-gray-800 dark:text-white mt-8 sm:mt-14 lg:mt-20 2xl:mt-40">
      <motion.h2
        className="title-text dark:text-white font-semibold text-teal-700 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Program Overview
      </motion.h2>

      {hasDetails ? (
        <motion.p
          className="paragraph-text leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {details}
        </motion.p>
      ) : (
        <motion.p
          className="paragraph-text italic text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Details for this program are currently not available.
        </motion.p>
      )}
    </section>
  );
};

export default ProgramDescription;
