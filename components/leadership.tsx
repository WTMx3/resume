import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection } from "@/components/mdx/utils";

export default function Leadership() {
  const entries = getContentCollection("leadership");
  if (!entries.length) return null;

  return (
    <section className="space-y-6" aria-labelledby="leadership-heading">
      <h2 id="leadership-heading" className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Leadership
      </h2>
      {entries.map((entry) => (
        <article key={entry.slug} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800">
          <div className="mb-1 text-xs text-slate-500 uppercase">
            {String(entry.metadata.startDate)} · {String(entry.metadata.endDate)}
          </div>
          <h3 className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
            {String(entry.metadata.role)} · {String(entry.metadata.organization)}
          </h3>
          <div className="prose prose-sm mt-2 max-w-none text-slate-500 dark:text-slate-400">
            <CustomMDX source={entry.content} />
          </div>
        </article>
      ))}
    </section>
  );
}
