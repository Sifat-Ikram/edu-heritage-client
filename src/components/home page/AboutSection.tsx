"use client";

import About from "../cards/About";
import { FaUniversity, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";

const AboutSection = () => {
  return (
    <section className="w-full max-sm:px-5 sm:w-11/12 mx-auto font-roboto bg-white dark:bg-[#161929] space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
      <div className="text-center">
        <h2 className="title-text text-gray-800 dark:text-white mb-6">
          About Our University
        </h2>
        <p className="paragraph-text text-gray-600 dark:text-gray-300 text-center mb-12">
          We are a prestigious institution committed to academic excellence,
          innovation, and global impact. With a legacy of nurturing leaders,
          thinkers, and innovators, we empower students for success in an
          ever-changing world.
        </p>
      </div>
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
    </section>
  );
};

export default AboutSection;
