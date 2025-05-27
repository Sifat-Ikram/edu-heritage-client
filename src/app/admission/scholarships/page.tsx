"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/admission/AnimatedCounter";
import AidCarousel from "@/components/admission/AidCarousel";

const steps = [
  {
    title: "Complete Application Form",
    description:
      "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself.",
    button: "Start Financial Aid Application",
  },
  {
    title: "Review",
    description:
      "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",
  },
  {
    title: "Make Your Deposit",
    description:
      "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
  },
];

const stats = [
  {
    number: 126,
    label: "Degree & diploma programs offered",
  },
  {
    number: 82,
    label: "Of undergraduate students receive financial aid",
    isPercent: true,
  },
  {
    number: 74,
    label: "Of graduates had two or more internships as students",
    isPercent: true,
  },
];

export default function HowToApplyPage() {
  return (
    <main className="bg-white text-gray-900 dark:bg-[#161929] dark:text-white flex flex-col space-y-8 sm:space-y-14 lg:space-y-20 2xl:space-y-40">
      {/* Banner */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/3YMzSYYs/Go-The-Extra-Mile-For-Admission-In-Your-Dream-College.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="title-text font-bold">Apply for Financial Aid</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-gray-700 dark:text-white">
            At Edu Heritage, we practice holistic admission. This means that
            each piece in your application is reviewed as part of an integrated
            and comprehensive whole.
          </p>
        </div>
      </section>

      {/* Campus Image */}
      <section className="h-auto bg-[url('https://i.ibb.co/LXDgSjBh/College-admission-process-that-fits-you.jpg')] bg-cover bg-center bg-fixed relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 backdrop-blur-sm z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#e0fafa] dark:bg-[#161929] rounded-lg shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center space-y-2 px-4"
              >
                <AnimatedCounter
                  target={stat.number}
                  isPercent={stat.isPercent}
                />
                <p className="text-sm md:text-base font-medium text-gray-700 dark:text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="w-full bg-[#e0fafa] dark:bg-[#161929]">
        <div className="py-16 px-4 w-11/12 mx-auto flex flex-col md:flex-row gap-20">
          {/* Sticky Image Section */}
          <div className="md:w-1/3 md:mt-10">
            <div className="md:sticky top-20">
              <Image
                src="https://i.ibb.co/TqJcp1WX/thumb-1.webp"
                width={500}
                height={1000}
                alt="Financial Aid"
                priority
                className="w-full h-[400px]"
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="md:w-2/3 w-full">
            <h2 className="title-text font-bold text-center mb-12">
              Financial Aid Process
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row items-center gap-4 p-10 shadow-md rounded-xl bg-white dark:bg-[#161929] dark:border-[2px] border-white"
                >
                  <div>
                    <h1 className="border-[#008080] dark:border-white border-[3px] rounded-full py-1 px-3 text-[#008080] dark:text-white">
                      {index + 1}
                    </h1>{" "}
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center text-center md:text-left md:items-start">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      {step.title}
                    </h3>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info & Deadlines */}
      <AidCarousel />
    </main>
  );
}
