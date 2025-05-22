export interface FeeItem {
  label: string;
  amount: string;
}

export interface Scholarship {
  name: string;
  description: string;
}

export interface TestDetail {
  section: string;
  duration: string;
  topics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCardProps {
  question: string;
  answer: string;
}