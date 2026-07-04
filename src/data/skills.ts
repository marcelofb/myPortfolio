export interface SkillGroup {
  category: { es: string; en: string };
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: ["JavaScript", "TypeScript", "SQL", "Java"],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "React Native", "Angular", "Astro", "Vite", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: { es: "Herramientas & Cloud", en: "Tools & Cloud" },
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Jest"],
  },
];
