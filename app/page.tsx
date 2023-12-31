import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { Container } from "postcss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] bg-opacity-90">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <FooterSection />
    </main>
  );
}
