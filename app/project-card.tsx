import Link from "next/link";

export interface ProjectCardItem {
  slug: string;
  title: string;
  summary: string;
  status?: string;
  technologies?: string[];
}

export default function ProjectCard({ item }: { item: ProjectCardItem }) {
  return (
    <Link
      className="transition-color group rounded-lg border border-slate-200 p-5 ease-in-out hover:border-slate-300 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30 dark:hover:border-slate-700"
      href={`/projects/${item.slug}`}
    >
      <article className="flex h-full flex-col">
        <div className="grow">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="font-aspekta flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-xs font-[650] text-sky-500 dark:border-slate-700">
              {item.title
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 3)}
            </div>
            {item.status && (
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-500/10 dark:text-green-300">
                {item.status}
              </span>
            )}
          </div>
          <h2 className="font-aspekta mb-1 text-lg font-[650]">{item.title}</h2>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{item.summary}</p>
          {item.technologies && (
            <ul className="flex flex-wrap gap-1.5" aria-label={`${item.title} technologies`}>
              {item.technologies.slice(0, 5).map((technology) => (
                <li key={technology} className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4 flex justify-end text-sky-500">
          <svg className="-rotate-45 fill-current transition-transform ease-out group-hover:rotate-0" xmlns="http://www.w3.org/2000/svg" width="14" height="12" aria-hidden="true">
            <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
