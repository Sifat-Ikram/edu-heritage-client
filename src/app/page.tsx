import AboutSection from "@/components/home page/AboutSection";
import AdmissionsCall from "@/components/home page/AdmissionsCall";
import Banner from "@/components/home page/Banner";
import CampusLife from "@/components/home page/CampusLife";
import FeaturedPrograms from "@/components/home page/FeaturedPrograms";
import FindUs from "@/components/home page/FindUs";
import QuestionAnswer from "@/components/home page/QuestionAnswer";
import ResearchProjects from "@/components/home page/ResearchProjects";
import TestimonialCarousel from "@/components/home page/TestimonialCarousel";
import UpcomingEvents from "@/components/home page/UpcomingEvents";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-100 dark:bg-[#161929]">
      <Banner />
      <div className="flex flex-col space-y-20 lg:space-y-28 xl:space-y-40">
        <AboutSection />
        <FeaturedPrograms />
        <AdmissionsCall />
        <UpcomingEvents />
        <CampusLife />
        <ResearchProjects />
        <TestimonialCarousel />
        <FindUs />
        <QuestionAnswer />
      </div>
    </main>
  );
}
