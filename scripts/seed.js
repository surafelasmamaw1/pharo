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
  const existingNews = await prisma.newsEvent.count();
  if (existingNews === 0) {
    await prisma.newsEvent.createMany({
      data: [
        {
          title: "Inter-School Football Championship",
          slug: "inter-school-football-championship",
          category: "Events",
          snippet: "Our school football team took to the field in the championship, delivering an outstanding performance.",
          content: "Our school football team took to the field in the inter-school championship, delivering an outstanding performance and bringing home a memorable result for the whole Pharo Foundation community.",
          imageUrl: "/ronaldo.jpg",
          date: "August 10, 2026",
          published: true,
        },
        {
          title: "Open House & Campus Tour Day",
          slug: "open-house-campus-tour-day",
          category: "Events",
          snippet: "Families are invited to tour the campus, meet faculty, and experience a day in the life of our students.",
          content: "Families are invited to tour the campus, meet faculty, and experience a day in the life of our students. Registration is open — contact the admissions office to reserve your place.",
          imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
          date: "September 20, 2026",
          published: true,
        },
        {
          title: "Annual Science & Technology Fair",
          slug: "annual-science-technology-fair",
          category: "Academic",
          snippet: "Students showcase innovative engineering, robotics, and scientific research projects.",
          content: "Our annual Science and Technology Fair brought together brilliant student projects spanning robotics, sustainable agriculture, and renewable energy experiments.",
          imageUrl: "/computer-labs.png",
          date: "October 5, 2026",
          published: true,
        },
      ],
    });
  }

  // 3. Testimonials
  const existingTestimonials = await prisma.testimonial.count();
  if (existingTestimonials === 0) {
    await prisma.testimonial.createMany({
      data: [
        {
          name: "Amina Tesfaye",
          role: "Parent of a Grade 4 student",
          type: "Parent",
          quote: "From the very first visit, we felt a genuine sense of care. Teachers truly know each child individually, and the community has warmly welcomed our family. Our child looks forward to school every day.",
        },
        {
          name: "Daniel Bekele",
          role: "Class of 2027 — Student",
          type: "Student",
          quote: "I love coming to school because of my friends and teachers. The classes are interesting and the activities are fun. I feel like I can be myself here, and I want to keep learning.",
        },
        {
          name: "Sara Woldemichael",
          role: "Mathematics & Sciences — Faculty",
          type: "Teacher",
          quote: "Teaching at Pharo Foundation means being part of a community that trusts teachers and values depth, not just speed. The collegiality is real and the students are inspiring.",
        },
      ],
    });
  }

  // 4. Gallery Photos
  const existingGallery = await prisma.galleryItem.count();
  if (existingGallery === 0) {
    await prisma.galleryItem.createMany({
      data: [
        {
          title: "Main Campus & Courtyard",
          category: "Campus",
          imageUrl: "/pharo-school.png",
        },
        {
          title: "Students in Classroom",
          category: "Students",
          imageUrl: "/about-photo.png",
        },
        {
          title: "Modern Learning Spaces",
          category: "Classrooms",
          imageUrl: "/classrooms.png",
        },
        {
          title: "Library Resource Center",
          category: "Campus",
          imageUrl: "/library.png",
        },
        {
          title: "Computer & Robotics Lab",
          category: "Technology",
          imageUrl: "/computer-labs.png",
        },
        {
          title: "Football Championship",
          category: "Sports",
          imageUrl: "/ronaldo.jpg",
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
