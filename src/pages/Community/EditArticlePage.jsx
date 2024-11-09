import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function EditArticlePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    navigate("/community/articles");
    return null;
  }

  const [articleTitle, setArticleTitle] = useState(article.articleTitle);
  const [articleSnippet, setArticleSnippet] = useState(article.articleSnippet);
  const [articleImage, setArticleImage] = useState(article.articleImage);
  const [readTime, setReadTime] = useState(article.readTime);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsSaving(true);

    const updatedArticle = {
      ...article,
      articleTitle,
      articleSnippet,
      articleImage,
      readTime
    };

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/articles/${article.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedArticle),
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (response.ok) {
        navigate("/community/articles", { state: { refresh: true } });
      } else {
        console.error("Failed to update the article.");
      }
    } catch (error) {
      console.error("Error updating article:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/articles/${article.id}.json`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        navigate("/community/articles", { state: { refresh: true } });
      } else {
        console.error("Failed to delete the article.");
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <section className="page edit-article-page create-article-page">
      <header className="logo-header">
        <img src={logo} alt="RouteScape Logo" className="logo" />
      </header>
      <header className="header">
        <h1>Edit Article</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSave} className="post-form">
        <label htmlFor="image-url" className="caption-label">Image URL</label>
        <input
          type="url"
          id="image-url"
          value={articleImage}
          onChange={(e) => setArticleImage(e.target.value)}
          placeholder="Paste an image URL..."
          className="image-url-input"
          required
        />

        <div className="image-preview">
          <img
            src={articleImage || "https://placehold.co/150x150?text=Image+Preview"}
            alt="Preview"
            onError={(e) => (e.target.src = "https://placehold.co/150x150?text=Invalid+URL")}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>

        <label htmlFor="article-title" className="caption-label">Title</label>
        <input
          type="text"
          id="article-title"
          value={articleTitle}
          onChange={(e) => setArticleTitle(e.target.value)}
          placeholder="Enter article title..."
          className="article-title-input"
          required
        />

        <label htmlFor="read-time" className="caption-label">Read Time</label>
        <input
          type="text"
          id="read-time"
          value={readTime}
          onChange={(e) => setReadTime(e.target.value)}
          placeholder="Enter read time (e.g., 10 min)"
          className="read-time-input"
          required
        />

        <label htmlFor="snippet" className="caption-label">Snippet</label>
        <textarea
          id="snippet"
          value={articleSnippet}
          onChange={(e) => setArticleSnippet(e.target.value)}
          placeholder="Write a short snippet for your article..."
          className="caption-textarea article-content-textarea"
          rows="4"
          required
        />

        <div className="button-group">
          <button type="submit" className="post-button">
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" className="delete-button" onClick={handleDelete}>
            Delete Article
          </button>
        </div>
      </form>
    </section>
  );
}
