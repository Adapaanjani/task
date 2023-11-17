import React, { useState, useEffect } from 'react';
import './Page1.css'; // Import your styles
import Navbar from './Navbar';
import CardComponent from './CardComponent';

const Page1 = () => {
  const images = ['asa.jpg', 'astra.jpg','rla.jpg', 'bha.jpg','chana.jpg','satella.jpg','ssa.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div>
    <Navbar />
    <div>
    <div className="page1">
      <div className="welcome-message">
        <h2>Welcome to Antharish Anthuleni Vishwam</h2>
        <p>Welcome to our website. This is the place where you can explore...</p>
      </div>
      <div className="image-slider">
        <div className="image-slider-card">
          <img
            src={images[currentImageIndex]}
            alt={`SliderImage ${currentImageIndex + 1}`}
          />
        </div>
      </div>
      </div>
      <div className='downmessage'>
      <div className='main-container'>
      <div className='secondmessage'>
       <h2>Explore the fields you are intrested in and gain some knowledge</h2>
      </div>
      <div className='cards-container'>
        <CardComponent
          imageUrl=""
          title="Card 1 Title"
          description="Description for Card 1."
        />
        {/* Repeat this for the other 5 cards */}
        <CardComponent
          imageUrl="url_for_card_2_image"
          title="Card 2 Title"
          description="Description for Card 2."
       
        />
        <CardComponent
          imageUrl="url_for_card_2_image"
          title="Card 3 Title"
          description="Description for Card 2."
        />
        <CardComponent
          imageUrl="url_for_card_2_image"
          title="Card 4 Title"
          description="Description for Card 2."
        />
        <CardComponent
          imageUrl="url_for_card_2_image"
          title="Card 5 Title"
          description="Description for Card 2."
        />
        <CardComponent
          imageUrl="url_for_card_2_image"
          title="Card 6 Title"
          description="Description for Card 2."
        />
      
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Page1;

