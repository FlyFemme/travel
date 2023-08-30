import React from 'react';
import './ShowLogged.css';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';

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
      <div/>
    </div>
    </>
  );
};

export default ShowLogged;