import { MetadataRoute } from "next";
import { siteMetadata } from "@/data/siteMetadata";
import { getAllCityPages, stateList } from "@/lib/cityData";
import { getAllSlugs } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMetadata.siteUrl;
  const today = new Date().toISOString().split("T")[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: today, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/available-locations`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
  ];

  const stateRoutes: MetadataRoute.Sitemap = stateList.map((state) => ({
    url: `${base}/${state.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = getAllCityPages().map(({ state, city }) => ({
    url: `${base}/${state}/${city}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: today,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...stateRoutes, ...cityRoutes, ...blogRoutes];
}
