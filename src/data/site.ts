/*
  Configuración central del sitio.
  Todos los componentes importan de acá — cambiás un valor acá y
  se actualiza en todo el sitio automáticamente.
*/
export const site = {
  name: "Marcelo Burriel",           // ← tu nombre completo
  initials: "MB",              // ← para el logo del nav y avatar
  email: "marceloburriel@gmail.com", // ← tu email de contacto
  github: "https://github.com/marcelofb",
  linkedin: "https://www.linkedin.com/in/marcelo-burriel-0067b949/",
  cv: "/cv.pdf",               // ← archivo en public/cv.pdf
  role: {
    es: "Software Engineer",
    en: "Software Engineer",
  },
} as const;
