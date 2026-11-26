import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pharo School Assosa collects, uses, and protects student and family information.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-4 h-4 text-scholarly" strokeWidth={1.8} />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-scholarly">
              Legal &amp; Governance
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: {new Date().getFullYear()} · {siteConfig.name}
          </p>

          <div className="space-y-8 text-foreground/90 leading-relaxed text-base">
            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">1. Information We Collect</h2>
              <p className="text-muted">
                When families submit an online admissions application or contact inquiry, we collect the information
                provided in the form—such as student name, parent or guardian name, email address, phone numbers,
                academic history, and grade level of interest.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">2. How We Use Information</h2>
              <p className="text-muted">
                Submitted information is used strictly by Pharo School Assosa admissions and administrative staff to
                review applications, respond to family inquiries, and coordinate campus visits or enrolment steps.
                We never sell or rent personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-scholarly mb-3">3. Data Security &amp; Retention</h2>
              <p className="text-muted">
                Access to submitted applications and inquiries is restricted to authenticated school administrators.
                Families may request updates or removal of their application records at any time by contacting{" "}
                <a href={siteConfig.contact.emailHref} className="text-scholarly font-semibold underline">
                  {siteConfig.contact.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

