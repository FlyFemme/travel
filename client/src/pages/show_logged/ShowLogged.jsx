import React, { useEffect, useState } from 'react';
import './ShowLogged.css';
import Navbar from '../../components/navbar/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Delete from '../../assets/Delete.svg';
import Edit from '../../assets/Edit.svg';
import { getCardById, deleteCard } from '../../services/Api';

const ShowLogged = () => {
  const [show, setShow] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showData = await getCardById(id);
        setShow(showData);
      } catch (error) {
        console.error('Error fetching show info:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCard(show.id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  var buttons = '';
  if (!localStorage.getItem('auth_token')) {
    buttons = (
      <>
      </>
    );
  }
  else {
    buttons = (
      <div className="d-flex">
        <Link to={`/Edit/${id}`}><img src={Edit} className="m-1" alt="" /></Link>
        <button onClick={() => handleDelete(show.id)} className='delete-button'><img src={Delete} className="m-1" alt="" /></button>
      </div>
    );
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
                {buttons}
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
