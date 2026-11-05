import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import Container from "@/components/ui/Container";

const db = prisma as any;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await db.newsEvent.findUnique({ where: { slug } });
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.snippet,
    openGraph: {
      title: article.title,
      description: article.snippet,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await db.newsEvent.findUnique({ where: { slug, published: true } });

  if (!article) notFound();

  const categoryColors: Record<string, string> = {
    News: "bg-scholarly text-white",
    Events: "bg-gold text-white",
    Academic: "bg-scholarly-light text-white",
    Activity: "bg-success text-white",
  };
  const tagStyle = categoryColors[article.category] ?? "bg-scholarly text-white";

  return (
    <>
      {/* Hero */}
      <div className="relative pt-44 md:pt-48 pb-16 overflow-hidden bg-gradient-to-br from-scholarly-pale via-background to-gold-pale/40">
        <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(circle_at_20%_30%,rgba(30,58,95,0.8),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(184,137,60,0.6),transparent_60%)]" />
        <Container>
          <Link
            href="/#news-events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-scholarly hover:gap-3 transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            Back to News & Events
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.18em] uppercase shadow-sm ${tagStyle}`}>
              <Tag className="w-3 h-3" strokeWidth={2.2} />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-scholarly text-[11px] font-extrabold shadow border border-scholarly/20">
              <CalendarDays className="w-3.5 h-3.5 text-scholarly flex-shrink-0" strokeWidth={2} />
              {article.date}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5 max-w-4xl">
            {article.title}
          </h1>
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-2xl">
            {article.snippet}
          </p>
        </Container>
      </div>

      {/* Article content */}
      <Container>
        <div className="py-16 md:py-20 max-w-3xl mx-auto">
          {/* Featured image */}
          {article.imageUrl && (
            <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden mb-12 shadow-xl border border-border">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Body text */}
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
            {article.content.split("\n").map((paragraph: string, i: number) =>
              paragraph.trim() ? (
                <p key={i} className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ) : (
                <div key={i} className="h-2" />
              )
            )}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-muted">
              Published on {article.date} · {article.category}
            </p>
            <Link
              href="/#news-events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-scholarly text-scholarly font-bold text-sm hover:bg-scholarly hover:text-white transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              All News & Events
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
