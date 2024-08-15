// app/api/getOgData/route.ts
import https from "https";
import { NextResponse } from "next/server";

interface OgData {
  ogImage: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const html = await new Promise<string>((resolve, reject) => {
      https
        .get(url, (response) => {
          let data = "";
          response.on("data", (chunk) => {
            data += chunk;
          });
          response.on("end", () => {
            resolve(data);
          });
        })
        .on("error", (err) => {
          reject(err);
        });
    });

    const getMetaContent = (property: string): string | null => {
      const regex = new RegExp(
        `<meta[^>]*(?:property|name)=["\\']${property}["\\'][^>]*content=["\\']([^"\\']*)["\\']`,
        "i",
      );
      const match = html.match(regex);

      return match ? match[1] : null;
    };

    const ogData: OgData = {
      ogImage: getMetaContent("og:image"),
      ogTitle: getMetaContent("og:title"),
      ogDescription: getMetaContent("og:description"),
    };

    return NextResponse.json(ogData);
  } catch (error) {
    console.error("Error fetching OG data:", error);

    return NextResponse.json(
      { error: "Failed to fetch OG data" },
      { status: 500 },
    );
  }
}
