"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-11/12 py-10 mx-auto flex justify-between items-center gap-5 lg:gap-10 xl:gap-16">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 xl:w-1/2 items-center max-sm:justify-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="title-text leading-tight mb-6 dark:text-white max-lg:text-center"
        >
          Begin Your Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="paragraph-text mb-8 dark:text-white max-lg:text-center"
        >
          At Edu Heritage University, we believe in nurturing the next
          generation of thinkers, leaders, and innovators. Our undergraduate
          programs are designed to provide a strong academic foundation,
          hands-on experience, and a vibrant campus life that shapes
          well-rounded individuals. Whether you're passionate about science,
          arts, technology, or business, Edu Heritage offers a diverse range of
          programs tailored to meet your aspirations. Join a community that
          values curiosity, creativity, and character—and step confidently into
          your future.
        </motion.p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full lg:flex-1 flex max-lg:justify-center"
      >
        <Image
          src="https://i.ibb.co/Mx057wsR/photo-1689686610856-3bcf921eb1f0.jpg"
          alt="University Campus"
          width={600}
          height={600}
          className="rounded-xl shadow-xl object-cover h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[600px] w-full"
          priority
        />
      </motion.div>
    </section>
  );
}
