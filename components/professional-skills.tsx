import { getContentCollection } from "@/components/mdx/utils";

export default function ProfessionalSkills() {
  const groups = getContentCollection("skills");

  return (
    <section className="space-y-6" aria-labelledby="skills-heading">
      <div>
        <p className="mb-2 text-sm font-medium text-sky-500">Technical breadth</p>
        <h2 id="skills-heading" className="h2 font-aspekta text-slate-800 dark:text-slate-100">
          Professional Skills
        </h2>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50 text-xs tracking-wider text-slate-500 uppercase dark:bg-slate-800/60 dark:text-slate-400">
            <tr>
              <th className="w-[30%] px-5 py-3 font-medium">Discipline</th>
              <th className="px-5 py-3 font-medium">Tools and practices</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {groups.map((group) => (
              <tr key={group.slug} className="align-top transition-colors hover:bg-sky-50/40 dark:hover:bg-sky-500/5">
                <th scope="row" className="font-aspekta px-5 py-4 text-sm font-[650] text-slate-800 dark:text-slate-100">
                  {String(group.metadata.category)}
                </th>
                <td className="px-5 py-4">
                  <ul className="flex flex-wrap gap-1.5" aria-label={`${String(group.metadata.category)} skills`}>
                    {(group.metadata.items as string[]).map((skill) => (
                      <li key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
