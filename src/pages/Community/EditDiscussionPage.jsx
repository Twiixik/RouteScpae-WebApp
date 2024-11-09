import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function EditDiscussionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const discussion = location.state?.discussion;

  if (!discussion) {
    navigate("/community/discussions"); // Redirect if no discussion data is found
    return null;
  }

  const [discussionTitle, setDiscussionTitle] = useState(discussion.discussionTitle);
  const [discussionContent, setDiscussionContent] = useState(discussion.discussionContent);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (event) => {
    event.preventDefault();
    setIsSaving(true);

    const updatedDiscussion = {
      ...discussion,
      discussionTitle,
      discussionContent
    };

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/discussions/${discussion.id}.json`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedDiscussion),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        navigate("/community/discussions", { state: { refresh: true } });
      } else {
        console.error("Failed to update the discussion.");
      }
    } catch (error) {
      console.error("Error updating discussion:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this discussion?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/discussions/${discussion.id}.json`,
        { method: 'DELETE' }
      );

      if (response.ok) {
        navigate("/community/discussions", { state: { refresh: true } });
      } else {
        console.error("Failed to delete the discussion.");
      }
    } catch (error) {
      console.error("Error deleting discussion:", error);
    }
  };

  return (
    <section className="page edit-discussion-page create-post-page">
      <header className="logo-header">
        <img src={logo} alt="RouteScape Logo" className="logo" />
      </header>
      <header className="header">
        <h1>Edit Discussion</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSave} className="post-form">

        <label htmlFor="content" className="caption-label">What is your Question?</label>
        <textarea
          id="content"
          value={discussionContent}
          onChange={(e) => setDiscussionContent(e.target.value)}
          placeholder="Write your discussion content here..."
          className="caption-textarea discussion-content-textarea"
          rows="6"
          required
        />

        <div className="button-group">
          <button type="submit" className="post-button">
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
          <button type="button" className="delete-button" onClick={handleDelete}>
            Delete Discussion
          </button>
        </div>
      </form>
    </section>
  );
}
