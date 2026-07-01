export interface SkillGroup {
  category: { es: string; en: string };
  items: string[];
}

// Reemplazá con tus skills reales
export const skills: SkillGroup[] = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    items: ["React", "Vue.js", "Astro", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
  },
  {
    category: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    category: { es: "Herramientas & Cloud", en: "Tools & Cloud" },
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Jest"],
  },
];
