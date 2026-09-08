import ContactCard from "@/components/contact-card";
import Experience from "@/components/experience";
import FeaturedProjects from "@/components/featured-projects";
import Hero from "@/components/hero";
import WidgetSkills from "@/components/widget-skills";

export const metadata = {
  title: "Senior Software Engineer",
  description: "Thomas Miller's software engineering portfolio, experience, platform work, and technical skills.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grow space-y-8 pb-16 md:flex md:space-y-0 md:space-x-8 md:pb-20">
        <div className="grow">
          <div className="max-w-[700px] space-y-12">
            <Experience limit={2} showDetails={false} />
            <FeaturedProjects />
          </div>
        </div>
        <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
          <div className="space-y-6">
            <WidgetSkills />
            <ContactCard />
          </div>
        </aside>
      </div>
    </>
  );
}
