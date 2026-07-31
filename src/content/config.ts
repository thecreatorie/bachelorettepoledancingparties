import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Site Author'),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      draft: z.boolean().default(false),
      canonicalUrl: z.string().url().optional(),
      // Original Squarespace/Wix/Webflow URL — used by seo-ai-optimize to generate
      // the 301 redirect map after migration.
      legacyUrl: z.string().optional(),
    }),
});

export const collections = { blog };
