"use client";

import { UndergraduateProgram } from "@/types/academics";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FaCode, FaBrain, FaFlask, FaBriefcase } from "react-icons/fa";

const iconMap: Record<string, JSX.Element> = {
  code: <FaCode className="text-xl text-white" />,
  brain: <FaBrain className="text-xl text-white" />,
  flask: <FaFlask className="text-xl text-white" />,
  briefcase: <FaBriefcase className="text-xl text-white" />,
};

export default function ProgramCard(program: UndergraduateProgram) {
  const icon = iconMap[program.iconKey];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="overflow-hidden rounded-lg bg-white dark:bg-[#161929] dark:border-[2px] border-solid border-white shadow-xl hover:shadow-2xl transition-shadow"
    >
      <Link href={`/academics/undergraduate/${program.id}`}>
        <div className="relative h-40">
          <Image
            fill
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-teal-700 dark:text-white p-2 rounded-full">
            {icon}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-teal-800 dark:text-white">
            {program.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-white mt-1">
            {program.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
