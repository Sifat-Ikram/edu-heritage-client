"use client";

export default function AdmissionRequirement() {
  const requirements = [
    "Completed application form",
    "Official high school transcripts",
    "Minimum GPA of 3.0",
    "Standardized test scores (SAT/ACT)",
    "English proficiency (IELTS/TOEFL)",
    "Statement of purpose",
    "Letters of recommendation",
  ];

  return (
    <section>
      <h2 className="title-text dark:text-white text-teal-700 mb-4">
        Admission Requirements
      </h2>
      <ul className="list-disc list-inside paragraph-text space-y-2 text-gray-700 dark:text-white">
        {requirements.map((req, idx) => (
          <li key={idx}>{req}</li>
        ))}
      </ul>
    </section>
  );
}
