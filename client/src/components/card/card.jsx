import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageSrc} alt="Show" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
