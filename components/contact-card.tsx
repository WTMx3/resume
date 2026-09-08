import { getContentCollection } from "@/components/mdx/utils";

export default function ContactCard() {
  const profile = getContentCollection("profile")[0];
  const name = String(profile.metadata.name);
  const role = String(profile.metadata.role);
  const tagline = String(profile.metadata.tagline);

  return (
    <aside className="w-full shrink-0 px-4 pt-4 lg:w-72 lg:px-5 lg:py-6 xl:w-80" aria-label="Contact and site navigation">
      <div className="border-slate-200/80 bg-white/95 shadow-slate-200/60 sticky top-4 overflow-hidden rounded-2xl border shadow-xl shadow-slate-200/50 backdrop-blur lg:top-6 dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-none">
        <div className="border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="font-aspekta text-xl font-[650] text-slate-900 dark:text-white">{name}</h2>
            <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-400">{role}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{tagline}</p>
          </div>
        </div>

        <div className="p-5">
          <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500">
            Contact
          </p>
          <address className="space-y-3 text-sm not-italic text-slate-600 dark:text-slate-300">
            <a
              className="group flex items-start gap-3 hover:text-sky-600 dark:hover:text-sky-400"
              href={`mailto:${String(profile.metadata.email)}`}
            >
              <svg className="mt-0.5 h-4 w-4 shrink-0 fill-current text-sky-500" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2.5 4.5h15v11h-15v-11Zm1.8 1.5L10 10.2 15.7 6H4.3Zm11.7 8V7.8l-6 4.4-6-4.4V14h12Z" />
              </svg>
              <span className="min-w-0 break-all">{String(profile.metadata.email)}</span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-sky-600 dark:hover:text-sky-400"
              href={`tel:${String(profile.metadata.phoneHref)}`}
            >
              <svg className="h-4 w-4 shrink-0 fill-current text-sky-500" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5.1 2.5 7.4 7 5.8 8.2c.9 2.1 2 3.2 4.1 4.1l1.2-1.6 4.5 2.3-.7 3c-.2.8-.9 1.3-1.7 1.3C7.4 17.3 2.7 12.6 2.7 6.8c0-.8.5-1.5 1.3-1.7l1.1-2.6Z" />
              </svg>
              <span>{String(profile.metadata.phone)}</span>
            </a>
            <a
              className="flex items-center gap-3 hover:text-sky-600 dark:hover:text-sky-400"
              href={String(profile.metadata.website)}
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-4 w-4 shrink-0 fill-current text-sky-500" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 1.8a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Zm5.9 7.4h-2.6a12.5 12.5 0 0 0-1.1-4.8 6.7 6.7 0 0 1 3.7 4.8ZM10 3.3c.8 1 1.6 3 1.8 5.9H8.2C8.4 6.3 9.2 4.3 10 3.3ZM7.8 4.4a12.5 12.5 0 0 0-1.1 4.8H4.1a6.7 6.7 0 0 1 3.7-4.8Zm-3.7 6.3h2.6c.1 1.9.5 3.6 1.1 4.9a6.7 6.7 0 0 1-3.7-4.9Zm5.9 6c-.8-1-1.6-3-1.8-6h3.6c-.2 3-1 5-1.8 6Zm2.2-1.1c.6-1.3 1-3 1.1-4.9h2.6a6.7 6.7 0 0 1-3.7 4.9Z" />
              </svg>
              <span>{String(profile.metadata.websiteLabel)}</span>
            </a>
          </address>

          <a
            className="mt-5 flex w-full items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sky-500/20 transition-colors hover:bg-sky-600"
            href={`mailto:${String(profile.metadata.email)}`}
          >
            Send me an email
          </a>

        </div>
      </div>
    </aside>
  );
}
