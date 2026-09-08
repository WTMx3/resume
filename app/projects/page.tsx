import ContactCard from "@/components/contact-card";
import { getContentCollection } from "@/components/mdx/utils";
import WidgetSkills from "@/components/widget-skills";

import ProjectCard from "../project-card";

export const metadata = {
  title: "Portfolio",
  description: "Selected software engineering and platform projects by Thomas Miller.",
};

export default function Projects() {
  const projects = getContentCollection("projects");

  return (
    <div className="grow space-y-8 pt-12 pb-16 md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">
      <div className="grow">
        <div className="max-w-[700px]">
          <section aria-labelledby="portfolio-heading">
            <p className="mb-2 text-sm font-medium text-sky-500">Selected work</p>
            <h1 id="portfolio-heading" className="h1 font-aspekta mb-5">
              Portfolio
            </h1>
            <p className="mb-10 text-lg text-slate-500 dark:text-slate-400">
              Products and platforms that combine architecture, delivery automation, reliability, and practical user
              experience.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  item={{
                    slug: project.slug,
                    title: String(project.metadata.title),
                    summary: String(project.metadata.summary),
                    status: String(project.metadata.status),
                    technologies: project.metadata.technologies as string[],
                  }}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
        <div className="space-y-6">
          <WidgetSkills />
          <ContactCard />
        </div>
      </aside>
    </div>
  );
}
