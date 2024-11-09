// DailyPosts.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DailyPostCard from "../../components/CommunityCards/DailyPostCard";

export default function DailyPosts() {
  const [dailyPosts, setDailyPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchDailyPosts() {
      try {
        const url = "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/dailyPosts.json";
        const response = await fetch(url);
        const data = await response.json();

        const dailyPostsArray = data ? Object.keys(data).map(postId => ({
          id: postId,
          ...data[postId]
        })) : [];

        setDailyPosts(dailyPostsArray);
      } catch (error) {
        console.error("Error fetching daily posts data:", error);
      }
    }

    if (!dailyPosts.length || location.state?.refresh) {
      fetchDailyPosts();
    }
  }, [location.state]);

  return (
    <section className="page">
      <div className="grid">
        {dailyPosts.map(post => (
          <DailyPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
