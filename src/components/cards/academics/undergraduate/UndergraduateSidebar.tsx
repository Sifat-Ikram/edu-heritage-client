"use client";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function UndergraduateSidebar({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="w-4/5 mx-auto self-start block sticky top-20 z-10 pr-6 dark:bg-[#161929] space-y-6">
      <h2 className="text-xl font-semibold text-teal-800 dark:text-white mb-4">
        Categories
      </h2>
      <div className="flex flex-col space-y-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium 
          ${
            selected === cat
              ? "bg-teal-700 dark:bg-white dark:text-[#161929] text-white"
              : "hover:bg-teal-100 dark:hover:bg-white dark:text-white dark:hover:text-[#161929] text-gray-700"
          }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
