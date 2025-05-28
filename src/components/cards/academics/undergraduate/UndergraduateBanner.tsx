"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UndergraduateBanner() {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full">
      <Image
        src="https://i.ibb.co/VcF0xmPn/happy-woman-travel-london-big-600nw-222159805.webp"
        fill
        alt="Undergraduate Hero"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl font-bold">
            Our Undergraduate Programs
          </h1>
          <p className="text-sm sm:text-lg mt-4">
            Gain the skills, knowledge, and experience to shape your future and
            make an impact in the world.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
