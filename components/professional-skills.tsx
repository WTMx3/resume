import { getContentCollection } from "@/components/mdx/utils";
import ResumeSection from "@/components/resume-section";

export default function ProfessionalSkills() {
  const groups = getContentCollection("skills");

  return (
    <ResumeSection id="skills-heading" title="Professional Skills">
      <div className="overflow-hidden border-y border-slate-200 dark:border-slate-800">
        <table className="w-full border-collapse text-left">
          <thead className="text-xs tracking-wider text-slate-500 uppercase dark:text-slate-400">
            <tr>
              <th className="w-[30%] px-5 py-3 font-medium">Discipline</th>
              <th className="px-5 py-3 font-medium">Tools and practices</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {groups.map((group) => (
              <tr key={group.slug} className="align-top">
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
    </ResumeSection>
  );
}
