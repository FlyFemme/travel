import React from 'react';
import './ShowLogged.css';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';

const ShowLogged = () => {
  const show = {
    image: 'url_de_la_imagen.jpg',
    title: 'Título del Show',
    location: 'Ubicación del Show',
    content: 'Descripción del show...',
  };

  const isUserAuthenticated = true; //Aqui queda true por que es una vista Logged //

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
                  src={show.image}
                  alt={show.title}
                  width="400"
                  height="400"
                />
              </div>
            </div>
            <div className="col-md-5 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <h3 style={{ color: '#FF0060', fontWeight: 'bold' }}>
                  {show.title}
                </h3>
                <div className="d-flex">
                  {isUserAuthenticated && (
                    <>
                      <a href={`edit/${show.id}`}>
                        <img
                          src={require('../../Assets/Edit-icon.svg').default}
                          className="m-1"
                          alt=""
                        />
                      </a>
                      <form
                        action={`delete/${show.id}`}
                        method="POST"
                        style={{ display: 'inline' }}
                      >
                        {/* Agregar el token CSRF y método DELETE según corresponda */}
                        <button
                          type="submit"
                          className="delete-destination"
                          style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                          }}
                        >
                          <img
                            src={require('../../Assets/Delete-icon.svg').default}
                            alt="delete-icon"
                          />
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
              <p style={{ color: '#FF0060' }}>{show.location}</p>
              <p className="text-primary">{show.content}</p>
            </div>
          </div>
        </div>
      </div>
      <Card
        imageSrc={show.image}
        title={show.title}
        text={show.content}
      />
    </>
  );
};

export default ShowLogged;
