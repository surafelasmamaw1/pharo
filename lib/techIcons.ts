import {
  siReact,
  siNextdotjs,
  siNodedotjs,
  siTypescript,
  siJavascript,
  siPython,
  siMongodb,
  siTailwindcss,
  siPrisma,
  siStripe,
  siSocketdotio,
  siGit,
  siDocker,
  siGithub,
  siFigma,
  siPostgresql,
  siLinux,
  siMysql,
  siExpress,
  siVuedotjs,
  siAngular,
  siGraphql,
  siRedis,
  siFirebase,
  siVercel,
  siGitlab,
  siHtml5,
  siCss,
  siPhp,
  siFlutter,
  siJest,
  siLighthouse,
  siStorybook,
  siWebpack,
  siCypress,
  siVitest,
} from "simple-icons";

export interface TechIconData {
  path: string;
  hex: string;
  label: string;
}

/** Maps a tech label string to its simple-icons data */
const techMap: Record<string, TechIconData> = {
  // Web fundamentals
  HTML:           { path: siHtml5.path,      hex: siHtml5.hex,      label: "HTML" },
  CSS:            { path: siCss.path,        hex: siCss.hex,        label: "CSS" },
  PHP:            { path: siPhp.path,        hex: siPhp.hex,        label: "PHP" },

  // Frameworks & Libraries
  React:          { path: siReact.path,      hex: siReact.hex,      label: "React" },
  "Next.js":      { path: siNextdotjs.path,  hex: "000000",         label: "Next.js" },
  "Node.js":      { path: siNodedotjs.path,  hex: siNodedotjs.hex,  label: "Node.js" },
  Vue:            { path: siVuedotjs.path,   hex: siVuedotjs.hex,   label: "Vue" },
  Angular:        { path: siAngular.path,    hex: siAngular.hex,    label: "Angular" },
  Express:        { path: siExpress.path,    hex: "B0B7C3",         label: "Express" },
  "Express.js":   { path: siExpress.path,    hex: "B0B7C3",         label: "Express.js" },
  Flutter:        { path: siFlutter.path,    hex: siFlutter.hex,    label: "Flutter" },

  // Languages
  TypeScript:     { path: siTypescript.path, hex: siTypescript.hex, label: "TypeScript" },
  JavaScript:     { path: siJavascript.path, hex: siJavascript.hex, label: "JavaScript" },
  Python:         { path: siPython.path,     hex: siPython.hex,     label: "Python" },
  SQL:            { path: siMysql.path,      hex: siMysql.hex,      label: "SQL" },
  GraphQL:        { path: siGraphql.path,    hex: siGraphql.hex,    label: "GraphQL" },

  // Styling
  Tailwind:       { path: siTailwindcss.path, hex: siTailwindcss.hex, label: "Tailwind" },
  "Tailwind CSS": { path: siTailwindcss.path, hex: siTailwindcss.hex, label: "Tailwind CSS" },

  // Databases & ORMs
  MongoDB:    { path: siMongodb.path,    hex: siMongodb.hex,    label: "MongoDB" },
  Prisma:     { path: siPrisma.path,     hex: "4C78F9",         label: "Prisma" },
  PostgreSQL: { path: siPostgresql.path, hex: siPostgresql.hex, label: "PostgreSQL" },
  MySQL:      { path: siMysql.path,      hex: siMysql.hex,      label: "MySQL" },
  Redis:      { path: siRedis.path,      hex: siRedis.hex,      label: "Redis" },
  Firebase:   { path: siFirebase.path,   hex: siFirebase.hex,   label: "Firebase" },

  // Payments & Services
  Stripe:     { path: siStripe.path,     hex: siStripe.hex,     label: "Stripe" },

  // Real-time
  "Socket.io": { path: siSocketdotio.path, hex: "FFFFFF", label: "Socket.io" },

  // Tools
  Git:    { path: siGit.path,    hex: siGit.hex,    label: "Git" },
  Docker: { path: siDocker.path, hex: siDocker.hex, label: "Docker" },
  Figma:  { path: siFigma.path,  hex: siFigma.hex,  label: "Figma" },
  Linux:  { path: siLinux.path,  hex: "FCC624",     label: "Linux" },

  // Platforms
  GitHub: { path: siGithub.path, hex: "E6EDF3",     label: "GitHub" },
  GitLab: { path: siGitlab.path, hex: siGitlab.hex, label: "GitLab" },
  Vercel: { path: siVercel.path, hex: "FFFFFF",     label: "Vercel" },

  // Focus Areas (Skills section)
  "Full Stack Development": { path: siWebpack.path,    hex: siWebpack.hex,    label: "Full Stack Development" },
  "UI/UX":                  { path: siFigma.path,     hex: siFigma.hex,     label: "UI/UX" },
  "Performance":            { path: siLighthouse.path, hex: siLighthouse.hex, label: "Performance" },
  "Testing":                { path: siJest.path,      hex: siJest.hex,      label: "Testing" },

  // Additional test/design tools
  Jest:       { path: siJest.path,      hex: siJest.hex,      label: "Jest" },
  Cypress:    { path: siCypress.path,   hex: siCypress.hex,   label: "Cypress" },
  Vitest:     { path: siVitest.path,    hex: siVitest.hex,    label: "Vitest" },
  Storybook:  { path: siStorybook.path, hex: siStorybook.hex, label: "Storybook" },
  Webpack:    { path: siWebpack.path,   hex: siWebpack.hex,   label: "Webpack" },
};

export function getTechIcon(name: string): TechIconData | null {
  return techMap[name] ?? null;
}
