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
    facebook: "https://www.facebook.com/pharofoundation",
    x: "https://x.com/PharoFoundation",
    instagram: "https://www.instagram.com/pharofoundation",
    linkedin: "https://www.linkedin.com/company/the-pharo-foundation",
    youtube: "https://www.youtube.com/@ThePharoFoundation",
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
    ogImage: "/og-image.svg",
  },

  services: [
    {
      title: "Strong Academic Foundation",
      description:
        "We teach the Ethiopian national curriculum alongside international standards, building steady habits in mathematics, science, and English.",
    },
    {
      title: "Dedicated Teachers",
      description:
        "Our teachers know their students by name and stay available after class for extra tutoring, exam prep, and personal guidance.",
    },
    {
      title: "Practical Science & ICT",
      description:
        "Students spend real time in physics, chemistry, biology, and computer labs rather than learning only from textbooks.",
    },
    {
      title: "Character & Responsibility",
      description:
        "Alongside grades, we emphasise honesty, respect, teamwork, and service to the local Assosa community.",
    },
    {
      title: "Safe, Orderly Campus",
      description:
        "A calm, supervised school grounds where students feel respected, supported, and able to focus on their studies.",
    },
    {
      title: "Partnership With Families",
      description:
        "Regular parent meetings, clear term reports, and open communication between teachers and families throughout the school year.",
    },
  ],
} as const;
