export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}
