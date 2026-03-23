import Link from "next/link";
import { MapPin, ArrowLeft, MessageCircle } from "lucide-react";
import { getStateCities, slugify } from "@/lib/cityData";
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/seo-utils";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata = generatePageMetadata({
  title: "Bulk Chai Supplier in Maharashtra — Mumbai, Pune, Nagpur | Purecha",
  description: "Purecha supplies wholesale bulk chai to hotels, restaurants, canteens, and businesses across Maharashtra. Serving Mumbai, Pune, Nagpur, and more.",
  canonical: "/maharashtra",
  keywords: ["bulk chai maharashtra", "wholesale chai mumbai", "bulk tea supplier pune", "chai supplier maharashtra"],
});

export default function MaharashtraPage() {
  const cities = getStateCities("maharashtra") || {};
  const cityList = Object.values(cities);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.siteUrl },
    { name: "Maharashtra", url: `${siteMetadata.siteUrl}/maharashtra` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/available-locations" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="size-4" /> All locations
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="size-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground uppercase tracking-widest">State</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">Maharashtra</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            We supply bulk chai to businesses across Maharashtra — from high-volume cutting chai
            operations in Mumbai to corporate canteens in Pune and food processing units in Nagpur.
            Wholesale pricing available for hotels, restaurants, institutional buyers, and FMCG brands.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cityList.map((city) => (
            <div
              key={city.city}
              className="border rounded-xl p-5 hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              <h2 className="font-semibold mb-1">{city.city}</h2>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">{city.teaSpecialty}</p>
              <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">{city.teaCulture}</p>
              <div className="flex gap-2 flex-wrap">
                <Link
                  href={`/maharashtra/${slugify(city.city)}`}
                  className="text-xs px-2.5 py-1.5 border rounded-lg hover:bg-muted transition-colors"
                >
                  Details
                </Link>
                <a
                  href={`https://wa.me/${siteMetadata.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like a bulk chai price quote for ${city.city}, Maharashtra.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="size-3" />
                  Ask for Price Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
