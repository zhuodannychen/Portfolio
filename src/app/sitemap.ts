import { MetadataRoute } from 'next'

export async function generateStaticParams() {
  return [
    { __metadata_id__: [] },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dannychen.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}