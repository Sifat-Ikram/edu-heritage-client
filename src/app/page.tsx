import AboutSection from "@/components/home page/AboutSection";
import AdmissionsCall from "@/components/home page/AdmissionsCall";
import Banner from "@/components/home page/Banner";
import CampusLife from "@/components/home page/CampusLife";
import FeaturedPrograms from "@/components/home page/FeaturedPrograms";
import { Academics } from "@/types/academics";

export default function Home() {
  const programs: Academics[] = [
    {
      id: 1,
      title: "Undergraduate Programs",
      description:
        "Build foundational skills and explore your passions across various fields.",
      image1: "https://i.ibb.co/XkpnFsc6/Programming-in-Computer-Science.jpg",
      link: "/programs/undergraduate",
    },
    {
      id: 2,
      title: "Graduate Programs",
      description:
        "Advance your career and research potential with specialized degrees.",
      image1: "https://i.ibb.co/pBtzCkv1/img1.png",
      link: "/programs/graduate",
    },
    {
      id: 3,
      title: "Professional Studies",
      description:
        "Enhance practical knowledge with executive and industry-aligned programs.",
      image1:
        "https://i.ibb.co/6cSw9r3d/taylors-professional-studies-acca-fia-hero-banner-1920x1080.png",
      link: "/programs/professional",
    },
    {
      id: 4,
      title: "Engineering & Technology",
      description:
        "Explore applied sciences and real-world problem solving in tech.",
      image1: "https://i.ibb.co/3qkj8m4/banner-dep-1-1-9-1.png",
      link: "/programs/engineering",
    },
    {
      id: 5,
      title: "Health Sciences",
      description: "Study to innovate and improve health outcomes worldwide.",
      image1: "https://i.ibb.co/d4t0Xmqn/bmb.jpg",
      link: "/programs/health",
    },
    {
      id: 6,
      title: "Business & Economics",
      description: "Master economics, finance, and global business strategies.",
      image1: "https://i.ibb.co/rGdDZG43/buisness.jpg",
      link: "/programs/business-economics",
    },
    {
      id: 7,
      title: "Arts & Humanities",
      description:
        "Engage with culture, history, and creative expression across time and place.",
      image1: "https://i.ibb.co/Q7DKTKDg/students-study-computer-graphs.jpg",
      link: "/programs/arts-humanities",
    },
    {
      id: 8,
      title: "Environmental Studies",
      description:
        "Explore sustainability and environmental challenges facing the modern world.",
      image1: "https://i.ibb.co/qYfNnbqQ/What-does-undergraduate-mean-02.webp",
      link: "/programs/environmental-studies",
    },
    {
      id: 9,
      title: "Law & Policy",
      description:
        "Gain a deep understanding of legal systems and policy-making processes.",
      image1: "https://i.ibb.co/xqsfC3Yz/cq5dam-web-808-454.webp",
      link: "/programs/law-policy",
    },
    {
      id: 10,
      title: "Media & Communication",
      description:
        "Learn to shape stories and communicate effectively in the digital age.",
      image1: "https://i.ibb.co/3919TZgJ/images.jpg",
      link: "/programs/media-communication",
    },
    {
      id: 11,
      title: "Education",
      description:
        "Prepare to lead in classrooms and educational innovation environments.",
      image1: "https://i.ibb.co/C55xbK2w/bmb-2.jpg",
      link: "/programs/education",
    },
    {
      id: 12,
      title: "Psychology",
      description:
        "Understand human behavior and mental processes with scientific insight.",
      image1: "https://i.ibb.co/xSw61kw8/buiss-1-980.webp",
      link: "/programs/psychology",
    },
  ];

  return (
    <div className="flex flex-col space-y-20 dark:bg-[#161929]">
      <Banner />
      <AboutSection />
      <FeaturedPrograms programs={programs} />
      <AdmissionsCall />
      <CampusLife />
    </div>
  );
}
