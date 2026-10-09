import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return NextResponse.json({ error: "missing url" }, { status: 400 });

  try {
    // Step 1: fetch thumbnail URL from oEmbed
    const oembedRes = await fetch(
      `https://www.instagram.com/api/v1/oembed/?url=${encodeURIComponent(url)}`,
      { headers: { "User-Agent": "Mozilla/5.0" }, next: { revalidate: 86400 } }
    );
    if (!oembedRes.ok) throw new Error("oembed failed");
    const data = await oembedRes.json();
    const thumbnailUrl: string = data.thumbnail_url;
    if (!thumbnailUrl) throw new Error("no thumbnail");

    // Step 2: proxy the image from Instagram CDN (avoids CORS)
    const imgRes = await fetch(thumbnailUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    if (!imgRes.ok) throw new Error("image fetch failed");

    const contentType = imgRes.headers.get("content-type") || "image/jpeg";
    const buffer = await imgRes.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    // Return a transparent 1x1 PNG as fallback
    return NextResponse.redirect(
      `https://picsum.photos/seed/${encodeURIComponent(url)}/600/800`
    );
  }
}
