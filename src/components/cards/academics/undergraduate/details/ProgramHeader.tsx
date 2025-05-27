import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { UndergraduateProgram } from "@/types/academics";

export default function ProgramHeader({
  program,
}: {
  program: UndergraduateProgram;
}) {
  return (
    <>
      <Link
        href="/academics/undergraduate"
        className="text-teal-700 flex items-center gap-2 mb-6 hover:underline"
      >
        <FaArrowLeft />
        Back to Programs
      </Link>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <Image
          src={program.image}
          alt={program.title}
          width={800}
          height={600}
          className="rounded-lg w-full object-cover shadow-md"
        />
        <div>
          <h1 className="text-4xl font-bold text-teal-700 mb-2">
            {program.title}
          </h1>
          <p className="text-lg">{program.description}</p>
          <p className="mt-2 text-sm text-teal-600 font-semibold uppercase tracking-wider">
            {program.category}
          </p>
        </div>
      </div>
    </>
  );
}
