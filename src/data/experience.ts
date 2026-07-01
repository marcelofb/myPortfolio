/*
  interface = contrato TypeScript.
  Define los campos obligatorios y opcionales de cada item de experiencia.
  Si creás un item que no cumple esta forma, TypeScript te avisa con error.
*/
export interface ExperienceItem {
  company: string;
  url?: string;                          // ? = campo opcional
  role: { es: string; en: string };      // bilingüe
  period: { es: string; en: string };    // bilingüe
  description: { es: string; en: string };
  tech: string[];
}

// Reemplazá con tu historial laboral real
export const experience: ExperienceItem[] = [
  {
    company: "Empresa Actual S.A.",
    url: "https://empresa.com",
    role: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    period: { es: "Ene 2023 — Presente", en: "Jan 2023 — Present" },
    description: {
      es: "Lideré el desarrollo de la plataforma principal, mejorando el rendimiento en un 40%. Participé en decisiones de arquitectura y mentoría de desarrolladores junior.",
      en: "Led development of the main platform, improving performance by 40%. Participated in architecture decisions and mentored junior developers.",
    },
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Startup XYZ",
    role: { es: "Software Engineer", en: "Software Engineer" },
    period: { es: "Mar 2021 — Dic 2022", en: "Mar 2021 — Dec 2022" },
    description: {
      es: "Desarrollé funcionalidades clave del producto desde cero. Migré el monolito a microservicios, reduciendo el tiempo de deploy a la mitad.",
      en: "Built key product features from scratch. Migrated the monolith to microservices, cutting deploy time in half.",
    },
    tech: ["JavaScript", "Vue.js", "Express", "MongoDB", "Docker"],
  },
  {
    company: "Agencia Digital ABC",
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    period: { es: "Jun 2019 — Feb 2021", en: "Jun 2019 — Feb 2021" },
    description: {
      es: "Primer rol profesional. Desarrollé aplicaciones web para clientes de distintas industrias y construí bases sólidas en frontend y backend.",
      en: "First professional role. Built web applications for clients across different industries and developed strong foundations in frontend and backend.",
    },
    tech: ["JavaScript", "React", "PHP", "MySQL"],
  },
];
