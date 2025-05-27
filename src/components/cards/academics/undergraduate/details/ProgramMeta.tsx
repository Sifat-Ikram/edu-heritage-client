import { FaClock, FaMoneyBill, FaUsers } from "react-icons/fa";
import { UndergraduateProgram } from "@/types/academics";

export default function ProgramMeta({
  program,
}: {
  program: UndergraduateProgram;
}) {
  return (
    <div className="grid gap-4 text-lg mb-10">
      <div className="flex items-center gap-3">
        <FaClock className="text-teal-600" />
        <span>
          <strong>Duration:</strong> 4 Years
        </span>
      </div>
      <div className="flex items-center gap-3">
        <FaMoneyBill className="text-teal-600" />
        <span>
          <strong>Tuition Fee:</strong> $7,200 / Year
        </span>
      </div>
      <div className="flex items-center gap-3">
        <FaUsers className="text-teal-600" />
        <span>
          <strong>Enrolled Students:</strong> 1,450+
        </span>
      </div>

      <button className="mt-4 w-fit bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
        Apply for Financial Aid
      </button>
    </div>
  );
}
