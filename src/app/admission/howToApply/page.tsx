"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaWpforms,
  FaCheckCircle,
  FaSearch,
  FaPhoneAlt,
  FaCreditCard,
} from "react-icons/fa";

const steps = [
  {
    title: "Complete Application Form",
    description:
      "The University of Acadia uses Apply Web for the processing of graduate applications. Proceed to the link below to create an Apply Web account, submit an application review a submitted application, and access post-submission functionality.",
    icon: <FaWpforms />,
    button: "Application Form",
  },
  {
    title: "Confirmation of Application",
    description:
      "Admissions requirements vary by program. Please consult the program website to verify which information is required to complete the application.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Application Review",
    description:
      "GRC will review your application to confirm you meet our requirements. If so, you will then be asked to complete an interview as part of the review process.",
    icon: <FaSearch />,
  },
  {
    title: "Application Interview",
    description:
      "Interviews are usually completed over the phone with a member of the Academic Team. The purpose of the interview is to get to know you better, hear about your future plans, understand why you are interested in the course.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Payment of Fees",
    description:
      "At the end of the application, you will be required to pay the registration fee and the testing fee before continuing to the next step.",
    icon: <FaCreditCard />,
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
          <h1 className="title-text font-bold">How to Apply</h1>
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
      <section className="h-[650px] bg-[url('https://i.ibb.co/LXDgSjBh/College-admission-process-that-fits-you.jpg')] bg-cover bg-center bg-fixed relative flex items-center justify-center">
        <div className="bg-black/10 bg-opacity-40 w-full h-full absolute top-0 left-0 z-0" />
        <div>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            Your Path to Acadia Starts Here
          </h2>
          <p className="text-white text-center text-base md:text-lg mt-4 max-w-xl mx-auto">
            Follow our simple step-by-step application process and begin your
            journey with confidence and clarity.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="">
        <div className="max-w-4xl mx-auto">
          <h2 className="title-text font-bold text-center mb-12">
            The Application Process
          </h2>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="text-[#008080] dark:text-white text-2xl mt-1">
                  {step.icon}
                </div>
                <div>
                  <h3 className="paragraph-text font-semibold">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm mt-1">{step.description}</p>
                  {step.button && (
                    <div className="mt-6">
                      <a href="#" className="buttons btn-apply">
                        {step.button}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info & Deadlines */}
      <section className="bg-[#f8f8f8] dark:text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-10">
          {/* Info */}
          <div className="w-full md:w-2/3">
            <h3 className="paragraph-text font-bold text-[#222] mb-6">
              The Application Process
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                ✔️ You can be admitted at any time during the academic year.
              </li>
              <li>
                ✔️ If English is not your first language, you will need to
                demonstrate English language proficiency equivalent to a minimum
                of 5.5 in each band and 6.0 in speaking.
              </li>
              <li>
                ✔️ Contact information for one teacher (or two, maximum) who
                will complete the Teacher Evaluation form.
              </li>
              <li>
                ✔️ Open to students 18 years and over at course commencement.
              </li>
              <li>✔️ Spiritual Formation Program Requirements</li>
            </ul>
            <button className="mt-8 buttons btn-apply">
              Request a campus tour
            </button>
          </div>

          {/* Deadlines */}
          <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-100 dark:text-gray-800 p-6 rounded shadow text-center md:text-left space-y-8">
            <h1 className="paragraph-text font-bold">Application Deadlines</h1>
            <ul className="text-sm space-y-3">
              <li>
                <strong>GENERAL</strong>
                <br />
                October 15 –{" "}
                <span className="text-[#008080]">Early decision I</span>
              </li>
              <li>
                November 1 –{" "}
                <span className="text-[#008080]">Early decision II</span>
              </li>
              <li>
                January 15 –{" "}
                <span className="text-[#008080]">Regular Decision</span>
              </li>
              <li>
                March 1 – <span className="text-[#008080]">All continuing</span>
              </li>
            </ul>
            <Link href={"/admission/scholarships"} className="mt-6 buttons btn-learn">
              Visit Financial Aid
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
