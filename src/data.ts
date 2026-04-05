export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  image?: string;
}

export interface SkillItem {
  id: number;
  name: string;
  category: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Basketball Competition Participant",
    company: "SMAN Puri 1 Mojokerto",
    period: "2025",
    description: "Actively participated in regional basketball competitions, demonstrating strong teamwork, physical endurance, and sportsmanship. Represented the school with pride and dedication.",
    image: "/basket_exp.jpeg"
  }
];

export const skills: SkillItem[] = [
  { id: 1, name: "React", category: "Frontend" },
  { id: 2, name: "Tailwind CSS", category: "Styling" },
  { id: 3, name: "Framer Motion", category: "Animation" },
  { id: 4, name: "TypeScript", category: "Language" },
  { id: 5, name: "UI/UX Design", category: "Design" },
  { id: 6, name: "Teamwork", category: "Soft Skill" },
  { id: 7, name: "Communication", category: "Soft Skill" },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Coquette Aesthetic Portfolio",
    description: "A personal branding website with a soft feminine aesthetic.",
    image: "/project_portfolio.jpg",
    tags: ["React", "Tailwind", "Static"],
    link: "#"
  },
  {
    id: 2,
    title: "DIY Bracelets & Phone Straps",
    description: "A creative business venture selling handmade aesthetic accessories.",
    image: "/project_diy.jpeg",
    tags: ["Creative", "Business", "Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Basketball Team Dashboard",
    description: "A tracking system for school basketball team performance.",
    image: "/project_basketball.jpeg",
    tags: ["React", "Framer Motion"],
    link: "#"
  }
];
