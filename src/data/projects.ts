import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    name: "TaskTracker",
    icon: "timer",
    description:
      "Task tracking with real-time timer, goal management, live statistics and CSV export.",
    liveUrl: "https://javchz.github.io/tasktracker/",
    repoUrl: "https://github.com/JavChz/tasktracker",
    image: "/assets/tasktracker_preview.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Zustand"],
  },
  {
    name: "ComfyRead",
    icon: "menu_book",
    description:
      "Distraction-free reading zone. Paste ugly documents and read them in a beautiful, warm-toned interface with light/dark mode.",
    liveUrl: "https://javchz.github.io/ComfyRead/",
    repoUrl: "https://github.com/JavChz/ComfyRead",
    image: "/assets/comfyread_preview.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    name: "My Home",
    icon: "home",
    description:
      "Custom browser homepage with a personalised bookmark grid. Replace your default new tab with a curated link collection.",
    liveUrl: "https://javchz.github.io/my-home/",
    repoUrl: "https://github.com/JavChz/my-home",
    image: "/assets/myhome_preview.png",
    tags: ["React", "TypeScript", "JavaScript", "CSS"],
  },
  {
    name: "ZeroHour",
    icon: "hourglass_empty",
    description:
      "A countdown application where timer configurations are encoded directly in the URL, allowing them to be instantly shared without a backend.",
    liveUrl: "https://javchz.github.io/ZeroHour/",
    repoUrl: "https://github.com/JavChz/ZeroHour",
    image: "/assets/zerohour_preview.jpg",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
  },
];
