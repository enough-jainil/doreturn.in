import { defineCollection, z } from 'astro:content';

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    bio: z.string(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    image: z.string(),
    categories: z.array(z.string()),
    author: z.string(),
    readingTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, authors };