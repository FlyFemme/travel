import React from 'react';
import './ShowLogged.css';
import Navbar from '../../components/Navbar/Navbar';

const ShowLogged = () => {
  const travel = {
    image: 'url_de_la_imagen.jpg',
    title: 'Título del Show',
    location: 'Ubicación del Show',
    content: 'Descripción del show...',
  };

  return (
    <>
      <Navbar />
      <div className="show-page">
        <div className="container" style={{ marginTop: '4rem' }}>
          <div className="row">
            <div className="col-md-6">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ marginRight: '-10rem' }}
              >
                <img
                  className="rounded-4"
                  src={travel.image}
                  alt={travel.title}
                  width="400"
                  height="400"
                />
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <h3 style={{ color: '#FF0060', fontWeight: 'bold' }}>
                  {travel.title}
                </h3>
                <div className="d-flex">
                  {/* linea para el manejo de authenticacion */}
                  {/* linea para el enlace de edicion y el formulario de eliminacion */}
                </div>
              </div>
              <p style={{ color: '#FF0060' }}>{travel.location}</p>
              <p className="text-primary">{travel.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowLogged;
