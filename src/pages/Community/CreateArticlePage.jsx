import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'; 

export default function CreateArticlePage() {
  const [articleTitle, setArticleTitle] = useState("");
  const [articleSnippet, setArticleSnippet] = useState(""); // Use articleSnippet instead of articleContent
  const [articleImage, setArticleImage] = useState("");
  const [readTime, setReadTime] = useState(""); // For read time
  const navigate = useNavigate();

  // Mock user data
  const user = {
    author: "Oliver Svensson", // Using 'author' instead of 'username' to match JSON structure
    profileImage: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
    uid: "UniqueUserID_Oliver"
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newArticle = {
      author: user.author, // Ensure we're using 'author'
      profileImage: user.profileImage,
      articleTitle,
      articleSnippet, // Use articleSnippet here
      articleImage,
      readTime: readTime || "5 min read", // Default read time if not provided
      likes: 0,
      comments: 0,
      uid: user.uid
    };

    try {
      const response = await fetch(
        "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/articles.json",
        {
          method: "POST",
          body: JSON.stringify(newArticle),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.ok) {
        navigate("/community/articles"); // Navigate to articles list after posting
      } else {
        console.error("Failed to save the article.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="page create-article-page">
        <header className="logo-header">
            <img src={logo} alt="RouteScape Logo" className="logo" />
        </header>
        <header className="header">
            <h1>Create an Article</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSubmit} className="post-form">

         {/* Image URL Input */}
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
        
         {/* Image Preview */}
        <div className="image-preview">
          <img
            src={articleImage || "https://placehold.co/150x150?text=Image+Preview"}
            alt="Preview"
            onError={(e) => (e.target.src = "https://placehold.co/150x150?text=Invalid+URL")}
          />
        </div>

        {/* Article Title */}
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

        {/* Read Time */}
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

        {/* Article Snippet */}
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

        {/* Buttons */}
        <div className="button-group">
          <button type="button" className="save-draft-button">Save Draft</button>
          <button type="submit" className="post-button">Post Article</button>
        </div>
      </form>
    </section>
  );
}
