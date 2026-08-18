import Container from "../ui/Container";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const schoolLinks = [
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Student Life", href: "#student-life" },
];

const infoLinks = [
  { name: "News & Events", href: "#news-events" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms", href: "#" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    Icon: Facebook,
    hoverText: "hover:text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]/40",
    hoverBg: "hover:bg-[#1877F2]/8",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(24,119,242,0.25)]",
  },
  {
    name: "Twitter",
    href: "#",
    Icon: Twitter,
    hoverText: "hover:text-[#1DA1F2]",
    hoverBorder: "hover:border-[#1DA1F2]/40",
    hoverBg: "hover:bg-[#1DA1F2]/8",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(29,161,242,0.25)]",
  },
  {
    name: "Instagram",
    href: "#",
    Icon: Instagram,
    hoverText: "hover:text-[#E1306C]",
    hoverBorder: "hover:border-[#E1306C]/40",
    hoverBg: "hover:bg-[#E1306C]/8",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(225,48,108,0.25)]",
  },
  {
    name: "LinkedIn",
    href: "#",
    Icon: Linkedin,
    hoverText: "hover:text-[#0A66C2]",
    hoverBorder: "hover:border-[#0A66C2]/40",
    hoverBg: "hover:bg-[#0A66C2]/8",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(10,102,194,0.25)]",
  },
  {
    name: "YouTube",
    href: "#",
    Icon: Youtube,
    hoverText: "hover:text-[#FF0000]",
    hoverBorder: "hover:border-[#FF0000]/40",
    hoverBg: "hover:bg-[#FF0000]/8",
    hoverShadow: "hover:shadow-[0_0_16px_rgba(255,0,0,0.22)]",
  },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-border/80 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* School Brand + Identity */}
          <div className="lg:col-span-2">
            <Link
              href="#home"
              className="inline-flex items-center gap-2.5 mb-5"
              aria-label="Pharo Foundation — Home"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full overflow-hidden border border-border bg-white shadow-sm flex-shrink-0">
                <Image src="/pharo-logo.png" alt="Pharo Foundation" width={44} height={44} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                  Pharo
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-scholarly -mt-0.5">
                  Foundation
                </span>
              </div>
            </Link>
            <p className="text-muted leading-relaxed max-w-md text-sm md:text-base mb-7">
              Providing high-quality primary and secondary education in Assosa, BGRS — combining the Ethiopian curriculum with international standards to empower lifelong learners.
            </p>

            {/* Social icons — brand color on hover */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ name, href, Icon, hoverText, hoverBorder, hoverBg, hoverShadow }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className={`w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center text-muted transition-all duration-200 ${hoverText} ${hoverBorder} ${hoverBg} ${hoverShadow}`}
                  >
                    <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* School */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-5">
              School
            </h4>
            <ul className="space-y-2.5">
              {schoolLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-scholarly transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-5">
              Information
            </h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-scholarly transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-scholarly mt-0.5 flex-shrink-0"
                  strokeWidth={1.8}
                />
                <span className="text-muted text-sm md:text-base leading-relaxed">
                  {siteConfig.contact.address.join(", ")}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail
                  className="w-4 h-4 text-scholarly mt-0.5 flex-shrink-0"
                  strokeWidth={1.8}
                />
                <a
                  href={siteConfig.contact.emailHref}
                  className="text-muted hover:text-scholarly transition-colors text-sm md:text-base"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="w-4 h-4 text-scholarly mt-0.5 flex-shrink-0"
                  strokeWidth={1.8}
                />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-muted hover:text-scholarly transition-colors text-sm md:text-base"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Pharo Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="#" className="text-muted hover:text-scholarly transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted hover:text-scholarly transition-colors">
              Terms of Use
            </Link>
            <Link href="#contact" className="text-muted hover:text-scholarly transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
