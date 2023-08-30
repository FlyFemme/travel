import React from 'react';
import './ShowLogged.css';
import Card from '../../components/Card/card';
import Navbar from '../../components/Navbar/navbar';




const ShowLogged = () => {
  const show = {
    imageSrc: 'url_de_la_imagen.jpg',
    title: 'Título del Show',
    text: 'Descripción del show...',
  };

  return (
    <>
      <Navbar />
      <div className="show-page">
        <Card
          imageSrc={show.imageSrc}
          title={show.title}
          text={show.text}
        />
      </div>
    </>
  );
};

export default ShowLogged;