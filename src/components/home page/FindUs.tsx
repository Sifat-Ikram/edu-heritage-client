"use client";

import React from "react";
import { motion } from "framer-motion";
import Map from "../cards/Map";

const FindUs: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-11/12 mx-auto font-roboto mb-20"
    >
      <div className="flex flex-col items-center space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
        <div className="flex flex-col space-y-5 items-center">
          <h2 className="title-text dark:text-white leading-tight text-nowrap">
            We are Just a Map Away
          </h2>
          <p className="paragraph-text dark:text-gray-300 text-center">
            Explore the vibrant campus of Edu Heritage campus, located at the
            heart of the city. Easily accessible and surrounded by nature, our
            campus is designed to inspire learning and innovation.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Map />
      </div>
    </motion.section>
  );
};

export default FindUs;
