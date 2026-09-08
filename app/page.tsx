import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import ProfessionalSkills from "@/components/professional-skills";

export const metadata = {
  title: "Senior Software Engineer",
  description: "Thomas Miller's software engineering portfolio, experience, platform work, and technical skills.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grow max-w-[920px] space-y-14 pb-16 md:pb-20">
        <ProfessionalSkills />
        <Experience limit={2} showDetails={false} />
        <FeaturedProjects />
      </div>
    </>
  );
}
