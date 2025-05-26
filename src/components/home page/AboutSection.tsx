"use client";

import About from "../cards/About";
import { FaUniversity, FaChalkboardTeacher, FaGlobe } from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";

const AboutSection = () => {
  return (
    <section className="w-full font-roboto bg-[#008080] dark:bg-[#161929] space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
      <div className="w-full max-sm:px-5 sm:w-4/5 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
          <About
            icon={
              <FaUniversity className="text-[#008080] dark:text-gray-800 text-6xl" />
            }
            title="Legacy & Excellence"
            description="Over 100 years of academic legacy shaping the future of education and research."
          />
          <About
            icon={
              <FaChalkboardTeacher className="text-[#008080] dark:text-gray-800 text-6xl" />
            }
            title="Expert Faculty"
            description="Our faculty comprises award-winning educators, researchers, and professionals."
          />
          <About
            icon={
              <MdOutlineEmojiEvents className="text-[#008080] dark:text-gray-800 text-6xl" />
            }
            title="Global Recognition"
            description="Ranked among the top institutions globally for innovation and impact."
          />
          <About
            icon={
              <FaGlobe className="text-[#008080] dark:text-gray-800 text-6xl" />
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
