import {
  ArticlePostRequestType,
  ArticleResponseType,
  FetchArticlesParams,
} from "@/types/dto/article";
import { OgDataResponseType } from "@/types/dto/OgData";

export const fetchOgData = async (target: string) => {
  try {
    const response = await fetch(
      `/api/getOgData?url=${encodeURIComponent(target)}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch OG data");
    }
    const ogData: OgDataResponseType = await response.json();

    return ogData;
  } catch (error) {
    console.error("Error in getOgImage:", error);

    return { ogImage: null, ogTitle: null, ogDescription: null };
  }
};

export const fetchArticles = async ({
  page = 1,
  limit = 10,
  keyword,
}: FetchArticlesParams): Promise<ArticleResponseType> => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  if (keyword) {
    params.append("keyword", keyword);
  }

  const response = await fetch(`/api/articles?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return await response.json();
};

export const addArticle = async (newArticle: ArticlePostRequestType) => {
  const res = await fetch("/api/articles/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });
  if (!res.ok) throw new Error("Network response was not ok");

  return res.json();
};
