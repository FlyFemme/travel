import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowLogged.css';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const ShowLogged = () => {
  const [show, setShow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getShowInfo = async () => {
      const response = await axios.get(`${endpoint}/card/${id}`);
      setShow(response.data);
    };
    
    getShowInfo();
  }, [id]);

  const isUserAuthenticated = true; // aquí se supone que estoy logged //

  return (
    <>
      <Navbar />
      <div className="show-page" style={{ background: 'white' }}>
        <div className="container" style={{ marginTop: '4rem' }}>
          <div className="row">
            <div className="col-md-6">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ marginRight: '-4rem' }}
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
                      {/* Espacio para enlaces de edición y formulario de eliminacion */}
                    </>
                  )}
                </div>
              </div>
              <p style={{ color: '#FF0060' }}>{show.location}</p>
              <p className="text-primary">{show.description}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ShowLogged;
