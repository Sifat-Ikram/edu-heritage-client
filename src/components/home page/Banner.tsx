"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen dark:bg-[#161929] font-roboto bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/q32LShY4/photo-1554473675-d0904f3cbf38-fm-jpg-q-60-w-3000-ixlib-rb-4-1.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 bottom-0 inset-0 bg-black/60 bg-opacity-50 z-10"></div>

      <div className="relative z-20 w-11/12 max-w-7xl text-white mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 py-40">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 xl:w-2/5 items-center max-sm:justify-center"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
