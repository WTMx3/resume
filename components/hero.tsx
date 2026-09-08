import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection } from "@/components/mdx/utils";

export default function Hero() {
  const profile = getContentCollection("profile")[0];

  return (
    <section>
      <div className="max-w-[700px]">
        <div className="pt-8 pb-10">
          <div
            className="font-aspekta mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-sm font-[650] tracking-wider text-white shadow-sm shadow-sky-500/20"
            aria-hidden="true"
          >
            TM
          </div>
          <h1 className="h1 font-aspekta mb-5">
            I build reliable software and the{" "}
            <span className="relative inline-flex text-sky-500 before:absolute before:inset-0 before:-z-10 before:translate-y-1/4 before:-rotate-2 before:bg-sky-200 before:opacity-30 dark:before:bg-sky-500">
              systems behind them.
            </span>
          </h1>
          <div className="prose prose-lg prose-p:leading-relaxed max-w-none text-slate-500 dark:text-slate-400">
            <CustomMDX source={profile.content} />
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a className="text-sky-500 hover:underline" href={`mailto:${String(profile.metadata.email)}`}>
              {String(profile.metadata.email)}
            </a>
            <a
              className="text-slate-500 hover:text-sky-500 dark:text-slate-400"
              href={String(profile.metadata.website)}
              target="_blank"
              rel="noreferrer"
            >
              {String(profile.metadata.websiteLabel)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
