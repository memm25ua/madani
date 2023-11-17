export type Project = {
  id: number;
  title: string;
  shortname: string;
  description: string;
  url: string;
  techStack: string;
  img: string;
  grow: boolean;
};

function createProject(
  id: number,
  title: string,
  shortname: string,
  description: string,
  url: string,
  techStack: string,
  img: string,
  grow: boolean,
) {
  return {
    id,
    title,
    shortname,
    description,
    url,
    techStack,
    img,
    grow,
  };
}

export const projects: Project[] = [
  createProject(
    1,
    "projects.crmble.title",
    "Crmble",
    "projects.crmble.description",
    "https://crmble.com/",
    "Angular.js, HTML, CSS",
    "assets/crmble.png",
    false,
  ),
  createProject(
    2,
    "projects.bindfy.title",
    "Bindfy",
    "projects.bindfy.description",
    "https://partners.bindfyapp.com/landing",
    "Angular.ts, SwiftUI, Firebase",
    "assets/bindfy.png",
    true,
  ),
  createProject(
    3,
    "projects.apparel.title",
    "ApparelLab",
    "projects.apparel.description",
    "https://apparellab.es/",
    "Next.js, Node.js, PostgreSQL, AWS",
    "assets/apparel.png",
    true,
  ),
  createProject(
    4,
    "projects.self.title",
    "this",
    "projects.self.description",
    "#",
    "SvelteKit, TailwindCSS, TypeScript",
    "assets/selfRef.webp",
    false,
  ),
];
