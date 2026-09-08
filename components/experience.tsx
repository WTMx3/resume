import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection } from "@/components/mdx/utils";

export default function Experience({ limit, showDetails = true }: { limit?: number; showDetails?: boolean }) {
  const roles = getContentCollection("experience").slice(0, limit);

  return (
    <section className="space-y-8" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Job History
      </h2>
      <ol className="space-y-8">
        {roles.map((role) => (
          <li className="group relative" key={role.slug}>
            <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 group-last-of-type:before:hidden dark:before:bg-slate-800">
              <div className="font-aspekta absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-[650] text-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30">
                {String(role.metadata.company)
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 3)}
              </div>
              <div className="min-w-0 space-y-1 pl-20">
                <div className="text-xs text-slate-500 uppercase">
                  {String(role.metadata.startDate)} <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                  {String(role.metadata.endDate)}
                </div>
                <h3 className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                  {String(role.metadata.role)}
                </h3>
                <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {String(role.metadata.company)}
                  {role.metadata.location ? ` · ${String(role.metadata.location)}` : ""}
                </div>
                {showDetails ? (
                  <div className="prose prose-sm prose-p:leading-normal prose-li:my-1 prose-strong:font-medium prose-strong:text-slate-700 dark:prose-strong:text-slate-200 max-w-none pt-2 text-slate-500 dark:text-slate-400">
                    <CustomMDX source={role.content} />
                  </div>
                ) : (
                  <p className="pt-1 text-sm text-slate-500 dark:text-slate-400">{String(role.metadata.summary)}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
