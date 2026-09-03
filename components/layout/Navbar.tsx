"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Users,
  CalendarDays,
  Mail,
  Menu,
  X,
  Images,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import UrgentBanner from "./UrgentBanner";

const navItems = [
  { name: "Home", href: "/", id: "home", icon: Home },
  { name: "About Us", href: "#about", id: "about", icon: GraduationCap },
  { name: "Academics", href: "#academics", id: "academics", icon: BookOpen },
  { name: "Student Life", href: "#student-life", id: "student-life", icon: Users },
  { name: "News & Events", href: "#news-events", id: "news-events", icon: CalendarDays },
  { name: "Admissions", href: "/admissions", id: "admissions", icon: ClipboardList },
  { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  { name: "Gallery", href: "/gallery", id: "gallery", icon: Images },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const resolveHref = (href: string) => {
    if (!href.startsWith("#")) return href;
    return isHomePage ? href : `/${href}`;
  };

  // Smooth scroll handler for hash links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // let Next.js handle regular routes
    if (!isHomePage) return; // will navigate to /#section via resolveHref

    e.preventDefault();
    const id = href.slice(1); // strip the "#"
    const target = document.getElementById(id);
    if (target) {
      const navbarHeight = 130; // account for fixed navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    if (!isHomePage) return;

    const sections = navItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => item.id);

    const scrollPosition = window.scrollY + 140;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      <UrgentBanner />

      {/* Institutional Top Utility Bar */}
      <div className="bg-[#122339] text-white/85 text-[11px] md:text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/95 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Assosa, Benishangul-Gumuz, Ethiopia
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-white/80">
              <Phone className="w-3.5 h-3.5 text-gold" />
              +251 91 234 5678
            </span>
          </div>
          <div className="text-[11px] text-white/60 tracking-wider uppercase font-medium">

          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm text-foreground"
            : "bg-white/90 backdrop-blur-sm border-b border-border/60 text-foreground"
          }`}
      >
        <Container>
          <div className="flex items-center justify-between h-[72px] lg:h-[78px]">
            {/* Logo and Academic Crest Branding */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-3"
              aria-label="Pharo School Assosa Home"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-full overflow-hidden border border-scholarly/25 shadow-sm bg-white p-1">
                <Image
                  src="/pharo-logo.png"
                  alt="Pharo Foundation Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-xl lg:text-[22px] font-bold tracking-tight text-scholarly">
                  Pharo School
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Assosa • Ethiopia
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-4 lg:gap-6">
              <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                {navItems.map((item) => {
                  const isHashLink = item.href.startsWith("#");
                  const isRouteLink = !isHashLink;

                  // Home ("/"): only active when scrolled to top of home page
                  // Other routes (/admissions, /gallery): active when pathname matches
                  // Hash links (#about, #contact etc): active when scroll position matches
                  const isActive =
                    item.href === "/"
                      ? isHomePage && activeSection === "home"
                      : isRouteLink
                      ? pathname.startsWith(item.href)
                      : isHomePage && activeSection === item.id;

                  return (
                    <Link
                      key={item.name}
                      href={resolveHref(item.href)}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                        isActive
                          ? "text-scholarly font-bold border-b-2 border-scholarly rounded-b-none"
                          : "text-foreground/80 hover:text-scholarly hover:bg-slate-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Action Button */}
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-scholarly text-white font-bold text-xs uppercase tracking-wider hover:bg-scholarly-light transition-all shadow-sm"
              >
                Apply Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-white"
            >
              <Container>
                <div className="py-4 space-y-1">
                  {navItems.map((item) => {
                    const isHashLink = item.href.startsWith("#");
                    const isRouteLink = !isHashLink;
                    const isActive =
                      item.href === "/"
                        ? isHomePage && activeSection === "home"
                        : isRouteLink
                        ? pathname.startsWith(item.href)
                        : isHomePage && activeSection === item.id;

                    return (
                      <Link
                        key={item.name}
                        href={resolveHref(item.href)}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                          isActive
                            ? "text-scholarly bg-scholarly-pale border-l-2 border-scholarly"
                            : "text-foreground hover:bg-slate-50 hover:text-scholarly"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="pt-3 border-t border-border/60">
                    <Link
                      href="/admissions"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-2.5 text-center rounded-lg bg-scholarly text-white font-bold text-xs uppercase tracking-wider shadow-sm"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
