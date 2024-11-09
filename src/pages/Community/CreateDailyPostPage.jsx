import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'; 

export default function CreateDailyPostPage() {
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState(""); // This will store the URL for the image
  const navigate = useNavigate();

  // User info
  const user = {
    username: "Oliver Svensson",
    profileImage: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
    uid: "UniqueUserID_Oliver"
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      username: user.username,
      profileImage: user.profileImage,
      postTime: "just now",
      postCaption,
      postImage,
      likes: 0,
      comments: 0,
      uid: user.uid
    };

    try {
      const response = await fetch(
        "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/dailyPosts.json",
        {
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.ok) {
        navigate("/community/dailyposts");
      } else {
        console.error("Failed to save the post.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="page create-post-page">
      <header className="logo-header">
            <img src={logo} alt="RouteScape Logo" className="logo" />
        </header>
      <header className="header">
        <h1>Create a Post</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSubmit} className="post-form">
        {/* Image URL Input */}
        <label htmlFor="image-url" className="caption-label">Image URL</label>
        <input
          type="url"
          id="image-url"
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          placeholder="Paste an image URL..."
          className="image-url-input"
          required
        />

        {/* Image Preview */}
        <div className="image-preview">
          <img
            src={postImage || "https://placehold.co/150x150?text=Image+Preview"}
            alt="Preview"
            onError={(e) => (e.target.src = "https://placehold.co/150x150?text=Invalid+URL")}
          />
        </div>

        {/* Description Area */}
        <label htmlFor="caption" className="caption-label">Description</label>
        <textarea
          id="caption"
          value={postCaption}
          onChange={(e) => setPostCaption(e.target.value)}
          placeholder="A beautiful short trip in Uppsala with my friends :)"
          maxLength="100"
          className="caption-textarea"
        />
        <p className="character-count">{postCaption.length}/100</p>

        {/* Buttons */}
        <div className="button-group">
          <button type="button" className="save-draft-button">Save Draft</button>
          <button type="submit" className="post-button">Post</button>
        </div>
      </form>
    </section>
  );
}
