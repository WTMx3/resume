import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CustomMDX } from "@/components/mdx/mdx";
import { getBlogPosts } from "@/components/mdx/utils";
import PostDate from "@/components/post-date";

export async function generateStaticParams() {
  const allBlogs = getBlogPosts();

  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  return {
    title: String(post.metadata.title),
    description: String(post.metadata.summary),
  };
}

export default async function SinglePost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) notFound();

  return (
    <div className="grow pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-[760px]">
          {/* Back */}
          <div className="mb-3">
            <Link
              className="inline-flex rounded-full border border-slate-200 text-sky-500 dark:border-slate-800 dark:bg-linear-to-t dark:from-slate-800 dark:to-slate-800/30"
              href="/"
            >
              <span className="sr-only">Back</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
                <path
                  className="fill-current"
                  d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"
                />
              </svg>
            </Link>
          </div>

          <article>
            {/* Post header */}
            <header>
              <div className="mb-1 flex items-center justify-between">
                {/* Post date */}
                <div className="text-xs text-slate-500 uppercase">
                  <span className="text-sky-500">—</span>{" "}
                  <PostDate dateString={String(post.metadata.publishedAt)} />{" "}
                  <span className="text-slate-400 dark:text-slate-600">·</span> 4 Min read
                </div>
                {/* Share buttons */}
                <ul className="inline-flex">
                  <li>
                    <a
                      className="flex items-center justify-center text-slate-400 transition duration-150 ease-in-out hover:text-sky-500 dark:text-slate-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Twitter"
                    >
                      <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center text-slate-400 transition duration-150 ease-in-out hover:text-sky-500 dark:text-slate-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Facebook"
                    >
                      <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center text-slate-400 transition duration-150 ease-in-out hover:text-sky-500 dark:text-slate-500 dark:hover:text-sky-500"
                      href="#0"
                      aria-label="Share"
                    >
                      <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 className="h1 font-aspekta mb-4">{post.metadata.title}</h1>
            </header>
            <div className="prose prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-pre:bg-slate-800 dark:prose-code:text-slate-200 max-w-none text-slate-500 dark:text-slate-400">
              <CustomMDX source={post.content} />
            </div>
          </article>
      </div>
    </div>
  );
}
