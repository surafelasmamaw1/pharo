import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing use of the Pharo School Assosa website and online admissions portal.",
};

export default function TermsOfUsePage() {
  return (
    <div className="pt-44 md:pt-48 pb-20 bg-background text-foreground">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-scholarly hover:gap-3 transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-scholarly/15 bg-scholarly-pale/70 mb-6">
            <FileText className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
              Legal &amp; Governance
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Use
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: {new Date().getFullYear()} · {siteConfig.name}
          </p>

          <div className="space-y-8 text-foreground/90 leading-relaxed text-base">
            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">1. Website Purpose</h2>
              <p className="text-muted">
                This website provides official information about {siteConfig.name}, its academic programmes,
                campus facilities, news, and online admissions intake. Submission of an online application does
                not guarantee placement; formal admission is confirmed only after document verification and
                admissions review.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">2. Accuracy of Submitted Information</h2>
              <p className="text-muted">
                Applicants and guardians agree to provide accurate, truthful academic and contact details when
                submitting forms through this portal.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">3. Intellectual Property</h2>
              <p className="text-muted">
                All school branding, logos, photographs, and published materials on this site belong to{" "}
                {siteConfig.name} and Pharo Foundation and may not be reproduced commercially without permission.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

