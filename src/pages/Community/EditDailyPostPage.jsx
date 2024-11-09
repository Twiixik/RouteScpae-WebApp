import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function EditDailyPostPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    navigate("/community/dailyposts"); // Redirect if no post data is found
    return null;
  }

  const [postCaption, setPostCaption] = useState(post.postCaption);
  const [postImage, setPostImage] = useState(post.postImage);
  const [isSaving, setIsSaving] = useState(false);

  // Save changes to Firebase
  const handleSave = async (event) => {
    event.preventDefault();
    setIsSaving(true);

    const updatedPost = {
      ...post,
      postCaption,
      postImage,
    };

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/dailyPosts/${post.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedPost),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        navigate("/community/dailyposts", { state: { refresh: true } });
      } else {
        console.error("Failed to update the daily post.");
      }
    } catch (error) {
      console.error("Error updating daily post:", error);
    } finally {
      setIsSaving(false);
    }
  };

  // Delete post from Firebase
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/dailyPosts/${post.id}.json`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        navigate("/community/dailyposts", { state: { refresh: true } });
      } else {
        console.error("Failed to delete the daily post.");
      }
    } catch (error) {
      console.error("Error deleting daily post:", error);
    }
  };

  return (
    <section className="page edit-daily-post-page create-post-page">
      <header className="logo-header">
        <img src={logo} alt="RouteScape Logo" className="logo" />
      </header>
      <header className="header">
        <h1>Edit Post</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSave} className="post-form">
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
          {postImage ? (
            <img
              src={postImage}
              alt="Preview"
              onError={(e) => (e.target.src = "https://placehold.co/150x150?text=Invalid+URL")}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          ) : (
            <p>Image Preview</p>
          )}
        </div>

        <label htmlFor="caption" className="caption-label">Description</label>
        <textarea
          id="caption"
          value={postCaption}
          onChange={(e) => setPostCaption(e.target.value)}
          placeholder="A beautiful short trip in Uppsala with my friends :)"
          maxLength="100"
          className="caption-textarea"
          rows="4"
          required
        />
        <p className="character-count">{postCaption.length}/100</p>

        <div className="button-group">
          <button type="submit" className="post-button">
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" className="delete-button" onClick={handleDelete}>
            Delete Post
          </button>
        </div>
      </form>
    </section>
  );
}
