const getOgImage = async (targetUrl: string) => {
  const getDocumentFromUrl = async (url: string): Promise<Document> => {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    return doc;
  };

  const getOgImageFromDocument = (doc: Document): string | null => {
    const ogImageElement = doc.querySelector('meta[property="og:image"]');
    if (ogImageElement) {
      return ogImageElement.getAttribute("content");
    }

    return null;
  };

  const getOgImageFromUrl = async (url: string): Promise<string | null> => {
    const doc = await getDocumentFromUrl(url);

    return getOgImageFromDocument(doc);
  };

  const ogImageUrl = await getOgImageFromUrl(targetUrl);

  return ogImageUrl; // 메타태그 이미지 주소 출력
};

export default getOgImage;
