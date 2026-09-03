import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with admin-manageable content...");

  // 1. Site Settings
  await prisma.siteSetting.upsert({
    where: { id: "default" },
    update: {
      urgentBannerActive: true,
      urgentBannerText: "📢 2026/27 Enrollment is now open! Early bird applications receive priority campus placement.",
      tuitionFeeText: "ETB 9,700",
      admissionDeadline: "September 30, 2026",
      contactPhone: "+251 91 234 5678",
      contactEmail: "admissions@pharoschool.edu.et",
    },
    create: {
      id: "default",
      urgentBannerActive: true,
      urgentBannerText: "📢 2026/27 Enrollment is now open! Early bird applications receive priority campus placement.",
      tuitionFeeText: "ETB 9,700",
      admissionDeadline: "September 30, 2026",
      contactPhone: "+251 91 234 5678",
      contactEmail: "admissions@pharoschool.edu.et",
    },
  });

  // 2. Clear old hardcoded items if needed or add new ones
  await prisma.newsEvent.deleteMany({});
  await prisma.newsEvent.createMany({
    data: [
      {
        title: "Inter-School Athletics & Sports Day",
        slug: "inter-school-athletics-sports-day",
        category: "Events",
        snippet: "Pharo School Assosa scholars demonstrated athletic excellence and teamwork during the regional school games.",
        content: "Our school sports contingent competed with distinction in the regional athletics meet, showcasing discipline, speed, and great sportsmanship across football, running, and volleyball competitions.",
        imageUrl: "/about-photo.png",
        date: "August 10, 2026",
        published: true,
      },
      {
        title: "Open House & Campus Tour Day",
        slug: "open-house-campus-tour-day",
        category: "Events",
        snippet: "Prospective families are invited to tour the Assosa campus, inspect laboratories, and meet our faculty.",
        content: "Families are invited to tour the campus, meet our department heads, and experience a day in the life of our scholars. Admissions registration is open for Grades 7 through 12.",
        imageUrl: "/pharo-school.png",
        date: "September 20, 2026",
        published: true,
      },
      {
        title: "Annual Science & Technology Fair",
        slug: "annual-science-technology-fair",
        category: "Academic",
        snippet: "Scholars showcase innovative robotics, renewable energy, and agricultural research projects.",
        content: "Our annual Science and Technology Fair brought together brilliant student projects spanning robotics, sustainable agriculture, and renewable energy experiments designed for the Benishangul-Gumuz region.",
        imageUrl: "/computer-labs.png",
        date: "October 5, 2026",
        published: true,
      },
    ],
  });

  // 3. Testimonials
  await prisma.testimonial.deleteMany({});
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Amina Tesfaye",
        role: "Parent of a Grade 8 Scholar",
        type: "Parent",
        quote: "The discipline, academic rigour, and caring teachers at Pharo School Assosa have transformed our child's confidence and national examination performance.",
      },
      {
        name: "Daniel Bekele",
        role: "Class of 2027 — Natural Sciences",
        type: "Student",
        quote: "The science laboratories and computer resources gave me the hands-on practice I needed. The teachers are dedicated and always available during after-school tutorial sessions.",
      },
      {
        name: "Sara Woldemichael",
        role: "Faculty Head — Mathematics & STEM",
        type: "Teacher",
        quote: "Teaching at Pharo School Assosa means shaping determined young minds who are committed to solving real challenges in Ethiopia through science and ethics.",
      },
    ],
  });

  // 4. Gallery Photos
  await prisma.galleryItem.deleteMany({});
  await prisma.galleryItem.createMany({
    data: [
      {
        title: "Main Campus Grounds & Admin Block",
        category: "Campus",
        imageUrl: "/pharo-school.png",
      },
      {
        title: "Scholars in Collaborative Learning",
        category: "Students",
        imageUrl: "/about-photo.png",
      },
      {
        title: "Modern Purpose-Built Classrooms",
        category: "Classrooms",
        imageUrl: "/classrooms.png",
      },
      {
        title: "Library Resource & Study Center",
        category: "Campus",
        imageUrl: "/library.png",
      },
      {
        title: "Digital Computing & Technology Suite",
        category: "Technology",
        imageUrl: "/computer-labs.png",
      },
      {
        title: "Sports & Athletics Training",
        category: "Sports",
        imageUrl: "/about-photo.png",
      },
    ],
  });

  // 5. Faculty & Academic Leadership
  const existingFaculty = await prisma.facultyMember.count();
  if (existingFaculty === 0) {
    await prisma.facultyMember.createMany({
      data: [
        {
          name: "Ato Berhanu Tadesse",
          role: "Head of School & Principal",
          credentials: "M.Ed. Educational Leadership (Addis Ababa University) • B.Sc. Pedagogical Sciences",
          bio: "With over 18 years of secondary school governance across Ethiopia, Ato Berhanu steers Pharo School Assosa’s academic standards, character development, and regional partnerships.",
          expertise: "Institutional Leadership, Curriculum Governance, Community Engagement",
          order: 1,
        },
        {
          name: "Dr. Genet Haile",
          role: "Head of Natural Sciences & Laboratory Director",
          credentials: "Ph.D. Applied Chemistry • M.Sc. Molecular Biology",
          bio: "Dr. Genet directs our purpose-built physics, chemistry, and biology laboratories, championing hands-on experimental inquiry, STEM research, and regional science fairs.",
          expertise: "Laboratory Sciences, Inquiry-Based Learning, STEM Mentorship",
          order: 2,
        },
        {
          name: "Ato Solomon Mengistu",
          role: "Head of Mathematics & Computing",
          credentials: "M.Sc. Computational Mathematics • B.Ed. Mathematics Education",
          bio: "Ato Solomon leads our national assessment preparation committees and student robotics society, maintaining an unbroken record of distinction in national STEM evaluations.",
          expertise: "Pure Mathematics, Algorithmics & Coding, Exam Strategy",
          order: 3,
        },
        {
          name: "W/ro Tigist Alemu",
          role: "Dean of Students & Guidance Counselor",
          credentials: "M.A. Counseling Psychology • B.A. Sociology",
          bio: "Dedicated to holistic student welfare, W/ro Tigist coordinates pastoral care, university career pathways, and active parent-teacher collaborative forums.",
          expertise: "Pastoral Care, University Advising, Student Mentorship",
          order: 4,
        },
      ],
    });
  }

  console.log("Database successfully seeded with 100% editable records!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
