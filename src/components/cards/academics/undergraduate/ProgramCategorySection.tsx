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
      <div className="hidden md:block">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 flex-1">
        {filtered.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>
    </div>
  );
}
