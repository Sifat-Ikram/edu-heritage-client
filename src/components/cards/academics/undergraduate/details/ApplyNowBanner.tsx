"use client";

import Link from "next/link";

export default function ApplyNowBanner() {
  return (
    <section className="bg-teal-700 dark:bg-[#161929] dark:border-[2px] border-white text-white px-6 py-10 rounded-lg text-center shadow-md">
      <h2 className="text-2xl font-bold mb-2">Ready to Join Our Program?</h2>
      <p className="mb-4">
        Start your application today and take the first step toward your future.
      </p>
      <Link href="/apply">
        <button className="buttons btn-apply transition">
          Apply Now
        </button>
      </Link>
    </section>
  );
}
