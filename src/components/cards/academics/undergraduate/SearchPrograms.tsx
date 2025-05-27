"use client";

import { undergraduatePrograms } from "@/components/data/undergraduate";
import { UndergraduateProgram } from "@/types/academics";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (results: UndergraduateProgram[]) => void;
}

const SearchPrograms: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const results = undergraduatePrograms.filter((program) =>
        program.title.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(results);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-10 px-4 md:px-16">
      <div className="flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search programs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-teal-600 text-white rounded flex items-center gap-2"
        >
          <FaSearch />
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchPrograms;
