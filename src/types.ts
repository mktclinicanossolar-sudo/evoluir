export interface ClinicInfo {
  name: string;
  tagline: string;
  city: string;
  state: string;
  instagram: string;
  instagramUrl: string;
  phonePlaceholder: string;
  whatsappPlaceholder: string;
  addressPlaceholder: string;
  isAddressConfirmed: boolean;
  isPhoneConfirmed: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'users' | 'activity' | 'sparkles' | 'puzzle' | 'brain' | 'heart' | 'bookOpen';
  confirmed: boolean;
  accentColor: string; // brand token
}

export interface DevelopmentTopic {
  id: string;
  title: string;
  description: string;
  examples: string[];
  accentColor: string;
}

export interface CareStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  registration?: string;
  bioSummary: string;
  isConfirmedSignage: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CMSImage {
  key: string;
  label: string;
  section: string;
  fallbackSrc: string;
  alt: string;
  objectPositionDesktop: string;
  objectPositionMobile: string;
  customSrc?: string;
  updatedAt?: string;
}
