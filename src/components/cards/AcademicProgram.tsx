import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Academics } from "@/types/academics";

interface ProgramCardProps {
  program: Academics;
}

export default function AcademicProgram({ program }: ProgramCardProps) {
  return (
    <div className="h-[180px] sm:h-[350px] md:h-[280px] lg:h-[430px]">
      <Link
        href={program.link}
        className="relative group flex-1 rounded-xl overflow-hidden bg-neutral-900"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full relative"
            >
              <Image
                src={program.image1}
                alt={program.title}
                fill
                sizes="100%"
                priority
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Dark overlay (uniform across light/dark) */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-500 z-10" />
        </div>

        {/* Bottom Text Section */}
        <div className="relative z-20 p-4 sm:p-6 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white">
          <h3 className="text-sm sm:text-lg md:text-base lg:text-xl font-semibold mb-1">
            {program.title}
          </h3>
          <p className="text-[8px] sm:text-sm md:text-xs lg:text-sm text-gray-200">
            {program.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
