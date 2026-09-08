export default function ContactCard() {
  return (
    <aside className="rounded-lg border border-slate-200 p-5 even:-rotate-1 odd:rotate-1 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30">
      <div className="font-aspekta mb-3 font-[650]">Contact</div>
      <address className="space-y-2 text-sm not-italic text-slate-500 dark:text-slate-400">
        <a className="block text-sky-500 hover:underline" href="mailto:wthomasmiii@gmail.com">
          wthomasmiii@gmail.com
        </a>
        <a className="block hover:text-sky-500" href="tel:+19727959884">
          (972) 795-9884
        </a>
        <a className="block hover:text-sky-500" href="https://www.millers.wiki" target="_blank" rel="noreferrer">
          millers.wiki
        </a>
      </address>
    </aside>
  );
}
