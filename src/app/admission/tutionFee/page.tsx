"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProgramFees, TuitionFeeItem } from "@/types/admission";
import TuitionAccordion from "@/components/cards/admission/TuitionAccordion";
import { FaBriefcase, FaBuilding, FaLaptopCode, FaLeaf, FaPaintbrush } from "react-icons/fa6";
import { FaBroadcastTower, FaChalkboardTeacher, FaCogs, FaHeartbeat } from "react-icons/fa";

const domesticFees: TuitionFeeItem[] = [
  { label: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
  { label: "Enrollment Fee", semester: "$1,860", annual: "$8,860" },
];

const internationalFees: TuitionFeeItem[] = [
  { label: "Tuition Fees", semester: "$4,860", annual: "$14,860" },
  { label: "Related Costs", semester: "$2,400", annual: "$4,600" },
  { label: "Insurance", semester: "$860", annual: "$1,260" },
  { label: "Enrolment Fee", semester: "$200", annual: "$800" },
];

const programData: ProgramFees[] = [
  {
    title: "Management",
    fees: domesticFees,
    icon: FaBriefcase,
  },
  {
    title: "Business & Administration",
    fees: internationalFees,
    icon: FaBuilding,
  },
  {
    title: "Computer Science & A.I.",
    fees: domesticFees,
    icon: FaLaptopCode,
  },
  {
    title: "Art & Design",
    fees: internationalFees,
    icon: FaPaintbrush,
  },
  {
    title: "Engineering & Technology",
    fees: domesticFees,
    icon: FaCogs,
  },
  {
    title: "Health Sciences",
    fees: internationalFees,
    icon: FaHeartbeat,
  },
  {
    title: "Education & Teaching",
    fees: domesticFees,
    icon: FaChalkboardTeacher,
  },
  {
    title: "Media & Communication",
    fees: internationalFees,
    icon: FaBroadcastTower,
  },
  {
    title: "Environmental Studies",
    fees: domesticFees,
    icon: FaLeaf,
  },
];

export default function TuitionFeePage() {
  return (
    <main className="bg-white dark:bg-[#161929] text-gray-800 dark:text-white">
      {/* Banner */}
      <section className="relative h-[320px] md:h-[400px] flex items-center justify-center">
        <Image
          src="https://i.ibb.co/mSh7K0W/banner.jpg"
          alt="Tuition Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.h1
          className="relative z-10 text-white text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tuition & Fees
        </motion.h1>
      </section>

      {/* Tables */}
      <section className="w-11/12 py-12 max-w-6xl mx-auto space-y-10">
        <TuitionAccordion programs={programData} />
      </section>
    </main>
  );
}
