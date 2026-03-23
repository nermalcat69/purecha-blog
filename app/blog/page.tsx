import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "@/data/posts";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Chai & Tea Recipes — Purecha",
  description: "Authentic chai and tea recipes from across India. Masala chai, Kashmiri noon chai, cold brew Darjeeling, karak chai and more.",
  canonical: "/blog",
  keywords: ["chai recipes", "tea recipes", "masala chai recipe", "how to make chai"],
});

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Recipes & Blog</h1>
        <p className="text-muted-foreground">
          {posts.length} recipes — from everyday adrak chai to rare regional brews.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="border rounded-xl p-5 h-full hover:border-foreground/30 hover:shadow-sm transition-all">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-semibold leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-muted-foreground/60 flex gap-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <ArrowRight className="size-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
