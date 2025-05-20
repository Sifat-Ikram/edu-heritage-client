"use client";
import { homeAboutCardProps } from "@/types/homeAbout";

const About: React.FC<homeAboutCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start space-y-4 bg-gray-50 dark:bg-gray-50 p-6 rounded-xl shadow-md transition hover:shadow-lg">
    {icon}
    <h3 className="text-[24px] sm:text-[30px] md:text-[24px] lg:text-[40px] font-semibold text-gray-800 dark:text-gray-800">
      {title}
    </h3>
    <p className="text-[16px] sm:text-[14px] md:text-[16px] lg:text-[24px] text-gray-600 dark:text-gray-600">{description}</p>
  </div>
);

export default About;
