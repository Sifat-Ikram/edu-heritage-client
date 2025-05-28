"use client";

export default function CurriculumSection() {
  const courses = [
    "Introduction to Programming",
    "Data Structures",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Machine Learning",
    "Capstone Project",
  ];

  return (
    <section>
      <h2 className="title-text dark:text-white text-teal-700 mb-4">
        Curriculum Overview
      </h2>
      <ul className="list-disc list-inside space-y-[10px] paragraph-text text-gray-700 dark:text-white">
        {courses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
    </section>
  );
}
