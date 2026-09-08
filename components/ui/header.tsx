import Link from "next/link";

import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header>
      <div className="flex h-16 items-center justify-between before:block">
        <div className="flex grow justify-end space-x-4">
          <ThemeToggle />
          <div>
            <Link className="btn-sm bg-sky-500 text-slate-100 hover:bg-sky-600" href="mailto:wthomasmiii@gmail.com">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
