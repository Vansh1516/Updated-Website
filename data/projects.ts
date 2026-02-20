
import { Project } from '../types';

export interface LocalizedProject extends Omit<Project, 'description'> {
  description: {
    en: string;
    de: string;
    fr: string;
  };
}

export const projects: LocalizedProject[] = [
  {
    title: "Home Lab",
    description: {
      en: "A personal portfolio hosted on a home server, featuring an automated CI/CD pipeline using GitHub Actions and self-hosted runners.",
      de: "Ein persönliches Portfolio, das auf einem Heimserver gehostet wird, mit einer automatisierten CI/CD-Pipeline unter Verwendung von GitHub Actions und selbstgehosteten Runnern.",
      fr: "Un portfolio personnel hébergé sur un serveur domestique, doté d'un pipeline CI/CD automatisé utilisant GitHub Actions et des runners auto-hébergés."
    },
    tech: ["Astro", "Nginx", "Linux", "GitHub Actions", "CI/CD"],
    link: "https://github.com/Vansh1516/projectX",
  },
  {
    title: "BotBro: Sarcastic AI Agent",
    description: {
      en: "An intelligent Telegram bot that manages flat cleaning schedules, sets automated reminders, and performs web searches using a ReAct agent architecture.",
      de: "Ein intelligenter Telegram-Bot, der Reinigungspläne für WGs verwaltet, automatisierte Erinnerungen setzt und Websuchen mit einer ReAct-Agent-Architektur durchführt.",
      fr: "Un bot Telegram intelligent qui gère les plannings de nettoyage de colocation, définit des rappels automatisés et effectue des recherches web via une architecture d'agent ReAct."
    },
    tech: ["Python", "Groq API", "AsyncIO", "ReAct Architecture"],
    link: "https://github.com/Vansh1516/Stefan_Chatbot/tree/main",
  },
  {
    title: "Green Hydrogen Project",
    description: {
      en: "Mechanical engineering group project focused on Electrolysis efficiency, Hydrogen embrittlement prevention, and storage pressure calculations.",
      de: "Gruppenprojekt im Maschinenbau mit Fokus auf Elektrolyse-Effizienz, Vermeidung von Wasserstoffversprödung und Speicherdruckberechnungen.",
      fr: "Projet de groupe en génie mécanique axé sur l'efficacité de l'électrolyse, la prévention de la fragilisation par l'hydrogène et les calculs de pression de stockage."
    },
    tech: ["Thermodynamics", "Materials Science", "Calculations"],
  }
];
