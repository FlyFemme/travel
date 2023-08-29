import React from 'react';
import 'ShowLogged.css';
import Card from '../components/Card'; // Corroborar que nombre tiene el componente ???

const ShowLogged = () => {
  const show = {
    imageSrc: 'url_de_la_imagen.jpg',
    title: 'Título del Show',
    text: 'Descripción del show...',
 };

  return (
    <div className="show-page">
      <Card????
        imageSrc={show.imageSrc}
        title={show.title}
        text={show.text}
      />
    </div>
  );
};

export default ShowLogged;