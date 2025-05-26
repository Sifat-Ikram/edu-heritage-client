import { IconType } from "react-icons";

export interface OverviewFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TuitionFeeItem {
  label: string;
  semester: string;
  annual: string;
}

export interface ProgramFees {
  title: string;
  fees: TuitionFeeItem[];
  icon: IconType;
}
