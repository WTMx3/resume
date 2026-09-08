import Link from "next/link";

import { getBlogPosts } from "@/components/mdx/utils";

export default async function WidgetPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="dark:bg-gradient-href-t dark:href-slate-800/30 rounded-lg border border-slate-200 p-5 odd:rotate-1 even:-rotate-1 dark:border-slate-800 dark:from-slate-800">
      <div className="font-aspekta mb-3 font-[650]">Popular Posts</div>
      <ul className="space-y-3">
        {allBlogs.slice(0, 5).map((post, postIndex) => (
          <li key={postIndex} className="inline-flex">
            <span className="mr-2 text-sky-500">—</span>{" "}
            <Link
              key={postIndex}
              className="font-aspekta relative inline-flex text-sm font-[650] duration-150 ease-out before:absolute before:inset-0 before:-z-10 before:origin-center before:translate-y-1/4 before:scale-x-0 before:-rotate-2 before:bg-sky-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-sky-500 hover:before:scale-100 dark:before:bg-sky-500"
              href={`/posts/${post.slug}`}
            >
              {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
