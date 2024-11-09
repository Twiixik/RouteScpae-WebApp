// Articles.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArticleCard from "../../components/CommunityCards/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchArticles() {
      try {
        const url = "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/articles.json";
        const response = await fetch(url);
        const data = await response.json();

        const articlesArray = data ? Object.keys(data).map(articleId => ({
          id: articleId,
          ...data[articleId]
        })) : [];

        setArticles(articlesArray);
      } catch (error) {
        console.error("Error fetching articles data:", error);
      }
    }

    if (!articles.length || location.state?.refresh) {
      fetchArticles();
    }
  }, [location.state]);

  return (
    <section className="page">
      <div className="grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
