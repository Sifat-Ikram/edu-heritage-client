"use client";
import { homeAboutCardProps } from "@/types/homeAbout";

const About: React.FC<homeAboutCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start space-y-4 bg-gray-50 dark:bg-gray-50 p-6 rounded-xl shadow-md transition hover:shadow-lg">
    {icon}
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-800">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-600">{description}</p>
  </div>
);

export default About;
