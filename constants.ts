import { ExperienceItem, EducationItem, SkillCategory, ContactInfo } from './types';
import { Code, Database, Smartphone, Layout, Server, GitBranch } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Quonain Ejaz",
  role: "React.js | Next.js | React Native Developer",
  tagline: "Building dynamic, high-performing web and mobile applications with clean code.",
  about: "I am a dedicated React.js, Next.js, and React Native developer with 1.5 years of professional experience in building scalable front-end solutions. I have a passion for creating responsive, modular UI components and optimizing performance. With a background in backend technologies like Node.js and MongoDB, I bring a full-stack perspective to every project.",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+92 348 2449429",
  email: "quonainejaz123@gmail.com",
  location: "Lahore, Pakistan (Open to Remote Roles)",
  linkedin: "https://linkedin.com/in/quonain-khan-545084151"
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: "React.js / Next.js Developer",
    company: "Appliconsoft",
    period: "Present", 
    description: "Focusing on developing and maintaining scalable, high-performance web applications.",
    achievements: [
      "Built responsive, modular UI components using React.js and Next.js.",
      "Implemented dynamic routing, API integrations, and Server-Side Rendering (SSR).",
      "Enhanced app performance and SEO through reusable component architecture.",
      "Collaborated with backend teams to integrate Node.js and MongoDB features."
    ]
  },
  {
    id: 2,
    role: "React Native Developer",
    company: "Whetstonez Technologies",
    period: "Intern -> Junior Developer",
    description: "Developed and maintained mobile applications for startups and SMEs.",
    achievements: [
      "Developed 3+ React Native mobile applications ensuring smooth performance on Android & iOS.",
      "Integrated RESTful APIs, Firebase, and libraries like Axios and React Navigation.",
      "Improved app speed and stability by 20% through optimized state management (Redux).",
      "Participated in Agile sprints for timely feature delivery and debugging."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Punjab University",
    year: "Graduated"
  },
  {
    id: 2,
    degree: "Cloud Computing Certification",
    institution: "Corvit System",
    year: "Oct 2024"
  },
  {
    id: 3,
    degree: "Fundamentals of Web Development",
    institution: "Bano Qabil Lahore",
    year: "June 2024"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind"],
    icon: "Layout"
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "MongoDB", "Firebase", "RESTful APIs"],
    icon: "Database"
  },
  {
    title: "State Management & Logic",
    skills: ["Redux", "JavaScript (ES6+)", "TypeScript", "Context API"],
    icon: "Code"
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "Agile Development", "UI/UX Optimization", "SEO"],
    icon: "GitBranch"
  }
];
