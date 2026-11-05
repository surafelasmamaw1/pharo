import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import Container from "@/components/ui/Container";

export default function NewsNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-32 pb-20">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-scholarly-pale border border-scholarly/20 flex items-center justify-center mx-auto mb-6 text-scholarly">
            <Newspaper className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-3">Article Not Found</h1>
          <p className="text-muted text-sm mb-8 leading-relaxed">
            The article you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <Link
            href="/#news-events"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-scholarly text-white font-bold text-sm hover:bg-scholarly-light transition-colors shadow-md"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Back to News & Events
          </Link>
        </div>
      </Container>
    </div>
  );
}
