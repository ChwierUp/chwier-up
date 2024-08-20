/* eslint-disable no-console */
"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CategorySelectMenu from "@/components/category-select-menu/CategorySelectMenu";
import {
  ArticlePageResponseType,
  ArticleResponseType,
  FetchArticlesParams,
} from "@/types/dto/article";
import { addArticle, fetchArticles, fetchOgData } from "../_api";

export default function Category() {
  const queryClient = useQueryClient();
  const [params, setParams] = useState<FetchArticlesParams>({
    page: 1,
    limit: 10,
    keyword: "",
  });

  const {
    data: articles,
    isLoading,
    error,
  }: {
    data: ArticlePageResponseType | undefined; // articles가 배열 또는 undefined일 수 있음을 명시
    isLoading: boolean;
    error: Error | null; // 에러 타입 정의
  } = useQuery({
    queryKey: ["articles", params],
    queryFn: () => fetchArticles(params),
  });

  console.log(articles);

  const mutation = useMutation({
    mutationFn: addArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });

  const [form, setForm] = useState({
    url: "",
    category: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const ogData = (url: string) => {
    return fetchOgData(url);
  };

  const handleDelete = async (articleId: string) => {
    try {
      const response = await fetch(`/api/articles/delete?id=${articleId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // 필요한 경우 인증 헤더 등을 추가할 수 있습니다.
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete article");
      }

      const responseData = await response.json();
      console.log(responseData.message); // Article deleted successfully
    } catch (error) {
      console.error("Error deleting article:", (error as Error).message);
    }
  };

  const handleAddArticle = async () => {
    const res = await ogData(form.url);
    mutation.mutate(Object.assign(form, res));
    setForm({
      url: "",
      category: "",
    });
  };

  const handleNextPage = () => {
    setParams((prev) => ({ ...prev, page: prev.page! + 1 }));
  };

  const handlePreviousPage = () => {
    setParams((prev) => ({ ...prev, page: Math.max(prev.page! - 1, 1) }));
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setParams((prev) => ({ ...prev, keyword: value, page: 1 })); // 키워드 변경 시 페이지를 1로 초기화
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  // URL 쿼리 파라미터에서 초기 카테고리 값을 가져옵니다.
  const initialCategory = searchParams.get("category") || "all";

  const handleValueChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      // 카테고리 값을 업데이트
      if (value === "all") {
        params.delete("category"); // "전체"를 선택한 경우 카테고리 파라미터 삭제
      } else {
        params.set("category", value); // 선택한 카테고리 추가
      }

      // 페이지와 limit 파라미터를 삭제
      params.delete("page");
      params.delete("limit");

      // URL을 업데이트
      router.push(`/article?${params.toString()}`);
    },
    [router, searchParams],
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="my-6 flex justify-between">
      <div className="block">
        <CategorySelectMenu
          category={initialCategory} // 서브 URL이 없을 경우 "전체"로 표시
          handleValueChange={handleValueChange}
        />
      </div>

      <div style={{ marginTop: "4rem" }}>
        <h1>Articles</h1>
        <input
          type="text"
          placeholder="Search by keyword"
          value={params.keyword}
          onChange={handleKeywordChange}
        />
        <ul>
          {articles &&
            articles.articles.map((article: ArticleResponseType) => (
              <li style={{ margin: "1rem 0" }} key={article.article_id}>
                <a href={article.url} target="_blank" rel="noreferrer">
                  바로가기
                </a>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <p>By: {article.user_name}</p>
                <p>Category: {article.category}</p>
                <p>{new Date(article.created_at).toLocaleString()}</p>
                <button onClick={() => handleDelete(article.article_id)}>
                  삭제해보기
                </button>
              </li>
            ))}
        </ul>
        <div>
          <button onClick={handlePreviousPage} disabled={params.page === 1}>
            이전
          </button>
          <button onClick={handleNextPage}>다음</button>
        </div>
        <h2>Add Article</h2>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
          placeholder="URL"
        />
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <button onClick={handleAddArticle}>Add</button>
        <p />
      </div>
    </div>
  );
}
