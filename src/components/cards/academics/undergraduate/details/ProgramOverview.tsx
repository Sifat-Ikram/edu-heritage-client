import { UndergraduateProgram } from "@/types/academics";
import { FaClock, FaMoneyBill, FaUsers, FaGraduationCap } from "react-icons/fa";

export default function ProgramOverview({
  program,
}: {
  program: UndergraduateProgram;
}) {
  return (
    <section className="static md:absolute -top-14 w-11/12 mx-auto flex justify-center z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-4/5 mx-auto">
        <OverviewItem icon={<FaClock className="text-lg sm:text-2xl xl:text-3xl 2xl:text-5xl" />} label="Duration" value="4 Years" />
        <OverviewItem
          icon={<FaMoneyBill className="text-lg sm:text-2xl xl:text-3xl 2xl:text-5xl" />}
          label="Tuition"
          value="$7,200/year"
        />
        <OverviewItem icon={<FaUsers className="text-lg sm:text-2xl xl:text-3xl 2xl:text-5xl" />} label="Enrolled" value="1,450+" />
        <OverviewItem
          icon={<FaGraduationCap className="text-lg sm:text-2xl xl:text-3xl 2xl:text-5xl" />}
          label="Degree"
          value="Bachelor’s"
        />
      </div>
    </section>
  );
}

function OverviewItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-evenly items-center space-y-2 sm:space-x-4 p-2 sm:p-4 md:p-6 bg-teal-700 dark:bg-white rounded-lg">
      <div className="text-white paragraph-text dark:text-gray-800 flex justify-center items-center">
        {icon}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-sm 2xl:text-xl font-medium dark:text-gray-800 text-white">{label}</h4>
        <p className="text-lg 2xl:text-lg font-bold dark:text-gray-800 text-white">{value}</p>
      </div>
    </div>
  );
}
