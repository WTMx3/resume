import { getContentCollection } from "@/components/mdx/utils";

export default function WidgetSkills() {
  const highlightedSkills = getContentCollection("skills")
    .flatMap((group) => group.metadata.items as string[])
    .filter((skill) => ["Go", "Flutter", "React", "Next.js", "AWS", "Docker", "Kubernetes", "Terraform"].includes(skill));

  return (
    <div className="rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="font-aspekta mb-3 font-[650]">Core toolkit</div>
      <ul className="flex flex-wrap gap-2">
        {highlightedSkills.map((skill) => (
          <li key={skill} className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
