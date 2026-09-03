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
  const existingTestimonials = await prisma.testimonial.count();
  if (existingTestimonials === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          name: "Amina Tesfaye",
          role: "Parent of a Grade 8 Boarding Scholar",
          type: "Parent",
          quote: "The discipline, academic rigour, and safe boarding environment in Assosa have transformed our child's confidence and national examination performance.",
        },
        {
          name: "Daniel Bekele",
          role: "Class of 2027 — Natural Sciences",
          type: "Student",
          quote: "The science laboratories and computer resources gave me the hands-on practice I needed. The teachers are dedicated and always available during evening prep.",
        },
        {
          name: "Sara Woldemichael",
          role: "Faculty Head — Mathematics & STEM",
          type: "Teacher",
          quote: "Teaching at Pharo School Assosa means shaping determined young minds who are committed to solving real challenges in Ethiopia through science and ethics.",
        },
      ],
    });
  }

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
