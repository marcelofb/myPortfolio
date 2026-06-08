export const es = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Skills",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Tu Nombre",
    role: "Software Engineer",
    bio: "Desarrollador con varios años de experiencia construyendo productos web. Apasionado por el código limpio, la buena arquitectura y las tecnologías modernas.",
    cta_cv: "Descargar CV",
    cta_contact: "Contacto",
    available: "Disponible para proyectos",
  },
  experience: {
    title: "Experiencia",
    present: "Presente",
  },
  projects: {
    title: "Proyectos",
    view_code: "Ver código",
    view_demo: "Ver demo",
  },
  skills: {
    title: "Skills",
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tenés un proyecto en mente o querés charlar? Escribime.",
    email_label: "Email",
    copy_tooltip: "Copiar email",
    copied: "¡Copiado!",
  },
  footer: {
    built_with: "Hecho con",
    and: "y",
    source: "Ver código fuente",
  },
} as const;

export type TranslationKey = typeof es;
