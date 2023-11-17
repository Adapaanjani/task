import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Use navigate to redirect to a new page
    navigate('/Page1');
  };


  const videoFilenames = [
    'earth.mp4',
    'rocket.mp4',
    'redplanet.mp4',
    'solar.mp4',
    's.mp4'
    // Add more video filenames as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoFilenames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, videoFilenames.length]);


  return (
    <div className="homepage">
      {/* Assuming Navbar is a component you've imported */}
      <div className="video-slider">
        {videoFilenames.map((videoFilename, index) => (
          <div key={index} className={`video-container ${index === currentVideoIndex ? 'active' : ''}`}>
            <video
              src={`/videos/${videoFilename}`}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="text-overlay">
              <h1><span>Hey Astronauts!</span></h1>
              <p>Wanna have a knowledge trip through space?</p>
              <button onClick={handleButtonClick}>Explore </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
