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
  Moon,
  Sun,
  Images,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navItems = [
  { name: "Home",         href: "/",              id: "home",          icon: Home },
  { name: "About Us",     href: "#about",         id: "about",         icon: GraduationCap },
  { name: "Academics",    href: "#academics",     id: "academics",     icon: BookOpen },
  { name: "Student Life", href: "#student-life",  id: "student-life",  icon: Users },
  { name: "News & Events",href: "#news-events",   id: "news-events",   icon: CalendarDays },
  { name: "Admissions",   href: "/admissions",    id: "admissions",    icon: ClipboardList },
  { name: "Contact",      href: "#contact",       id: "contact",       icon: Mail },
  { name: "Gallery",      href: "/gallery",       id: "gallery",       icon: Images },
];

const NAV_HEIGHT = "h-10"; // Unified interactive height for nav pills, toggle, menu button, CTA

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // eslint-disable-line react-hooks/set-state-in-effect -- standard hydration pattern for next-themes
  }, []);
  if (!mounted) return <div className={`${NAV_HEIGHT} w-10`} />;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.08, rotate: 6 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 12 }}
      className={`relative flex items-center justify-center w-10 ${NAV_HEIGHT} rounded-full border transition-all duration-300 ${
        isDark
          ? "border-border bg-border/30 text-accent hover:bg-scholarly/20 hover:border-scholarly/50 hover:shadow-[0_0_16px_rgba(30,58,95,0.25)]"
          : "border-border bg-transparent text-muted hover:text-foreground hover:bg-border/40 hover:shadow-[0_0_16px_rgba(30,58,95,0.2)]"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="w-[18px] h-[18px]" strokeWidth={1.9} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="w-[18px] h-[18px]" strokeWidth={1.9} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // On sub-pages, prefix anchor hrefs with "/"
  const resolveHref = (href: string) => {
    if (!isHomePage && href.startsWith("#")) return `/${href}`;
    return href;
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 30);

    const sectionIds = navItems.map((i) => i.id);
    const scrollPosition = window.scrollY + 120;

    // If scrolled to bottom of page, activate last section
    const atBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    if (atBottom) {
      setActiveSection(sectionIds[sectionIds.length - 1]);
      return;
    }

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const { offsetTop, offsetHeight } = el;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 dark:bg-background/92 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-[76px] lg:h-20">
          {/* Logo — pinned to the far-left viewport edge (offset container's inner padding) */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 12 }}
            className="flex-shrink-0 flex items-center gap-3 -ml-6 sm:-ml-8 mr-6 md:mr-10 lg:mr-16"
            aria-label="Pharo Foundation - Go to home"
          >
            <div className="flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden border border-scholarly/30 shadow-sm flex-shrink-0 bg-white">
              <Image
                src="/pharo-logo.png"
                alt="Pharo Foundation"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none justify-center">
              <span className="font-serif text-xl lg:text-[22px] font-bold tracking-tight text-foreground leading-none">Pharo</span>
              <span className="text-[10.5px] lg:text-[11px] font-semibold uppercase tracking-[0.18em] text-scholarly mt-[2px]">Foundation</span>
            </div>
          </motion.a>

          {/* Right cluster: Desktop Navigation + Apply Now + theme toggle + mobile menu */}
          <div className="flex items-center gap-3 lg:gap-4 -mr-6 sm:-mr-8">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={resolveHref(item.href)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18, type: "spring", stiffness: 420, damping: 14 }}
                    className={`relative flex items-center gap-2 px-4 ${NAV_HEIGHT} rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap leading-none ${
                      isActive
                        ? "text-white bg-scholarly border border-scholarly/30 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_0_0_4px_rgba(30,58,95,0.05)]"
                        : "text-muted hover:text-foreground hover:bg-foreground/[0.04] hover:shadow-[0_0_0_4px_rgba(0,0,0,0.02)] dark:hover:bg-white/[0.04] dark:hover:bg-scholarly/10"
                    }`}
                  >
                    <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.85} />
                    <span className="pb-[1px]">{item.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            {/* Divider + Theme toggle — isolated to the right */}
            <div className="hidden md:flex items-center gap-3 pl-3 border-l border-border/60 ml-1">
              <ThemeToggle />
            </div>
            {/* Theme toggle on mobile (no divider) */}
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.93 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 420, damping: 12 }}
              className={`lg:hidden flex items-center justify-center w-10 ${NAV_HEIGHT} rounded-full border border-border text-foreground hover:bg-border/40 transition-colors`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-[20px] h-[20px]" strokeWidth={1.9} />
              ) : (
                <Menu className="w-[20px] h-[20px]" strokeWidth={1.9} />
              )}
            </motion.button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <Container>
              <div className="pt-5 pb-2">
              </div>
              <nav className="py-4 space-y-1" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={resolveHref(item.href)}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.18, type: "spring", stiffness: 420, damping: 14 }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[15px] font-medium transition-all ${
                        isActive
                          ? "text-white bg-scholarly border border-scholarly/20 shadow-[0_0_0_4px_rgba(30,58,95,0.07)]"
                          : "text-foreground hover:bg-foreground/[0.04] dark:hover:bg-scholarly/10"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-9 h-9 rounded-xl border transition-colors ${
                          isActive
                            ? "bg-white/15 border-white/20 text-white"
                            : "bg-scholarly-pale border-scholarly/15 text-scholarly"
                        }`}
                      >
                        <Icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.85} />
                      </span>
                      {item.name}
                    </motion.a>
                  );
                })}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
