export interface Article {
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

export interface ArticlePostParams {
  url: string;
  category: string;
  ogImage: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
}

export interface OgData {
  ogImage: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
}
