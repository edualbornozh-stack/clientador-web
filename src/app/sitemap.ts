import type { MetadataRoute } from "next";
import { RUBROS_LIST } from "@/lib/rubros-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://clientador.com";
  const now = new Date();

  const rubroUrls: MetadataRoute.Sitemap = RUBROS_LIST.map((r) => ({
    url: `${base}/rubros/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...rubroUrls,
    {
      url: `${base}/sobre-nosotros`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/noticias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/noticias/como-implementar-ia-en-pymes`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/noticias/calculadora-costos-ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/terminos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/privacidad`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
