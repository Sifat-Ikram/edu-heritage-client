import AdmissionRequirement from "@/components/cards/academics/undergraduate/details/AdmissionRequirement";
import ApplyNowBanner from "@/components/cards/academics/undergraduate/details/ApplyNowBanner";
import CareerOpportunities from "@/components/cards/academics/undergraduate/details/CareerOpportunities";
import CurriculumSection from "@/components/cards/academics/undergraduate/details/CurriculumSection";
import FacultySection from "@/components/cards/academics/undergraduate/details/FacultySection";
import FinancialAidSection from "@/components/cards/academics/undergraduate/details/FinancialAidSection";
import ProgramDescription from "@/components/cards/academics/undergraduate/details/ProgramDescription";
import ProgramHeader from "@/components/cards/academics/undergraduate/details/ProgramHeader";
import ProgramOverview from "@/components/cards/academics/undergraduate/details/ProgramOverview";
import { undergraduatePrograms } from "@/components/data/undergraduate";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

async function getProgramById(
  id: number
): Promise<UndergraduatePrograms | undefined> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 100)); // remove when real fetch used
  return undergraduatePrograms.find((program) => program.id === id);
}

export default async function ProgramDetailsPage({ params }: Params) {
  const programId = parseInt(params.id, 10);

  if (isNaN(programId)) return notFound();

  const program = await getProgramById(programId);

  if (!program) return notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-[#161929] text-gray-800 dark:text-white">
      <ProgramHeader program={program} />
      <div className="max-md:mt-10 md:relative">
        <ProgramOverview program={program} />
      </div>
      <div className="w-11/12 mx-auto py-10 flex flex-col space-y-8 sm:space-y-14 lg:space-y-20 2xl:space-y-40">
        <ProgramDescription details={program.details} />
        <AdmissionRequirement />
        <CurriculumSection />
        <FacultySection />
        <CareerOpportunities />
        <FinancialAidSection />
        <ApplyNowBanner />
      </div>
    </main>
  );
}
