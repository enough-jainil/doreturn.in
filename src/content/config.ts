import { defineCollection, z } from "astro:content";
import { image } from "astro:assets";

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    bio: z.string(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      image: image(),
      categories: z.array(z.string()),
      author: z.string(),
      readingTime: z.number(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog, authors };
