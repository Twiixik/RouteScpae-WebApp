import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';

export default function CreateDiscussionPage() {
  const [discussionContent, setDiscussionContent] = useState("");
  const navigate = useNavigate();

  // Mock user data
  const user = {
    author: "Oliver Svensson",
    profileImage: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newDiscussion = {
      author: user.author,
      profileImage: user.profileImage,
      postTime: "just now",
      discussionContent,
      likes: 0,
      comments: 0
    };

    try {
      const response = await fetch(
        "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/discussions.json",
        {
          method: "POST",
          body: JSON.stringify(newDiscussion),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.ok) {
        navigate("/community/discussions"); // Redirect to discussions list
      } else {
        console.error("Failed to save the discussion.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section className="page create-discussion-page">
      <header className="logo-header">
        <img src={logo} alt="RouteScape Logo" className="logo" />
      </header>
      <header className="header">
        <h1>Create a Discussion</h1>
        <span className="drafts-link">Drafts</span>
      </header>

      <form onSubmit={handleSubmit} className="post-form">
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
          <button type="button" className="save-draft-button">Save Draft</button>
          <button type="submit" className="post-button">Post Discussion</button>
        </div>
      </form>
    </section>
  );
}
