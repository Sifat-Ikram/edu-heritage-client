"use client";

import { OverviewFeature } from "@/types/admission";
import { motion } from "framer-motion";

interface Props {
  feature: OverviewFeature;
}

export default function AdmissionOverviewCard({ feature }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 border border-gray-100"
    >
      <div className="text-4xl text-[#008080]">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </motion.div>
  );
}
