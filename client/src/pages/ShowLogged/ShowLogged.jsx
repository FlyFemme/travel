import React from 'react';
import './ShowLogged.css';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';

const ShowLogged = () => {
  const show = {
    image: 'url_de_la_imagen.jpg',
    title: 'Título del Show',
    text: 'Descripción del show...',
  };

  return (
    <>
      <Navbar />
      <div className="show-page">
        <Card
          imageSrc={show.image}
          title={show.title}
          text={show.text}
        />
      </div>
    </>
  );
};

export default ShowLogged;
