import type { LucideIcon } from "lucide-react";
import { Baby, School, GraduationCap, Atom, Palette, BookOpen } from "lucide-react";

export type SubjectGroup = { label: string; subjects: string[] };

export type Program = {
  icon: LucideIcon;
  iconBg: string;
  name: string;
  band: string;
  description: string;
  detail: string;
  subjectGroups: SubjectGroup[];
  accent: string;
  accentBg: string;
  glow: string;
  borderGlow: string;
  hoverColor: string;
};

export const coreSubjects = [
  "First Language",
  "Federal Language",
  "English",
  "Mathematics",
  "Performing & Visual Arts",
  "Health & Physical Education",
];

export const programs: Program[] = [
  {
    icon: Baby,
    iconBg: "bg-gold",
    name: "Early Years",
    band: "Ages 3 – 6",
    description:
      "A joyful, play-based foundation where curiosity is nurtured, social-emotional skills bloom, and young learners begin their educational journey with confidence.",
    detail:
      "Our Early Years programme is designed around the natural curiosity of young children. Through guided play, storytelling, creative arts, and collaborative activities, children develop foundational literacy, numeracy, and social skills in a warm and nurturing environment. Every child is known by name, supported as an individual, and celebrated for their unique gifts.",
    subjectGroups: [{ label: "Core Subjects", subjects: coreSubjects }],
    accent: "bg-gold text-white",
    accentBg: "from-gold/20 to-amber-500/10 border-gold/25",
    glow: "hover:shadow-[0_0_36px_rgba(184,137,60,0.3)]",
    borderGlow: "dark:hover:border-gold/50",
    hoverColor: "rgba(184,137,60,0.10)",
  },
  {
    icon: School,
    iconBg: "bg-scholarly",
    name: "Primary Education",
    band: "Grades 1 – 6",
    description:
      "Strong foundational skills in literacy and numeracy, paired with rich explorations across disciplines — building capable, independent learners.",
    detail:
      "Primary education at Pharo Foundation builds the academic and personal foundations that last a lifetime. Students develop strong reading, writing, and mathematical reasoning alongside science, social studies, arts, and physical education.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      { label: "Additional Subjects", subjects: ["Environmental Science", "Moral Education"] },
    ],
    accent: "bg-scholarly text-white",
    accentBg: "from-scholarly/20 to-scholarly-light/10 border-scholarly/25",
    glow: "hover:shadow-[0_0_36px_rgba(30,58,95,0.3)]",
    borderGlow: "dark:hover:border-scholarly/50",
    hoverColor: "rgba(30,58,95,0.10)",
  },
  {
    icon: BookOpen,
    iconBg: "bg-scholarly-light",
    name: "Middle School",
    band: "Grades 7 – 8",
    description:
      "A broadening curriculum introducing the sciences, social studies, and technology — preparing students for the demands of secondary education.",
    detail:
      "Middle school at Pharo Foundation bridges primary learning with the rigour of secondary education. Students engage with a wider range of disciplines, developing analytical thinking, digital literacy, and career awareness.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      {
        label: "Additional Subjects",
        subjects: [
          "General Science",
          "Social Studies",
          "Citizenship Education",
          "Information Technology",
          "Career & Technical Education",
        ],
      },
    ],
    accent: "bg-scholarly-light text-white",
    accentBg: "from-scholarly-light/20 to-blue-500/10 border-scholarly-light/25",
    glow: "hover:shadow-[0_0_36px_rgba(45,79,122,0.3)]",
    borderGlow: "dark:hover:border-scholarly-light/50",
    hoverColor: "rgba(45,79,122,0.10)",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-success",
    name: "Secondary Education",
    band: "Grades 9 – 12",
    description:
      "A rigorous college-preparatory pathway with depth, choice, and challenge — preparing students for university, career, and leadership.",
    detail:
      "Our secondary programme offers a rigorous, breadth-and-depth curriculum designed to prepare students for university admission and lifelong success. Students are guided by expert faculty across core and specialist subjects.",
    subjectGroups: [
      { label: "Core Subjects", subjects: coreSubjects },
      {
        label: "Compulsory Secondary Subjects",
        subjects: [
          "Physics",
          "Chemistry",
          "Biology",
          "Geography",
          "History",
          "Citizenship Education",
          "Economics",
          "Information Technology",
          "Health & Physical Education",
        ],
      },
    ],
    accent: "bg-success text-white",
    accentBg: "from-success/20 to-emerald-500/10 border-success/25",
    glow: "hover:shadow-[0_0_36px_rgba(46,125,87,0.3)]",
    borderGlow: "dark:hover:border-success/50",
    hoverColor: "rgba(46,125,87,0.10)",
  },
  {
    icon: Atom,
    iconBg: "bg-accent",
    name: "Health Science Stream",
    band: "Grades 11 – 12",
    description:
      "A specialised natural science track equipping students with the knowledge and skills for careers in health, medicine, and life sciences.",
    detail:
      "The Health Science Stream at Pharo Foundation offers both general science subjects and four field-based specialisations — giving students real-world preparation for careers in healthcare and the life sciences.",
    subjectGroups: [
      {
        label: "General Subjects",
        subjects: ["Physics", "Chemistry", "Biology", "Information Technology", "Agriculture"],
      },
      {
        label: "Field-Based Subjects",
        subjects: [
          "Personal, Community Health & Patient Care",
          "Nutrition & Dietetics",
          "Child Care & Well-being",
          "Reproductive Health",
        ],
      },
    ],
    accent: "bg-accent text-white",
    accentBg: "from-accent/20 to-gold/10 border-accent/25",
    glow: "hover:shadow-[0_0_36px_rgba(166,110,63,0.3)]",
    borderGlow: "dark:hover:border-accent/50",
    hoverColor: "rgba(166,110,63,0.10)",
  },
  {
    icon: Palette,
    iconBg: "bg-purple-500",
    name: "Arts & Humanities",
    band: "All levels · Integrated",
    description:
      "Visual arts, music, theatre, dance, history, literature, and philosophy — cultivating creative expression, empathy, and cultural perspective.",
    detail:
      "The arts and humanities are at the heart of a Pharo Foundation education. Students explore visual art, music, theatre, and dance alongside history, literature, and philosophy — developing the empathy and communication skills that define truly educated citizens.",
    subjectGroups: [
      {
        label: "Subjects",
        subjects: [
          "Performing & Visual Arts",
          "History",
          "Geography",
          "Social Studies",
          "Moral Education",
          "Citizenship Education",
        ],
      },
    ],
    accent: "bg-purple-500 text-white",
    accentBg: "from-purple-500/20 to-pink-500/10 border-purple-500/25",
    glow: "hover:shadow-[0_0_36px_rgba(168,85,247,0.3)]",
    borderGlow: "dark:hover:border-purple-500/50",
    hoverColor: "rgba(168,85,247,0.10)",
  },
];
