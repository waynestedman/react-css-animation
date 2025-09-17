// Card component
import { useState } from 'react';
import './css/card.css';

function Card({ additionalClassName, title, body, imageUrl }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleClick = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div
      className={`card ${additionalClassName} ${isAnimated ? 'animated' : 'go-back'}`}
      onClick={handleClick}
    >
      <h4>{title}</h4>
      <img src={imageUrl} alt="Card Image" />
      <p className="body-text">{body}</p>
    </div>
  );
}

export default Card;