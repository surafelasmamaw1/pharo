// ============================================================
// SITE CONFIGURATION — Pharo Foundation
// Edit the values below to update content across the entire site.
// ============================================================

export const siteConfig = {
  name: "Pharo Foundation",
  tagline: "Nurturing minds, building futures.",
  description:
    "Pharo Foundation is an educational institution dedicated to academic excellence, character development, and the holistic growth of every student.",

  url: "https://pharofoundation.org",

  contact: {
    address: ["Pharo Foundation", "Assosa, Ethiopia"],
    phone: "+252 63 444 0000",
    phoneHref: "tel:+252634440000",
    email: "info@pharofoundation.org",
    emailHref: "mailto:info@pharofoundation.org",
    officeHours: "Monday – Friday · 8:00 AM – 4:30 PM",
    officeHoursExtra: "Saturday & Sunday · Closed",
  },

  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },

  foundingYear: 2011,

  meta: {
    title: "Pharo Foundation | Educational Institution",
    description:
      "Pharo Foundation is an educational institution dedicated to academic excellence, character development, and the holistic growth of every student.",
    keywords: [
      "education",
      "school",
      "academics",
      "admissions",
      "student life",
      "learning",
      "excellence",
      "Pharo Foundation",
    ] as string[],
    ogImage: "/og-image.png",
  },

  timeline: [
    {
      year: "2011",
      title: "The Foundation is Established",
      description:
        "Pharo Foundation was founded with the vision of providing a transformative educational experience rooted in excellence, character, and community.",
    },
    {
      year: "2014",
      title: "Academic Programs Grow & Deepen",
      description:
        "Expansion of the core curriculum and introduction of signature programs in the arts, sciences, and languages to serve a growing community of learners.",
    },
    {
      year: "2017",
      title: "New Campus & Facilities",
      description:
        "Opening of purpose-built facilities — modern classrooms, laboratories, library, and creative spaces — designed to support the next generation of learning.",
    },
    {
      year: "2020",
      title: "A Thriving Community",
      description:
        "Record enrollment, flourishing co-curricular programs, and a vibrant, connected community of students, educators, and families united by shared values.",
    },
    {
      year: "Today & Tomorrow",
      title: "Future Direction",
      description:
        "Continuing to innovate in teaching and learning, broaden access, deepen community partnerships, and prepare students for the opportunities that lie ahead.",
    },
  ],

  services: [
    {
      title: "Quality Education",
      description:
        "A rigorous, balanced, and research-based curriculum that upholds high academic standards while nurturing genuine curiosity and love of learning.",
    },
    {
      title: "Experienced Educators",
      description:
        "Talented, dedicated faculty who combine deep subject expertise with a genuine passion for teaching, mentorship, and the success of every individual student.",
    },
    {
      title: "Innovation & Technology",
      description:
        "Modern learning tools, technology-rich classrooms, and forward-thinking pedagogy that prepare students to thrive in a rapidly changing world.",
    },
    {
      title: "Student Development",
      description:
        "A whole-child approach — intellectual, social, emotional, and physical — that helps every student discover strengths, build confidence, and grow into thoughtful young adults.",
    },
    {
      title: "Safe Learning Environment",
      description:
        "A caring, inclusive, and well-supervised campus culture where every student feels secure, respected, and free to focus on learning and healthy growth.",
    },
    {
      title: "Community",
      description:
        "A warm, connected community of students, teachers, staff, and families — united by shared values, active partnership, and mutual support.",
    },
  ],
} as const;
