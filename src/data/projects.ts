export interface Project {
  title: string;
  description: { es: string; en: string };
  tech: string[];
  github?: string;
  demo?: string;
}

// Reemplazá con tus proyectos reales
export const projects: Project[] = [
  {
    title: "Proyecto Alpha",
    description: {
      es: "Aplicación web para gestión de tareas en equipo con actualizaciones en tiempo real, notificaciones y permisos por rol.",
      en: "Web application for team task management with real-time updates, notifications and role-based permissions.",
    },
    tech: ["TypeScript", "React", "Socket.io", "Node.js", "PostgreSQL"],
    github: "https://github.com/tu-usuario/proyecto-alpha",
    demo: "https://proyecto-alpha.vercel.app",
  },
  {
    title: "CLI Tool Beta",
    description: {
      es: "Herramienta de línea de comandos para automatizar flujos de trabajo de desarrollo. Más de 500 descargas en npm.",
      en: "Command-line tool to automate development workflows. Over 500 npm downloads.",
    },
    tech: ["Node.js", "TypeScript", "Commander.js"],
    github: "https://github.com/tu-usuario/cli-tool-beta",
  },
  {
    title: "API REST Gamma",
    description: {
      es: "API REST con autenticación JWT, rate limiting, documentación automática con Swagger y tests de integración.",
      en: "REST API with JWT authentication, rate limiting, automatic Swagger docs and integration tests.",
    },
    tech: ["Node.js", "Express", "TypeScript", "Jest", "MongoDB"],
    github: "https://github.com/tu-usuario/api-gamma",
  },
];
