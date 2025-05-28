"use client";

import Image from "next/image";

interface FacultyMember {
  name: string;
  title: string;
  image: string;
}

const facultyMembers: FacultyMember[] = [
  {
    name: "Dr. Farhana Rahman",
    title: "Department Head",
    image: "/images/faculty1.jpg",
  },
  {
    name: "Dr. Imran Ahmed",
    title: "Professor",
    image: "/images/faculty2.jpg",
  },
  {
    name: "Dr. Sabina Haque",
    title: "Associate Professor",
    image: "/images/faculty3.jpg",
  },
  {
    name: "Dr. Arif Hossain",
    title: "Assistant Professor",
    image: "/images/faculty4.jpg",
  },
];

export default function FacultySection() {
  return (
    <section>
      <h2 className="title-text font-bold text-teal-700 dark:text-white mb-4">
        Faculty Members
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {facultyMembers.map((member, idx) => (
          <div
            key={idx}
            className="border border-teal-200 dark:border-white p-4 rounded shadow bg-white dark:bg-[#161929]"
          >
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="w-20 h-20 object-cover rounded-full mx-auto mb-3"
            />
            <h3 className="paragraph-text font-semibold text-teal-800 dark:text-white">
              {member.name}
            </h3>
            <p className="paragraph-text text-gray-600 dark:text-gray-300">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
