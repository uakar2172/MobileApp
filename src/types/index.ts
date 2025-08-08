export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  profileImage?: string;
  about: string;
  projects: Project[];
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  contact: Contact;
  viewCount: number;
  likeCount: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
}

export interface Contact {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Theme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
}

export interface Language {
  code: 'tr' | 'en';
  name: string;
}

export interface AppSettings {
  theme: Theme;
  language: Language;
}
