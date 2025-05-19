"use client";

import About from "../cards/About";
import { FaUniversity, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";

const AboutSection = () => {
  return (
    <section className="w-full max-sm:px-5 sm:w-11/12 mx-auto bg-white dark:bg-[#161929]">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6">
          About Our University
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          We are a prestigious institution committed to academic excellence,
          innovation, and global impact. With a legacy of nurturing leaders,
          thinkers, and innovators, we empower students for success in an
          ever-changing world.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          <About
            icon={
              <FaUniversity className="text-[#008080] dark:text-gray-800 text-4xl" />
            }
            title="Legacy & Excellence"
            description="Over 100 years of academic legacy shaping the future of education and research."
          />
          <About
            icon={
              <FaChalkboardTeacher className="text-[#008080] dark:text-gray-800 text-4xl" />
            }
            title="Expert Faculty"
            description="Our faculty comprises award-winning educators, researchers, and professionals."
          />
          <About
            icon={
              <MdOutlineEmojiEvents className="text-[#008080] dark:text-gray-800 text-4xl" />
            }
            title="Global Recognition"
            description="Ranked among the top institutions globally for innovation and impact."
          />
          <About
            icon={
              <FaGlobe className="text-[#008080] dark:text-gray-800 text-4xl" />
            }
            title="Diverse Community"
            description="Students and staff from over 80 countries foster a rich, inclusive culture."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
