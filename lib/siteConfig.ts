// ============================================================
// SITE CONFIGURATION — Pharo School Assosa
// Edit the values below to update content across the entire site.
// ============================================================

export const siteConfig = {
  name: "Pharo School Assosa",
  tagline: "Unlocking Africa's potential.",
  description:
    "Pharo School Assosa provides high-quality primary and secondary education in Assosa, Ethiopia — fostering the intellectual, social, emotional, and ethical development of every learner.",

  url: "https://pharoschools.org",

  contact: {
    address: ["Assosa, BGRS, Ethiopia", "Near Saint Gabriel Church"],
    phone: "+251 057 2759 5555",
    phoneHref: "tel:+251057 27595555",
    email: "info-primary@et.pharoschools.org",
    emailHref: "mailto:info-primary@et.pharoschools.org",
    officeHours: "Monday – Friday · 8:00 AM – 4:30 PM",
    officeHoursExtra: "Saturday & Sunday · Closed",
  },

  social: {
    facebook: "#",
    x: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },

  foundingYear: 2020,

  meta: {
    title: "Pharo School Assosa | Quality Education in Ethiopia",
    description:
      "Pharo School Assosa offers primary and secondary education in Assosa, BGRS, Ethiopia — combining the Ethiopian curriculum with international standards to empower lifelong learners.",
    keywords: [
      "Pharo School Assosa",
      "education Ethiopia",
      "school Assosa",
      "BGRS education",
      "primary school Ethiopia",
      "secondary school Ethiopia",
      "Pharo Foundation",
      "quality education Africa",
    ] as string[],
    ogImage: "/og-image.png",
  },

  timeline: [
    {
      year: "2020",
      title: "Pharo School Assosa Established",
      description:
        "Pharo School Assosa was founded on the western edge of Ethiopia, in the capital of BGRS state — with a vision to provide access to high-quality education for the local community.",
    },
    {
      year: "2021",
      title: "Growing Enrolment & Community Trust",
      description:
        "Rapid growth in student enrolment as families across Assosa recognised the school's commitment to academic excellence and holistic development.",
    },
    {
      year: "2022",
      title: "Curriculum Expansion",
      description:
        "Introduction of a blended curriculum combining the Ethiopian national curriculum with international standards — preparing students to become productive global citizens.",
    },
    {
      year: "2023",
      title: "New Facilities & Programmes",
      description:
        "Opening of expanded classrooms, computer labs, library, and science facilities — supporting rigorous learning and co-curricular growth across all year groups.",
    },
    {
      year: "Today & Beyond",
      title: "A Centre of Excellence for the Region",
      description:
        "Continuing to grow as a regional centre of educational excellence — deepening community partnerships, broadening access, and empowering students to realise their future goals.",
    },
  ],

  services: [
    {
      title: "Quality Education",
      description:
        "A rigorous, balanced curriculum that combines the Ethiopian national curriculum with international standards — upholding high academic standards while nurturing curiosity and a love of learning.",
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
      title: "Holistic Development",
      description:
        "A whole-child approach — intellectual, social, emotional, and ethical — that helps every student discover their strengths and develop the passion to realise their future goals.",
    },
    {
      title: "Safe Learning Environment",
      description:
        "A caring, inclusive, and well-supervised campus culture where every student feels secure, respected, and free to focus on learning and healthy growth.",
    },
    {
      title: "Community Partnership",
      description:
        "A warm, connected community of students, teachers, staff, and families — united by shared values, active partnership, and a commitment to the local community.",
    },
  ],
} as const;
