import { Suspense } from "react";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
export default function PortfolioContent() {
  return (
    <>
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={null}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={null}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={null}>
        <EducationSection />
      </Suspense>
      <Suspense fallback={null}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={null}>
        <CertificationsSection />
      </Suspense>
      <Suspense fallback={null}>
        <AchievementsSection />
      </Suspense>
      <Suspense fallback={null}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={null}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}
