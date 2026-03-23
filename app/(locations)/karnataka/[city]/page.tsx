import Link from "next/link";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { getCityInfoFromSlugs, getRelatedCities, slugify } from "@/lib/cityData";
import { generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo-utils";
import { siteMetadata } from "@/data/siteMetadata";

export async function generateStaticParams() {
  const { getStateCities, slugify } = await import("@/lib/cityData");
  const cities = getStateCities("karnataka") || {};
  return Object.keys(cities).map((city) => ({ city: slugify(city) }));
}

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const info = getCityInfoFromSlugs("karnataka", city);
  if (!info) return {};
  return generatePageMetadata({
    title: `Chai Culture in ${info.city}, Karnataka | PurechaChai`,
    description: `Discover ${info.city}'s chai culture — ${info.teaSpecialty}. ${info.teaCulture.slice(0, 120)}...`,
    canonical: `/karnataka/${city}`,
    keywords: [`${info.city} chai`, `chai in ${info.city}`, `${info.city} tea`, "karnataka chai"],
  });
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const info = getCityInfoFromSlugs("karnataka", city);

  if (!info) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground">City not found.</p>
        <Link href="/karnataka" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="size-4" /> Back to Karnataka
        </Link>
      </div>
    );
  }

  const related = getRelatedCities("karnataka", city);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: siteMetadata.siteUrl },
    { name: "Karnataka", url: `${siteMetadata.siteUrl}/karnataka` },
    { name: info.city, url: `${siteMetadata.siteUrl}/karnataka/${city}` },
  ]);
  const faqSchema = generateFAQSchema(info.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/karnataka" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="size-4" /> Karnataka
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="size-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Karnataka</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{info.city}</h1>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">{info.teaSpecialty}</p>
          <p className="text-muted-foreground leading-relaxed">{info.teaCulture}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="size-4 text-muted-foreground" />
              <h2 className="font-medium text-sm">Best Time for Chai</h2>
            </div>
            <p className="text-sm text-muted-foreground">{info.bestTimeForChai}</p>
          </div>
          <div className="border rounded-xl p-5">
            <h2 className="font-medium text-sm mb-3">Local Brews</h2>
            <ul className="space-y-1">
              {info.localBrews.map((brew) => (
                <li key={brew} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="size-1 rounded-full bg-muted-foreground/40 inline-block shrink-0" />
                  {brew}
                </li>
              ))}
            </ul>
          </div>
          <div className="border rounded-xl p-5 sm:col-span-2">
            <h2 className="font-medium text-sm mb-3">Popular Chai Spots</h2>
            <div className="flex flex-wrap gap-2">
              {info.popularSpots.map((spot) => (
                <span key={spot} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground">
                  {spot}
                </span>
              ))}
            </div>
          </div>
        </div>

        {info.faqs.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4">Frequently Asked</h2>
            <div className="space-y-4">
              {info.faqs.map((faq) => (
                <div key={faq.question} className="border rounded-xl p-5">
                  <p className="font-medium text-sm mb-2">{faq.question}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {info.nearbyAreas.length > 0 && (
          <div className="mb-10">
            <h2 className="text-sm font-medium text-muted-foreground mb-3">Nearby Areas</h2>
            <div className="flex flex-wrap gap-2">
              {info.nearbyAreas.map((area) => (
                <span key={area} className="text-xs px-3 py-1 border rounded-full text-muted-foreground">
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="border-t pt-8">
            <h2 className="text-base font-semibold mb-4">More cities in Karnataka</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {related.map((c) => (
                <Link key={c.city} href={`/karnataka/${slugify(c.city)}`} className="group border rounded-lg p-4 hover:border-foreground/30 transition-all">
                  <p className="font-medium text-sm">{c.city}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.teaSpecialty}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
