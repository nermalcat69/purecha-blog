import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { posts, getPostBySlug, getAllSlugs } from "@/data/posts";
import { generatePageMetadata, generateBreadcrumbSchema, generateRecipeArticleSchema } from "@/lib/seo-utils";
import { siteMetadata } from "@/data/siteMetadata";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: `${post.title} — Purecha`,
    description: post.excerpt,
    canonical: `/blog/${slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="text-muted-foreground">Recipe not found.</p>
        <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-sm hover:text-foreground text-muted-foreground transition-colors">
          <ArrowLeft className="size-4" /> Back to recipes
        </Link>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.siteUrl },
    { name: "Recipes", url: `${siteMetadata.siteUrl}/blog` },
    { name: post.title, url: `${siteMetadata.siteUrl}/blog/${slug}` },
  ]);

  const articleSchema = generateRecipeArticleSchema(
    post.title,
    post.excerpt,
    `${siteMetadata.siteUrl}/blog/${slug}`,
    post.date
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="size-4" />
          All recipes
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold tracking-tight leading-snug mb-3">
            {post.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="mt-4 flex gap-4 text-xs text-muted-foreground/60 border-t pt-4">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h3:text-base prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-table:text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Other recipes */}
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-base font-semibold mb-4">More recipes</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group border rounded-lg p-4 hover:border-foreground/30 transition-all"
                >
                  <p className="text-sm font-medium group-hover:text-foreground/80 transition-colors leading-snug">
                    {p.title}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">{p.readTime}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
