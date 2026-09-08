"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavigation() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar sticky top-0 h-screen w-16 shrink-0 overflow-y-auto border-r border-slate-200 md:w-24 dark:border-slate-800">
      <div className="flex h-full flex-col justify-between after:mt-auto after:flex-1">
        <div className="flex-1">
          {pathname !== "/" && (
            <div className="my-4 flex justify-center">
              <Link
                className="font-aspekta flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-[10px] font-[650] text-white"
                href="/"
                aria-label="Thomas Miller home"
              >
                TM
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-1 grow items-center">
          <nav className="w-full">
            <ul className="space-y-4">
              <li className="py-2">
                <Link
                  href="/"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname !== "/about" &&
                    pathname !== "/projects" &&
                    pathname !== "/resume"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Home</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="21" height="19">
                    <path fillOpacity=".16" d="M4 7v11h13V7l-6.5-5z" />
                    <path d="m10.433 3.242-8.837 6.56L.404 8.198l10.02-7.44L20.59 8.194l-1.18 1.614-8.977-6.565ZM16 17V9h2v10H3V9h2v8h11Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/about"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/about"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">About</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fillOpacity=".16" d="M10 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                    <path d="M9 5h2v2H9V5Zm0 4h2v6H9V9Zm1-9C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/projects"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/projects"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Projects</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path fillOpacity=".16" d="M1 4h18v10H1z" />
                    <path d="M8 3h4V2H8v1ZM6 3V0h8v3h6v12H0V3h6ZM2 5v8h16V5H2Zm14 13v-2h2v4H2v-4h2v2h12Z" />
                  </svg>
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/resume"
                  className={`relative flex h-6 w-full items-center justify-center after:absolute after:top-0 after:right-0 after:bottom-0 after:w-0.5 ${
                    pathname === "/resume"
                      ? "text-sky-500 after:bg-sky-500"
                      : "text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                  }`}
                >
                  <span className="sr-only">Resume</span>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="20">
                    <path fillOpacity=".16" fillRule="nonzero" d="M1 5h16v14H1z" />
                    <path fillRule="nonzero" d="M2 6v12h14V6H2Zm16-2v16H0V4h18ZM2 2V0h14v2H2Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
