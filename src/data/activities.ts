import { Trophy, Music, BookOpen, Heart, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const activities: Activity[] = [
  {
    id: "games",
    title: "Games & Sports",
    description: "Fostering physical fitness, teamwork, and competitive spirit through various indoor and outdoor sporting events.",
    icon: Trophy,
  },
  {
    id: "culture",
    title: "Cultural Activities",
    description: "Preserving and celebrating our rich heritage through festivals, art, music, and community gatherings.",
    icon: Music,
  },
  {
    id: "education",
    title: "Educational Activities",
    description: "Empowering the next generation with knowledge, guidance, and support for intellectual growth.",
    icon: BookOpen,
  },
  {
    id: "welfare",
    title: "Social Welfare",
    description: "Serving the community through charitable initiatives and support programs for those in need.",
    icon: Heart,
  },
  {
    id: "community",
    title: "Community Activities",
    description: "Building strong bonds and creating a unified, supportive environment for all members of society.",
    icon: Users,
  },
];
