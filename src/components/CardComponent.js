// CardComponent.js

import React from 'react';

const CardComponent = ({ imageUrl, title, description }) => {
  return (
    <div className='card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Know-More</button>
    </div>
  );
};

export default CardComponent;
