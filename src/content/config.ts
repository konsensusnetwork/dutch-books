import { z, reference, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date_published: z.date(),
    date_updated: z.date(),
    tags: z.array(z.string()),
    author: z.string().optional(),
    isDraft: z.boolean().optional(),
    heroImage: z.string().optional(),

  }),
});

export const collections = {
  'articles': articles,
};