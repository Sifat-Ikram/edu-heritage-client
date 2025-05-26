"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  target,
  isPercent = false,
}: {
  target: number;
  isPercent?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && count === 0) {
      let start = 0;
      const duration = 1200; // in ms
      const increment = target / (duration / 16);

      const step = () => {
        start += increment;
        if (start < target) {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      step();
    }
  }, [isInView, target, count]);

  return (
    <div ref={ref} className="text-[#008080] dark:text-white text-4xl md:text-5xl font-bold">
      {count}
      {isPercent ? "%" : ""}
    </div>
  );
}
