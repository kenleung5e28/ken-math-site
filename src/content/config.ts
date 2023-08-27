import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postCollection,
};
