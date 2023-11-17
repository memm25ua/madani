export type Skill = {
  name: string;
  level: number;
  categories: category[];
};

type category = {
  name: string;
  color: BG;
};

enum BG {
  Blue = "bg-perano-200 dark:bg-perano-800",
  Yellow = "bg-yellow-300 dark:bg-yellow-800",
  Gray = "bg-codgray-300 dark:bg-codgray-800",
  Red = "bg-red-300 dark:bg-red-800",
  Purple = "bg-purple-300 dark:bg-purple-800",
}

function createSkill(name: string, level: number, categories: category[]) {
  return {
    name,
    level,
    categories,
  };
}

export const skills: Skill[] = [
  createSkill("Angular/TS/HTML/CSS", 95, [
    { name: "about.skills.front", color: BG.Blue },
  ]),
  createSkill("React/Next.js", 80, [
    { name: "about.skills.front", color: BG.Blue },
  ]),
  createSkill("Java/SpringBoot", 75, [
    { name: "about.skills.back", color: BG.Purple },
  ]),
  createSkill("Node.js", 75, [{ name: "about.skills.back", color: BG.Purple }]),
  createSkill("AWS", 65, [{ name: "about.skills.cloud", color: BG.Red }]),
  createSkill("Golang - Python - SwiftUI", 60, [
    { name: "about.skills.mobile", color: BG.Yellow },
    { name: "about.skills.back", color: BG.Purple },
    { name: "about.skills.other", color: BG.Gray },
  ]),
];
