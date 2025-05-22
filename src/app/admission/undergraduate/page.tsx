"use client";

import AdmissionLayout from "@/components/admission/AdmissionLayout";
import DepartmentsSection from "@/components/admission/DepartmentsSection";
import FAQSection from "@/components/admission/FAQSection";
import FeesSection from "@/components/admission/FeesSection";
import HowToApplySection from "@/components/admission/HowToApplySection";
import ImportantDatesSection from "@/components/admission/ImportantDatesSection";
import IntroSection from "@/components/admission/IntroSection";
import RequirementsSection from "@/components/admission/RequirementsSection";
import ScholarshipsSection from "@/components/admission/ScholarshipsSection";
import TestDetailsSection from "@/components/admission/TestDetailsSection";


export default function UndergraduateAdmissionPage() {
  return (
    <AdmissionLayout>
      <IntroSection />
      <DepartmentsSection />
      <RequirementsSection />
      <HowToApplySection />
      <ImportantDatesSection />
      <FeesSection />
      <ScholarshipsSection />
      <TestDetailsSection />
      <FAQSection />
    </AdmissionLayout>
  );
}