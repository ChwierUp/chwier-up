export type FetchArticlesParams = {
  keyword: string | number | readonly string[] | undefined;
  page?: number;
  limit?: number;
  totalCount?: number;
  totalPages?: number;
};

export interface ArticleResponseType {
  article_id: string;
  user_id: string;
  user_name: string;
  title: string;
  url: string;
  user_image: string;
  created_at: string;
  updated_at: string;
  content: string;
  category: string;
}

export interface ArticlePageResponseType {
  articles: ArticleResponseType[]; // ArticleResponseType 배열
  params: FetchArticlesParams; // FetchArticlesParams 타입
}

export interface ArticlePostRequestType {
  url: string;
  category: string;
  ogImage: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
}
