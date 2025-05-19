"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EventItem } from "@/types/homeEvents";

interface Props {
  event: EventItem;
  index: number;
}

export default function HomeEvent({ event, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
    >
      {/* Image Side */}
      <div className="w-1/2 relative min-h-[250px]">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Side */}
      <div className="flex-1 p-6 flex flex-col justify-center gap-4 z-10 bg-white">
        <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
        <p className="text-gray-600 text-base">{event.description}</p>
        <button className="mt-2 w-max bg-[#008080] text-white text-sm md:text-base px-5 py-2 rounded-full hover:bg-teal-700 transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
