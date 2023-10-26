import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactsSection } from "@/components/ContactsSection";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="bg-[#212428]">
      <NavBar />

      <HeroSection />

      <FeaturesSection />

      <ProjectsSection />

      <SkillsSection />

      <ExperienceSection />

      <ContactsSection />
    </main>
  );
}
