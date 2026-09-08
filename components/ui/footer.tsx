export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="py-8 text-center text-sm text-slate-500 md:flex md:items-center md:justify-between dark:text-slate-400">
        <p>© {new Date().getFullYear()} Thomas Miller</p>
        <nav className="mt-3 flex justify-center gap-4 md:mt-0" aria-label="Footer">
          <a className="hover:text-sky-500" href="mailto:wthomasmiii@gmail.com">
            Email
          </a>
          <a className="hover:text-sky-500" href="https://www.millers.wiki" target="_blank" rel="noreferrer">
            millers.wiki
          </a>
          <a className="hover:text-sky-500" href="https://github.com/baas-dev/eazyhq" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
