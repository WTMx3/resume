export default function Hero() {
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
          <p className="text-lg text-slate-500 dark:text-slate-400">
            I&apos;m Thomas Miller, a senior software engineer specializing in platform engineering, DevOps, site
            reliability, cloud infrastructure, and secure full-stack systems.
          </p>
        </div>
      </div>
    </section>
  );
}
