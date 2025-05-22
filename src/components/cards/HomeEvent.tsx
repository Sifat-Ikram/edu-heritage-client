"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EventItem } from "@/types/homeEvents";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

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
      className="flex flex-col pb-5 sm:flex-row gap-6 md:gap-8 lg:gap-10 bg-white dark:bg-[#161929] overflow-hidden transition-shadow duration-300 w-full"
    >
      {/* Image Side */}
      <div className="w-11/12 max-sm:mx-auto sm:w-1/2 relative h-[250px] sm:h-[280px] md:h-[300px] lg:h-[400px]">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          sizes="100%"
          priority
          className="object-cover rounded-xl"
        />
      </div>

      {/* Text Side */}
      <div className="w-11/12 mx-auto sm:flex-1 flex flex-col justify-center gap-4 md:gap-5 lg:gap-8 z-10 bg-white dark:bg-[#161929]">
        <h3 className="title-text text-gray-800 dark:text-white">
          {event.title}
        </h3>
        <p className="text-gray-600 dark:text-white paragraph-text">
          {event.description}
        </p>
        <div className="flex flex-row flex-wrap gap-[14px] md:gap-2 lg:gap-4 text-sm lg:text-xl text-gray-700 dark:text-white mt-2">
          <div className="flex items-center gap-2 sm:gap-1 lg:gap-2">
            <FaCalendarAlt className="text-[#008080] dark:text-white" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-1 lg:gap-2">
            <FaClock className="text-[#008080] dark:text-white" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-1 lg:gap-2">
            <FaMapMarkerAlt className="text-[#008080] dark:text-white" />
            <span>{event.location}</span>
          </div>
        </div>
        <Link
          href={`/events/${event.slug}`}
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={(e) => e.stopPropagation()}
          className="mt-2 w-max buttons btn-apply dark:!bg-white dark:!text-gray-800 transition cursor-pointer z-20 relative"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}
