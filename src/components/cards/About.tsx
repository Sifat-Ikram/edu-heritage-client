"use client";
import { homeAboutCardProps } from "@/types/homeAbout";

const About: React.FC<homeAboutCardProps> = ({ icon, title, description }) => (
  <div className="relative flex flex-col items-center p-6 py-16 transition-all duration-300">
    {/* Floating Icon + Title */}
    <div className="absolute -top-16 z-20 w-full flex flex-col items-center bg-gray-100 dark:bg-gray-50 px-6 py-8 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-y-90 hover:shadow-xl">
      <div className="text-3xl text-[#008080] dark:text-[#026868]">{icon}</div>
      <h3 className="mt-4 paragraph-text font-semibold text-gray-800 dark:text-gray-800 text-center">
        {title}
      </h3>
    </div>

    {/* Description stays in bottom of main card */}
    <p className="text-gray-100 dark:text-gray-200 text-center text-[10px] sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-xl mt-16">
      {description}
    </p>
  </div>
);

export default About;
