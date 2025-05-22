"use client";

import { FAQItem } from "@/types/admission";
import { motion } from "framer-motion";
import FAQCard from "../cards/admission/FAQCard";

const faqs: FAQItem[] = [
  {
    question: "Can I apply to multiple programs?",
    answer:
      "Yes, you may apply to more than one program by submitting separate applications.",
  },
  {
    question: "What if I miss the deadline?",
    answer:
      "Late applications are not guaranteed review but may be considered for the next cycle.",
  },
  {
    question: "Is there an interview?",
    answer:
      "Some departments may require a virtual interview after the written test.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-10 px-4 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} whileHover={{ scale: 1.01 }}>
              <FAQCard question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
