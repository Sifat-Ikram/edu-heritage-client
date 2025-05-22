import { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaClipboardCheck,
  FaHandHoldingUsd,
  FaUniversity,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";

interface InfoItem {
  title?: string;
  description?: string;
  question?: string;
  answer?: string;
  icon: IconType;
}

export const applyPageContent = {
  header: {
    title: "Apply to SUST Today!",
    subtitle:
      "Begin your academic journey at Shahjalal University of Science and Technology.",
  },
  requirements: {
    title: "Eligibility Requirements",
    items: [
      {
        title: "Minimum GPA",
        description: "Applicants must have a GPA of 4.0 in SSC and HSC.",
        icon: FaGraduationCap,
      },
      {
        title: "English Proficiency",
        description: "TOEFL/IELTS required for international programs.",
        icon: FaClipboardCheck,
      },
    ] as InfoItem[],
  },
  scholarships: {
    title: "Scholarships & Financial Aid",
    items: [
      {
        title: "Merit Scholarships",
        description: "Top 10% of applicants receive full tuition waiver.",
        icon: FaHandHoldingUsd,
      },
      {
        title: "Need-Based Aid",
        description:
          "Financial support for students with low-income background.",
        icon: FaUniversity,
      },
    ] as InfoItem[],
  },
  deadlines: {
    title: "Important Deadlines",
    items: [
      {
        title: "Application Opens",
        description: "June 1, 2025",
        icon: FaClock,
      },
      {
        title: "Final Submission",
        description: "August 15, 2025",
        icon: FaClock,
      },
    ] as InfoItem[],
  },
  visits: {
    title: "Plan a Campus Visit",
    items: [
      {
        title: "In-person Tours",
        description: "Book guided tours and experience campus life.",
        icon: FaUniversity,
      },
      {
        title: "Virtual Tours",
        description: "Explore the campus from home through our virtual tour.",
        icon: FaUniversity,
      },
    ] as InfoItem[],
  },
  faqs: {
    title: "Application FAQs",
    items: [
      {
        question: "How do I apply?",
        answer: "You can apply online through our admissions portal.",
        icon: FaQuestionCircle,
      },
      {
        question: "What documents are required?",
        answer: "You’ll need transcripts, certificates, and ID documents.",
        icon: FaQuestionCircle,
      },
    ] as InfoItem[],
  },
};
