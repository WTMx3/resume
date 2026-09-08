import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection } from "@/components/mdx/utils";

export default function Education() {
  const education = getContentCollection("education");
  if (!education.length) return null;

  return (
    <section className="space-y-8" aria-labelledby="education-heading">
      <h2 id="education-heading" className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Education
      </h2>
      <ol className="space-y-8">
        {education.map((entry) => (
          <li className="group relative" key={entry.slug}>
            <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 group-last-of-type:before:hidden dark:before:bg-slate-800">
              <div className="font-aspekta absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-[650] text-sky-500 dark:border-slate-800 dark:bg-slate-900">
                {String(entry.metadata.institution).slice(0, 1)}
              </div>
              <div className="min-w-0 space-y-1 pl-20">
                <div className="text-xs text-slate-500 uppercase">
                  {String(entry.metadata.startDate)} <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                  {String(entry.metadata.endDate)}
                </div>
                <h3 className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                  {String(entry.metadata.degree)}
                  {entry.metadata.field ? `, ${String(entry.metadata.field)}` : ""}
                </h3>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {String(entry.metadata.institution)}
                </div>
                <div className="prose prose-sm max-w-none pt-2 text-slate-500 dark:text-slate-400">
                  <CustomMDX source={entry.content} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
