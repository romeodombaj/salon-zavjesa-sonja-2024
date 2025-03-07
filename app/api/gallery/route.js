export const runtime = "edge";

import { getGallery } from "@/lib/gallery"; // Assuming this function gets data from your database

export async function GET(req) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug");

  try {
    const galleryData = await getGallery(slug);
    return new Response(JSON.stringify(galleryData), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
