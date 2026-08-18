"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl mx-auto text-center"
        >
          <h1 className="font-serif text-8xl md:text-9xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
