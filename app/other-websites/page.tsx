import { ExternalLink } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Other Websites — Purecha",
  description: "Other websites by the team behind Purecha — bulk chai, CTC tea, and Graycup.",
  canonical: "/other-websites",
  keywords: ["bulk chai", "CTC tea", "graycup", "b2b chai", "wholesale tea india"],
});

const websites = [
  {
    name: "BulkChai.com",
    url: "https://bulkchai.com",
    description: "India's wholesale chai marketplace. Source bulk CTC, green, and specialty teas directly from gardens and blenders.",
  },
  {
    name: "BulkCTC.com",
    url: "https://bulkctc.com",
    description: "Dedicated to bulk CTC tea procurement — grades, pricing, and supplier connections for tea factories and packers.",
  },
  {
    name: "Graycup.org",
    url: "https://graycup.org",
    description: "The Graycup community hub — open resources, tools, and projects around tea culture and supply chains.",
  },
  {
    name: "Graycup.in",
    url: "https://graycup.in",
    description: "Graycup India — local resources and market insights for the Indian chai and tea industry.",
  },
  {
    name: "B2B.Graycup.in",
    url: "https://b2b.graycup.in",
    description: "B2B platform by Graycup — connecting tea buyers and sellers across India for bulk trade.",
  },
];

export default function OtherWebsitesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Other Websites</h1>
        <p className="text-muted-foreground">
          More projects from the team behind Purecha — wholesale chai, CTC tea, and trade tools.
        </p>
      </div>

      <div className="grid gap-4">
        {websites.map((site) => (
          <a
            key={site.url}
            href={site.url}
            target="_blank"
            rel="noopener"
            className="group flex items-start gap-4 border rounded-xl p-5 hover:border-foreground/30 hover:shadow-sm transition-all"
          >
            <div className="mt-0.5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
              <ExternalLink className="size-5" />
            </div>
            <div className="min-w-0">
              <div className="font-semibold leading-snug mb-1 group-hover:text-foreground/80 transition-colors">
                {site.name}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {site.description}
              </p>
              <span className="mt-2 inline-block text-xs text-muted-foreground/50">
                {site.url}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
