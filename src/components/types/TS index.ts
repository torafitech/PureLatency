export interface Service {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon?: string;
}

export interface Metric {
  number: string;
  label: string;
}

export interface WhyUsItem {
  number: string;
  label: string;
  description: string;
}
export type ProcessStep = {
  step: number;
  duration: string;
  title: string;
  description: string;
  features: string[];
};
