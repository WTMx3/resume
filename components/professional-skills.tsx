import { getContentCollection } from "@/components/mdx/utils";

export default function ProfessionalSkills() {
  const groups = getContentCollection("skills");

  return (
    <section className="space-y-6" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Professional Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.slug}
            className="rounded-lg border border-slate-200 p-4 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
          >
            <h3 className="font-aspekta mb-2 font-[650] text-slate-800 dark:text-slate-100">
              {String(group.metadata.category)}
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {(group.metadata.items as string[]).join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
