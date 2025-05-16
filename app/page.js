"use client";
import { useEffect, useRef, useState } from "react";
import {
  HeroSection,
  Navbar,
  AboutSection,
  ProjectSection,
  EmailSection,
  Footer,
} from "./components/Imports";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader/Index";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 4500);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
