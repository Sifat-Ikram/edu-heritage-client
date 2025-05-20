"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    id: 1,
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our official admission portal. Ensure all required documents are prepared before starting the application.",
  },
  {
    id: 2,
    question: "Are there any scholarships available?",
    answer:
      "Yes, we offer several scholarships including merit-based, need-based, and special category awards for eligible students.",
  },
  {
    id: 3,
    question: "Is on-campus housing available?",
    answer:
      "Yes, we provide separate hostels for male and female students with modern facilities, security, and a supportive living environment.",
  },
  {
    id: 4,
    question: "What programs do you offer?",
    answer:
      "We offer a range of undergraduate and postgraduate programs in fields like science, engineering, business, social sciences, and arts.",
  },
  {
    id: 5,
    question: "How can I contact the admissions office?",
    answer:
      "You can reach our admissions team via email at admissions@university.edu or call +880-1234-567890 during business hours.",
  },
];

export default function QuestionAnswer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-11/12 mx-auto dark:bg-[#161929]">
      <h2 className="title-text text-center dark:text-white mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex items-center gap-8">
        {/* Left-side image for desktop/tablet */}
        <div className="hidden md:block w-1/2">
          <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://i.ibb.co/LXG43X5z/Library.jpg"
              alt="FAQ Illustration"
              width={480}
              height={300}
              className="rounded-lg object-cover w-full md:h-[333px] lg:h-[350px] xl:h-[600px]"
            />
          </div>
        </div>

        {/* FAQ section */}
        <div className="space-y-3.5 lg:space-y-4 xl:space-y-6 w-full md:flex-1">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-[#161929] border border-[#008080]/30 dark:border-white rounded-xl shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex justify-between items-center p-3 lg:p-3 xl:p-5 text-left font-medium text-[#008080] dark:text-white paragraph-text"
              >
                <span>{faq.question}</span>
                {activeIndex === faq.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === faq.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-700 dark:text-white paragraph-text leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
