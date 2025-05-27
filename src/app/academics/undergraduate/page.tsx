import ProgramCategorySection from "@/components/cards/academics/undergraduate/ProgramCategorySection";
import UndergraduateBanner from "@/components/cards/academics/undergraduate/UndergraduateBanner";

export default function UndergraduatePage() {
  return (
    <main className="bg-gray-50 dark:bg-[#161929] min-h-screen">
      <UndergraduateBanner />
      <section className="w-11/12 mx-auto py-10">
        <ProgramCategorySection />
      </section>
    </main>
  );
}
