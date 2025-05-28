"use client";

export default function FinancialAidSection() {
  const aids = [
    {
      title: "Merit-based Scholarships",
      desc: "Awarded to high-performing students.",
    },
    {
      title: "Need-based Grants",
      desc: "Based on family income and financial situation.",
    },
    {
      title: "Work-Study Opportunities",
      desc: "Part-time campus jobs for students.",
    },
  ];

  return (
    <section>
      <h2 className="title-text dark:text-white font-bold text-teal-700 mb-4">
        Financial Aid Options
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {aids.map((aid, idx) => (
          <div
            key={idx}
            className="border border-teal-200 dark:border-white p-4 rounded shadow bg-white dark:bg-[#161929]"
          >
            <h3 className="text-teal-800 paragraph-text font-semibold dark:text-white mb-1">
              {aid.title}
            </h3>
            <p className=" paragraph-text text-gray-600 dark:text-gray-300">
              {aid.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
