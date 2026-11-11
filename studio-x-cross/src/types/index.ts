export type ProjectCategory = 
  | 'All'
  | 'Residential Interiors'
  | 'Living Spaces'
  | 'Modular Kitchens'
  | 'Bedroom Interiors'
  | 'Commercial Spaces';

export interface MaterialFinishing {
  name: string;
  category: string;
  colorCode: string;
  textureNote: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  location: string;
  year: string;
  area: string;
  timeline: string;
  heroImage: string;
  coverImage: string;
  thumbnail: string;
  excerpt: string;
  overview: string;
  designConcept: string;
  spatialFeatures: string[];
  materialsPalette: MaterialFinishing[];
  gallery: {
    url: string;
    caption: string;
    aspectRatio?: 'landscape' | 'portrait' | 'wide';
  }[];
  isFeatured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  materialsFocus: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientInitials: string;
  residenceType: string;
  location: string;
  completionYear: string;
  isDemoNotice: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  approxBudget: string;
  location: string;
  message: string;
  timeline: string;
}
