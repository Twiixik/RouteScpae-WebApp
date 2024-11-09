import React, { useEffect, useState } from 'react';
import { FaBell, FaChevronRight, FaSearch, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DailyPostCard from '../components/CommunityCards/DailyPostCard';
import logo from '../assets/logo.png';
import TripCard from '../components/TripCard';

const MainPage = () => {
  const [dailyPosts, setDailyPosts] = useState([]); // Initializing state for daily posts

  useEffect(() => {
    async function fetchDailyPosts() {
      try {
        const url = "https://timotejsproject-default-rtdb.europe-west1.firebasedatabase.app/dailyPosts.json";
        const response = await fetch(url);
        const data = await response.json();

        const dailyPostsArray = data
          ? Object.keys(data).map(postId => ({
              id: postId,
              ...data[postId]
            }))
          : [];

        setDailyPosts(dailyPostsArray);
      } catch (error) {
        console.error("Error fetching daily posts data:", error);
      }
    }

    fetchDailyPosts();
  }, []);

  return (
    <div>
      {/* Logo Section */}
      <header className="logo-header">
        <img src={logo} alt="RouteScape Logo" className="logo" />
      </header>
      
      <div className="main-page">
        {/* Header Section */}
        <header className="header">
          <div className="header-location">
            <span>Denmark</span>
            <FaChevronDown />
          </div>
          <div className="header-notification">
            <FaBell />
          </div>
        </header>

        {/* Welcome and Search Section */}
        <section className="welcome-section">
          <h2>Hello, Oliver</h2>
          <p>Get ready to hit the road with our ultimate guide to the best road trips in the world.</p>
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search for anything" />
          </div>
        </section>

        {/* Explore Scandinavia Carousel */}
        <section className="explore-scandinavia">
          <h3>Explore Scandinavia</h3>
          <div className="carousel">
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9yd2F5fGVufDB8fDB8fHww" alt="Norway" />
              <span>Norway</span>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1534143340226-6cbc7628dbe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN3ZWRlbnxlbnwwfHwwfHx8MA%3D%3D" alt="Sweden" />
              <span>Sweden</span>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVubWFya3xlbnwwfHwwfHx8MA%3D%3D" alt="Denmark" />
              <span>Denmark</span>
            </div>
            {/* Add more items as needed */}
          </div>
        </section>

      {/* Travellers Stories Section */}
      <section className="travellers-stories">
        <div className="section-header">
          <h3>Travellers stories</h3>
          <Link to="/community" className="see-all-link">See All</Link> {/* Link to the Community page */}
        </div>
        <div className="carousel-user-stories">
          {dailyPosts.map(post => (
            <DailyPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>


        {/* Upcoming Trips Section */}
      <section className="upcoming-trips">
        <div className="section-header">
          <h3>Upcoming trips</h3>
          <Link to="/trips" className="see-all-link">See All</Link>
        </div>
        
        <TripCard
          imageUrl="https://plus.unsplash.com/premium_photo-1694475250638-a006ac51161b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVyZ2VufGVufDB8fDB8fHww"
          title="Oslo to Bergen"
          price="750DKK"
          description="Last day I was thinking about vacation but I decided..."
          days="4"
          included="Included"
          availability="2+"
        />
        <TripCard
          imageUrl="https://images.unsplash.com/photo-1643888984191-4deb0e527cbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2lydW5hfGVufDB8fDB8fHww"
          title="Kiruna to Jukkasjärvi"
          price="900DKK"
          description="Journey through Swedish Lapland, with opportunities..."
          days="6"
          included="Included"
          availability="3+"
        />
        <TripCard
          imageUrl="https://images.unsplash.com/photo-1637796622625-cd210aaffa65?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Bergen to Ålesund"
          price="1800DKK"
          description="Cruise through the heart of Norway’s majestic fjords..."
          days="7"
          included="Included"
          availability="2+"
        />
      </section>

      <section className="adventure-cta">
        <h4>Ready for your next Adventure?</h4>
        <button className="cta-button">
          Plan my next adventure <FaChevronRight />
        </button>
      </section>

        {/* Membership Section */}
        <section className="membership">
          <h4>Exclusive for Premium Members: 30% Off Stays on Your Route in Norway!</h4>
          <p>Our premium members enjoy a 30% discount on select accommodations along popular routes in Norway. Book now and stay in comfort while exploring stunning landscapes.</p>
          <button className="membership-button">Membership <FaChevronDown /></button>
        </section>

      </div>
    </div>
  );
};

export default MainPage;
