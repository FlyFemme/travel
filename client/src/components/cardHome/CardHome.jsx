import React from 'react';
import './CardHome.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageSrc} alt="Card" />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default Card;