import {
  Coffee,
  Flame,
  Droplets,
  Wind,
  Zap,
  MapPin,
  BookOpen,
  Globe,
  LucideIcon,
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  new?: boolean;
  beta?: boolean;
}

export interface ToolCategory {
  id: string;
  name: string;
  tools: Tool[];
}

export const toolCategories: ToolCategory[] = [
  {
    id: "recipes",
    name: "Recipes",
    tools: [
      {
        id: "perfect-masala-chai",
        name: "Perfect Masala Chai",
        description: "The foundational chai recipe every home needs",
        icon: Coffee,
        href: "/blog/perfect-masala-chai",
      },
      {
        id: "kashmiri-noon-chai",
        name: "Kashmiri Noon Chai",
        description: "The stunning pink salted tea from Kashmir",
        icon: Droplets,
        href: "/blog/kashmiri-noon-chai",
      },
      {
        id: "adrak-chai-ginger-tea",
        name: "Adrak Wali Chai",
        description: "The everyday ginger tea",
        icon: Flame,
        href: "/blog/adrak-chai-ginger-tea",
      },
      {
        id: "cold-brew-darjeeling",
        name: "Cold Brew Darjeeling",
        description: "Slow cold extraction, no bitterness",
        icon: Wind,
        href: "/blog/cold-brew-darjeeling",
      },
      {
        id: "karak-chai",
        name: "Karak Chai",
        description: "Bold twice-cooked Gulf-style chai",
        icon: Zap,
        href: "/blog/karak-chai",
      },
    ],
  },
  {
    id: "locations",
    name: "Locations",
    tools: [
      {
        id: "maharashtra",
        name: "Maharashtra",
        description: "Cutting chai, tapris, Irani cafes",
        icon: MapPin,
        href: "/maharashtra",
      },
      {
        id: "karnataka",
        name: "Karnataka",
        description: "Nilgiri tea, Sulaimani, Coorg brews",
        icon: MapPin,
        href: "/karnataka",
      },
      {
        id: "uttar-pradesh",
        name: "Uttar Pradesh",
        description: "Kulhad chai, kehwa, ghat rituals",
        icon: MapPin,
        href: "/uttar-pradesh",
      },
      {
        id: "rajasthan",
        name: "Rajasthan",
        description: "Spiced desert chai, rose chai",
        icon: MapPin,
        href: "/rajasthan",
      },
      {
        id: "gujarat",
        name: "Gujarat",
        description: "Jaggery chai, ginger masala chai",
        icon: MapPin,
        href: "/gujarat",
      },
    ],
  },
  {
    id: "browse",
    name: "Browse",
    tools: [
      {
        id: "all-recipes",
        name: "All Recipes",
        description: "Browse all chai and tea recipes",
        icon: BookOpen,
        href: "/blog",
      },
      {
        id: "all-locations",
        name: "All Locations",
        description: "Chai culture across India",
        icon: Globe,
        href: "/available-locations",
      },
      {
        id: "other-websites",
        name: "Other Websites",
        description: "More projects from our team",
        icon: Globe,
        href: "/other-websites",
      },
    ],
  },
];

export const allTools = toolCategories.flatMap((category) => category.tools);

export const featuredToolIds = [
  "perfect-masala-chai",
  "kashmiri-noon-chai",
  "karak-chai",
];
export const featuredTools = featuredToolIds
  .map((id) => allTools.find((tool) => tool.id === id))
  .filter((tool): tool is Tool => tool !== undefined);

export function getToolById(id: string): Tool | undefined {
  return allTools.find((tool) => tool.id === id);
}

export function getCategoryByToolId(id: string): ToolCategory | undefined {
  return toolCategories.find((category) =>
    category.tools.some((tool) => tool.id === id)
  );
}
