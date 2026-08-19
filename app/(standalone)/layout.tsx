import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
