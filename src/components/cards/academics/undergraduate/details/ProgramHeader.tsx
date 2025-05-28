import { UndergraduateProgram } from "@/types/academics";
import Image from "next/image";

export default function ProgramHeader({
  program,
}: {
  program: UndergraduateProgram;
}) {
  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <Image
        src={program.image}
        alt={program.title}
        fill
        className="object-cover brightness-[0.5]"
      />
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="title-text font-bold mb-2">{program.title}</h1>
        <p className="paragraph-text">{program.description}</p>
      </div>
    </div>
  );
}
