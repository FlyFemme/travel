import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ShowLogged.css';
import Navbar from '../../components/navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Delete from '../../assets/Delete.svg';
import Edit from '../../assets/Edit.svg';




const endpoint = 'http://localhost:8000/api';

const ShowLogged = () => {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const getShowInfo = async () => {
      const response = await axios.get(`${endpoint}/card/${id}`);
      setShow(response.data);
    };

    getShowInfo();
  }, [id]);

  // eslint-disable-next-line
  const isUserAuthenticated = true; // aquí se supone que estoy logged //

  const deleteCard = async (id) => {
    try {
      await axios.delete(`${endpoint}/card/${id}`);
      navigate(`/`)
    } catch (error) { console.error('Error fetching cards:', error); }
    // getAllCards()
  }

  return (
    <>
      <Navbar />
      <div className="show-page" style={{ background: 'white' }}>
        <div className="container">
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
                {/* {isUserAuthenticated && ( */}
                <div className="d-flex">
                  {/* Espacio para enlaces de edición y formulario de eliminacion */}
                  <Link to={`/Edit/${id}`}><img src={Edit} className="m-1" alt="" /></Link>
                  <button onClick={() => deleteCard(show.id)} className='delete-button'><img src={Delete} class="m-1" alt="" /></button>
                  {/* )} */}
                </div>
              </div>
              <p style={{ color: '#FF0060' }}>{show.location}</p>
              <p className="text-primary">{show.description}</p>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default ShowLogged
