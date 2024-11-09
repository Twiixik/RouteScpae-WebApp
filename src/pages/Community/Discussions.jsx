// Discussions.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DiscussionCard from "../../components/CommunityCards/DiscussionCard";

export default function Discussions() {
  const [discussions, setDiscussions] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchDiscussions() {
      try {
        const url = "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/discussions.json";
        const response = await fetch(url);
        const data = await response.json();

        const discussionsArray = data ? Object.keys(data).map(discussionId => ({
          id: discussionId,
          ...data[discussionId]
        })) : [];

        setDiscussions(discussionsArray);
      } catch (error) {
        console.error("Error fetching discussions data:", error);
      }
    }

    if (!discussions.length || location.state?.refresh) {
      fetchDiscussions();
    }
  }, [location.state]);

  return (
    <section className="page">
      <div className="grid">
        {discussions.map(discussion => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </div>
    </section>
  );
}
