import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection } from "@/components/mdx/utils";
import ResumeSection from "@/components/resume-section";

export default function Leadership() {
  const entries = getContentCollection("leadership");
  if (!entries.length) return null;

  return (
    <ResumeSection id="leadership-heading" title="Leadership">
      <div className="divide-y divide-slate-200 dark:divide-slate-800">
        {entries.map((entry) => (
          <article key={entry.slug} className="py-7 first:pt-0 last:pb-0">
            <header className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
              <div>
                <h3 className="font-aspekta text-lg font-[650] text-slate-900 dark:text-white">
                  {String(entry.metadata.role)}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {String(entry.metadata.organization)}
                </p>
              </div>
              <p className="text-sm whitespace-nowrap text-slate-500 dark:text-slate-400">
                {String(entry.metadata.startDate)} · {String(entry.metadata.endDate)}
              </p>
            </header>
            <div className="prose prose-sm mt-4 max-w-none leading-relaxed text-slate-600 dark:text-slate-400">
              <CustomMDX source={entry.content} />
            </div>
          </article>
        ))}
      </div>
    </ResumeSection>
  );
}
