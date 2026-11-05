import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const db = prisma as any;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pharoschools.org";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/admissions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/academics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  // Dynamic news routes
  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const newsItems = await db.newsEvent.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { createdAt: "desc" },
    });
    newsRoutes = newsItems.map((item: { slug: string; updatedAt: Date }) => ({
      url: `${baseUrl}/news/${item.slug}`,
      lastModified: item.updatedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  } catch {
    // DB not available during build — return static only
  }

  return [...staticRoutes, ...newsRoutes];
}
