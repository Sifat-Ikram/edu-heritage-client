"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={containerRef}
            className="relative w-full max-w-lg bg-white/60 dark:bg-[#161929] backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/30 dark:border-white/10"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute cursor-pointer top-3 right-3 text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 transition"
              aria-label="Close search overlay"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Title */}
            <h2 className="text-center text-xl font-semibold text-gray-800 dark:text-white mb-5">
              Search the site
            </h2>

            {/* Search Box */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for?"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm sm:text-base bg-white bg-opacity-90 dark:bg-[#1e2235] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#008080] dark:focus:ring-[#008080]"
              />
              <button className="w-full sm:w-auto bg-[#008080] dark:text-[#161929] dark:border-[2px] border-white dark:bg-white text-white px-5 py-2 rounded-md hover:bg-teal-700 dark:hover:bg-white dark:hover:text-[#161929] transition text-sm sm:text-base">
                Search
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
