"use client";

import { undergraduatePrograms } from "@/components/data/undergraduate";
import { useState } from "react";
import UndergraduateSidebar from "./UndergraduateSidebar";
import ProgramCard from "./ProgramCard";

export default function ProgramCategorySection() {
  const categories = Array.from(
    new Set(undergraduatePrograms.map((p) => p.category))
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filtered = undergraduatePrograms.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <div className="flex flex-col dark:bg-[#161929] relative md:flex-row gap-8">
      <div className="w-full md:w-1/5 md:min-h-screen md:dark:border-r-[4px] border-solid border-white">
        <div className="hidden md:block md:min-h-screen">
          <UndergraduateSidebar
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <div className="block md:hidden w-full">
          <h1 className="mb-2 font-semibold text-lg dark:text-white">
            Select Category :
          </h1>
          <select
            className="w-full p-2 rounded border border-gray-300 dark:bg-white dark:text-gray-700"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 flex-1 pb-10">
        {filtered.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>
    </div>
  );
}
