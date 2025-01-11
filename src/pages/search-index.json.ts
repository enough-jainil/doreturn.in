import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  const searchIndex = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    categories: post.data.categories,
    image: post.data.image,
    slug: post.slug,
    pubDate: post.data.pubDate.toISOString(),
  }));

  return new Response(JSON.stringify(searchIndex), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
