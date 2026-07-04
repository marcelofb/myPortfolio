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

export const experience: ExperienceItem[] = [
  {
    company: "Santander Tecnología Argentina",
    url: "https://www.santander.com.ar",
    role: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    period: { es: "Nov 2021 — Presente", en: "Nov 2021 — Present" },
    description: {
      es: "Como Desarrollador Senior, inicié mi recorrido participando en el Hub Global, colaborando en proyectos para Brasil. Posteriormente, continué desarrollando soluciones para proyectos de Argentina, comenzando en el segmento Personales y evolucionando hacia el negocio Agro, donde actualmente me desempeño. A lo largo de este recorrido he trabajado junto a equipos multidisciplinarios, contribuyendo al desarrollo, mantenimiento y evolución de aplicaciones orientadas al negocio.",
      en: "As a Senior Developer, I started my journey participating in the Global Hub, collaborating on projects for Brazil. Later, I continued developing solutions for projects in Argentina, starting in the Personal segment and evolving towards the Agro business, where I currently work. Throughout this journey, I have worked alongside multidisciplinary teams, contributing to the development, maintenance, and evolution of business-oriented applications.",
    },
    tech: ["JS", "TypeScript", "React", "Node.js", "React Native", "Next.js"],
  },
  {
    company: "Flux IT",
    url: "https://www.fluxitsoft.com",
    role: { es: "Software Developer", en: "Software Developer" },
    period: { es: "Nov 2014 — Oct 2021", en: "Nov 2014 — Oct 2021" },
    description: {
      es: "Recorrí un camino de crecimiento profesional desde Desarrollador Junior hasta Desarrollador Senior, participando en proyectos de distinta escala y complejidad. Mi experiencia abarca desarrollo backend, varios años dedicados al desarrollo mobile y, en mi etapa más reciente, desarrollo de aplicaciones web. Trabajé en proyectos para clientes como Prisma, Naranja, GDM, OSDE y Galicia, aportando al diseño, desarrollo y mantenimiento de soluciones de software, siempre en colaboración con equipos multidisciplinarios y bajo metodologías ágiles.",
      en: "I have followed a professional growth path from Junior Developer to Senior Developer, participating in projects of varying scale and complexity. My experience spans backend development, several years dedicated to mobile development, and, in my most recent stage, web application development. I have worked on projects for clients such as Prisma, Naranja, GDM, OSDE, and Galicia, contributing to the design, development, and maintenance of software solutions, always in collaboration with multidisciplinary teams and under agile methodologies.",
    },
    tech: ["Java", "Ionic", "NativeScript", "React Native", "Flutter", "Angular", "React", "Node.js"],
  },
  {
    company: "MILLER BUILDING INTERNATIONAL",
    url: "https://www.millerbi.net",
    role: { es: "Software Developer", en: "Software Developer" },
    period: { es: "May 2012 — Nov 2014", en: "May 2012 — Nov 2014" },
    description: {
      es: "Inicié mi carrera profesional realizando las Prácticas Profesionales Supervisadas de la Universidad Tecnológica Nacional (UTN – Facultad Regional La Plata). Tras finalizar esa etapa, continué como pasante y posteriormente me incorporé de manera efectiva al equipo de desarrollo. Durante mi trayectoria participé en el análisis, diseño e implementación de soluciones orientadas a la automatización del proceso productivo de la empresa, contribuyendo a optimizar tareas, mejorar la eficiencia operativa y acompañar la transformación de procesos internos. Esta experiencia marcó el inicio de mi desarrollo profesional, permitiéndome adquirir una sólida base técnica y participar activamente en proyectos con impacto directo en el negocio.",
      en: "I began my professional career by completing the Supervised Professional Practices at the National Technological University (UTN – La Plata Regional Faculty). After completing that stage, I continued as an intern and later joined the development team effectively. During my career, I participated in the analysis, design, and implementation of solutions aimed at automating the company's production process, contributing to optimizing tasks, improving operational efficiency, and supporting the transformation of internal processes. This experience marked the beginning of my professional development, allowing me to acquire a solid technical foundation and actively participate in projects with a direct impact on the business.",
    },
    tech: ["Java"],
  },
];
