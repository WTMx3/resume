import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ContactCard from "@/components/contact-card";
import { CustomMDX } from "@/components/mdx/mdx";
import { getContentCollection, getContentEntry } from "@/components/mdx/utils";

export function generateStaticParams() {
  return getContentCollection("projects").map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getContentEntry("projects", slug);
  if (!project) return {};

  return {
    title: String(project.metadata.title),
    description: String(project.metadata.summary),
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getContentEntry("projects", slug);
  if (!project) notFound();

  const technologies = project.metadata.technologies as string[];

  return (
    <div className="grow space-y-8 pt-12 pb-16 md:flex md:space-y-0 md:space-x-8 md:pt-16 md:pb-20">
      <div className="grow">
        <article className="max-w-[700px]">
          <Link className="mb-5 inline-flex text-sm font-medium text-sky-500 hover:underline" href="/projects">
            ← Back to portfolio
          </Link>
          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
              <span>{String(project.metadata.role)}</span>
              <span aria-hidden="true">·</span>
              <span>{String(project.metadata.startedAt)}</span>
              <span aria-hidden="true">·</span>
              <span className="text-green-600 dark:text-green-400">{String(project.metadata.status)}</span>
            </div>
            <h1 className="h1 font-aspekta mb-4">{String(project.metadata.title)}</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400">{String(project.metadata.summary)}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project technologies">
              {technologies.map((technology) => (
                <li key={technology} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                  {technology}
                </li>
              ))}
            </ul>
          </header>
          <div className="prose prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 max-w-none text-slate-500 dark:text-slate-400">
            <CustomMDX source={project.content} />
          </div>
          <a className="btn-sm mt-8 inline-flex bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white" href={String(project.metadata.repositoryUrl)} target="_blank" rel="noreferrer">
            View repository
          </a>
        </article>
      </div>
      <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
        <ContactCard />
      </aside>
    </div>
  );
}
