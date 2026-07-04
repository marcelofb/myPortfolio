export interface Project {
  title: string;
  description: { es: string; en: string };
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Event Scheduler",
    description: {
      es: "PWA mobile-first para agendar y gestionar eventos, con recordatorios diarios y resúmenes semanales automáticos vía bot de Telegram.",
      en: "Mobile-first PWA to schedule and manage events, with automated daily reminders and weekly summaries via a Telegram bot.",
    },
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Telegram Bot API"],
    github: "https://github.com/marcelofb/eventScheduler",
  },
  {
    title: "Telegram Message Forwarder",
    description: {
      es: "Bot que monitorea un grupo de Telegram y reenvía en tiempo real los mensajes de un usuario específico a otro chat, incluyendo el contexto de los hilos.",
      en: "Bot that monitors a Telegram group and forwards in real time the messages of a specific user to another chat, including thread context.",
    },
    tech: ["Node.js", "Telegram MTProto", "GramJS", "Axios"],
    github: "https://github.com/marcelofb/botFilterMessagesGroupTelegram",
  },
];
