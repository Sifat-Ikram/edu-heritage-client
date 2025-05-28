"use client";

export default function CareerOpportunities() {
  const careers = [
    "Software Engineer",
    "AI Researcher",
    "Cybersecurity Analyst",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "Technical Consultant",
  ];

  return (
    <section>
      <h2 className="title-text dark:text-white text-teal-700 mb-4">
        Career Opportunities
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {careers.map((career, idx) => (
          <div
            key={idx}
            className="bg-teal-100 dark:bg-white text-teal-800 dark:text-gray-800 rounded-full px-4 py-2 paragraph-text text-center"
          >
            {career}
          </div>
        ))}
      </div>
    </section>
  );
}
