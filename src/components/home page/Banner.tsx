"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import banner from "../../assets/banner.webp";

const Banner = () => {
  return (
    <section className="overflow-hidden pt-28 pb-8 dark:bg-[#161929] font-roboto">
      <div className="w-11/12 mx-auto flex font-roboto flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 items-center max-sm:justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="title-text leading-tight mb-6 dark:text-white max-lg:text-center"
          >
            Empowering Minds, Shaping Futures
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="paragraph-text mb-8 dark:text-white max-lg:text-center"
          >
            Join a legacy of excellence. Discover programs, research, and
            opportunities that will define your academic journey.
          </motion.p>

          <div className="flex items-center max-lg:justify-center gap-2 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link href="/apply">
                <button className="buttons btn-apply dark:!bg-white dark:!text-gray-800">
                  Apply Now
                </button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              <Link href="/about">
                <button className="buttons btn-learn hover:bg-teal-700 hover:text-white dark:bg-transparent dark:!border-white dark:!text-white dark:hover:!bg-white dark:hover:!text-gray-800">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full lg:w-1/2 flex max-sm:justify-center"
        >
          <Image
            src={banner}
            alt="University Campus"
            width={600}
            height={600}
            className="rounded-xl shadow-xl object-cover h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full max-w-xs sm:max-w-md md:max-w-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
