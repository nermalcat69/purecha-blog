import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid gap-8 sm:grid-cols-3 text-sm">
          <div className="space-y-2">
            <p className="font-semibold">Purecha</p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Authentic chai and tea recipes from across India.
              No ads, no tracking. Just chai.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Explore</p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Recipes & Blog</Link></li>
              <li><Link href="/available-locations" className="hover:text-foreground transition-colors">Locations</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Locations</p>
            <ul className="space-y-1.5 text-muted-foreground">
              <li><Link href="/maharashtra" className="hover:text-foreground transition-colors">Maharashtra</Link></li>
              <li><Link href="/karnataka" className="hover:text-foreground transition-colors">Karnataka</Link></li>
              <li><Link href="/uttar-pradesh" className="hover:text-foreground transition-colors">Uttar Pradesh</Link></li>
              <li><Link href="/rajasthan" className="hover:text-foreground transition-colors">Rajasthan</Link></li>
              <li><Link href="/gujarat" className="hover:text-foreground transition-colors">Gujarat</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Purecha. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
