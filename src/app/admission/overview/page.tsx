"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaUniversity,
  FaLaptopCode,
  FaBookOpen,
  FaGlobeAmericas,
  FaSuitcase,
  FaGraduationCap,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import { OverviewFeature } from "@/types/admission";
import AdmissionOverviewCard from "@/components/cards/admission/AdmissionOverviewCard";

const features: OverviewFeature[] = [
  {
    title: "World-Class Faculty",
    description:
      "Learn from industry leaders and renowned professors with hands-on experience.",
    icon: <FaUniversity />,
  },
  {
    title: "Modern Learning Environment",
    description:
      "State-of-the-art labs, smart classrooms, and digital library access.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Balanced mix of theory and practice tailored to global standards.",
    icon: <FaBookOpen />,
  },
  {
    title: "Global Opportunities",
    description:
      "Exchange programs and internships with top universities worldwide.",
    icon: <FaGlobeAmericas />,
  },
];

const pathways = [
  {
    icon: <FaSuitcase className="text-3xl" />,
    title: "Top Employers",
    description:
      "Our graduates are hired by Google, Microsoft, UNDP, and top local tech firms.",
  },
  {
    icon: <FaGraduationCap className="text-3xl" />,
    title: "Higher Studies",
    description:
      "Alumni pursue Master's and PhDs at MIT, Oxford, NUS, and more.",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: "Startups & Innovation",
    description:
      "Many alumni have launched successful startups and tech ventures.",
  },
  {
    icon: <FaGlobe className="text-3xl" />,
    title: "Global Reach",
    description:
      "Work opportunities and collaborations in over 30+ countries worldwide.",
  },
];

export default function OverviewPage() {
  return (
    <main className="bg-gray-50 dark:bg-[#161929] text-gray-800 dark:text-white flex flex-col space-y-20 lg:space-y-28 xl:space-y-40">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://i.ibb.co/ycPVPgL8/682940.jpg"
          alt="Campus"
          fill
          className="object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white max-w-2xl"
          >
            <h1 className="title-text font-bold mb-4 dark:text-gray-200">
              Discover Your Future at Our University
            </h1>
            <p className="text-base sm:text-lg text-gray-200 dark:text-gray-200">
              A place of excellence, opportunity, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center title-text font-bold mb-8"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AdmissionOverviewCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Image
              src="https://i.ibb.co/4ZFVFHWW/pexels-photo-1438072.jpg"
              alt="Students"
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h3 className="title-text mb-4">About Our Admission Process</h3>
            <p className="mb-4">
              Our admission process is designed to be transparent, fair, and
              inclusive. We welcome students from diverse backgrounds and
              encourage innovation and leadership.
            </p>
            <p className="">
              Learn more about our application process, required documents, and
              what makes our university the best choice for your academic
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career pathways */}
      <section className="relative py-16 px-4 md:px-10 lg:px-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co/Y7YpQwxX/pexels-repuding-12064.jpg"
            alt="Career Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-opacity-60 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="title-text font-bold mb-12 text-white"
          >
            Career Pathways & Alumni Destinations
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pathways.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-6 border border-white/20 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="mb-4 flex justify-center text-white">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Image
              src="https://i.ibb.co/ks0LvgKj/building-8259184-640.jpg"
              alt="Students"
              width={800}
              height={600}
              className="rounded-xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <h3 className="title-text mb-4">Explore Our Admission Journey</h3>
            <p className="mb-4">
              We’ve built an admission process that values transparency, equal
              opportunity, and your unique potential. No matter where you come
              from, we’re here to support your academic dreams.
            </p>
            <p>
              Discover how to apply, what documents you will need, and why our
              university stands out as a launchpad for ambitious,
              forward-thinking students like you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-10 lg:px-20 bg-[#008080] dark:bg-white dark:text-gray-800 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title-text mb-4">Ready to Begin Your Journey?</h2>
          <p className="mb-6 text-sm sm:text-base max-w-xl mx-auto">
            Explore our programs, meet our community, and take your first step
            toward a future full of opportunity.
          </p>
          <button className="buttons border-2 max-lg:w-full lg:w-max border-white text-white dark:bg-[#161929] dark:!border-white dark:!text-white">
            Learn More
          </button>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="title-text mb-6"
          >
            Our Mission & Vision
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg mb-10"
          >
            Our university is committed to nurturing knowledge, fostering
            innovation, and empowering students to shape a brighter future. We
            envision a community where learners thrive through academic
            excellence, integrity, and social responsibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-50 dark:bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To provide inclusive and high-quality education that cultivates
                critical thinking, research, and leadership to address the
                challenges of tomorrow.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-50 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
              <p className="text-gray-600">
                To be a globally recognized institution that shapes future
                leaders and makes meaningful contributions to society through
                academic and cultural excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
