import Link from "next/link";

import { getContentCollection } from "@/components/mdx/utils";

import ThemeToggle from "./theme-toggle";

export default function Header() {
  const profile = getContentCollection("profile")[0];

  return (
    <header>
      <div className="flex h-16 items-center justify-between before:block">
        <div className="flex grow justify-end space-x-4">
          <ThemeToggle />
          <div>
            <Link
              className="btn-sm bg-sky-500 text-slate-100 hover:bg-sky-600"
              href={`mailto:${String(profile.metadata.email)}`}
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
