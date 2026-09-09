import type { ReactNode } from "react";

export default function ResumeSection({
  children,
  id,
  title,
}: {
  children: ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section
      className="grid gap-6 border-t border-slate-200 py-10 md:grid-cols-[10.5rem_minmax(0,1fr)] md:gap-10 dark:border-slate-800"
      aria-labelledby={id}
    >
      <header>
        <h2 id={id} className="font-aspekta text-xl font-[650] tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
      </header>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
