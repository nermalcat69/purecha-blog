import Link from "next/link";
import { MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { getAllCities, slugify, stateList } from "@/lib/cityData";
import { generatePageMetadata } from "@/lib/seo-utils";
import { siteMetadata } from "@/data/siteMetadata";

export const metadata = generatePageMetadata({
  title: "Bulk Chai Supply Locations Across India — Purecha",
  description: "Purecha supplies wholesale bulk chai to businesses across India. Browse cities and states we serve — hotels, restaurants, canteens, and FMCG brands welcome.",
  canonical: "/available-locations",
  keywords: ["bulk chai supply india", "wholesale chai by city", "bulk tea supplier india", "chai supplier by state"],
});

export default function AvailableLocationsPage() {
  const allCities = getAllCities();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Bulk Chai Supply — Locations We Serve</h1>
        <p className="text-muted-foreground max-w-xl">
          We deliver wholesale chai to hotels, restaurants, canteens, and businesses across India.
          Select your city to get sourcing details or request a price quote directly on WhatsApp.
        </p>
      </div>

      <div className="space-y-10">
        {stateList.map((state) => {
          const cities = allCities[state.name] || {};
          const cityList = Object.values(cities);

          return (
            <section key={state.slug}>
              <div className="flex items-center justify-between mb-4">
                <Link
                  href={`/${state.slug}`}
                  className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <MapPin className="size-4 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">{state.name}</h2>
                  <ArrowRight className="size-4 text-muted-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <span className="text-xs text-muted-foreground">{cityList.length} cities</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cityList.map((city) => (
                  <div
                    key={city.city}
                    className="border rounded-xl p-4 hover:border-foreground/20 hover:shadow-sm transition-all"
                  >
                    <p className="font-medium text-sm mb-1">{city.city}</p>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {city.teaSpecialty} · Bulk supply available
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href={`/${state.slug}/${slugify(city.city)}`}
                        className="text-xs px-2.5 py-1.5 border rounded-lg hover:bg-muted transition-colors"
                      >
                        Details
                      </Link>
                      <a
                        href={`https://wa.me/${siteMetadata.whatsappNumber}?text=${encodeURIComponent(`Hi, I'd like a bulk chai price quote for ${city.city}, ${state.name}.`)}`}
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
            </section>
          );
        })}
      </div>
    </div>
  );
}
