import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { posts } from "@/data/posts";
import { stateList } from "@/lib/cityData";

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
          The chai you<br />were born to drink.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Authentic recipes, regional stories, and the deep culture of chai across
          India. From Mumbai tapris to Varanasi ghats.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:opacity-80 transition-opacity"
          >
            Browse Recipes
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/available-locations"
            className="inline-flex items-center gap-2 px-4 py-2 border text-sm font-medium rounded-lg hover:bg-muted transition-colors"
          >
            <MapPin className="size-4" />
            Explore Locations
          </Link>
        </div>
      </section>

      {/* Featured recipes */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Recipes</h2>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            All recipes <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="border rounded-xl p-5 h-full hover:border-foreground/30 hover:shadow-sm transition-all">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Chai by Location</h2>
          <Link href="/available-locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            All locations <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stateList.map((state) => (
            <Link key={state.slug} href={`/${state.slug}`} className="group block">
              <div className="border rounded-xl p-5 hover:border-foreground/30 hover:shadow-sm transition-all flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="size-4 text-muted-foreground shrink-0" />
                  <span className="font-medium text-sm">{state.name}</span>
                </div>
                <ArrowRight className="size-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="border-t pt-10">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold mb-3">About Purecha</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Purecha documents the extraordinary diversity of chai culture across India.
            Every state has its own blend, every city its own ritual, every chai wallah
            their own secret. We write recipes that work, and stories that matter.
            No logins. No tracking. Just chai.
          </p>
        </div>
      </section>
    </div>
  );
}
