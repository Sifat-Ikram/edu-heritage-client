"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AdmissionLayoutProps {
  children: ReactNode;
}

export default function AdmissionLayout({ children }: AdmissionLayoutProps) {
  return (
    <main className="bg-gray-50 min-h-screen pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {children}
      </motion.div>
    </main>
  );
}
