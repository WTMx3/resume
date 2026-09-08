import ContactCard from "@/components/contact-card";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Leadership from "@/components/leadership";
import ProfessionalSkills from "@/components/professional-skills";
import WidgetSkills from "@/components/widget-skills";

export const metadata = {
  title: "Resume",
  description: "Thomas Miller's professional experience, technical skills, education, and engineering leadership.",
};

export default function Resume() {
  return (
    <div className="grow space-y-8 pt-12 pb-16 md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">
      <div className="grow">
        <div className="max-w-[700px]">
          <header className="mb-12">
            <p className="mb-2 text-sm font-medium text-sky-500">Senior Software Engineer</p>
            <h1 className="h1 font-aspekta mb-4">Thomas Miller</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Platform-focused engineer with 10+ years of experience across full-stack development, DevOps, site
              reliability, cloud infrastructure, application security, and technical leadership.
            </p>
          </header>
          <div className="space-y-12 text-slate-500 dark:text-slate-400">
            <Experience />
            <Education />
            <ProfessionalSkills />
            <Leadership />
          </div>
        </div>
      </div>
      <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
        <div className="space-y-6">
          <ContactCard />
          <WidgetSkills />
        </div>
      </aside>
    </div>
  );
}
