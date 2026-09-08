import { getContentCollection } from "@/components/mdx/utils";

export default function ContactCard() {
  const profile = getContentCollection("profile")[0];

  return (
    <aside className="rounded-lg border border-slate-200 p-5 even:-rotate-1 odd:rotate-1 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="font-aspekta mb-3 font-[650]">Contact</div>
      <address className="space-y-2 text-sm not-italic text-slate-500 dark:text-slate-400">
        <a className="block text-sky-500 hover:underline" href={`mailto:${String(profile.metadata.email)}`}>
          {String(profile.metadata.email)}
        </a>
        <a className="block hover:text-sky-500" href={`tel:${String(profile.metadata.phoneHref)}`}>
          {String(profile.metadata.phone)}
        </a>
        <a
          className="block hover:text-sky-500"
          href={String(profile.metadata.website)}
          target="_blank"
          rel="noreferrer"
        >
          {String(profile.metadata.websiteLabel)}
        </a>
      </address>
    </aside>
  );
}
