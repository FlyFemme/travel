import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteCard, getAllCards } from '../../services/Api';
import Delete from '../../assets/Delete.svg';
import Edit from '../../assets/Edit.svg';

const Home = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  const userId = Number(localStorage.getItem('auth_user_id'));
  const navigate = useNavigate()

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const cardsData = await getAllCards();
      setCards(cardsData);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleDelete = async (e, id) => {
    try {
      await deleteCard(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/card/${id}`)
  }

  return (
    <>
      <Navbar />
      <main className="d-flex flex-wrap justify-content-center">
        {cards.map((card) => (
          <div onClick={() => handleCardClick(card.id)} className="item b-radius m-3">
            <img className="b-radius size" src={card.image} alt="" />
            <div className="card-body d-flex justify-content-between align-items-center m-1">
              <div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.location}</p>
              </div>
              {card.user_id === userId &&
                //PONER LOS ICONOS EN UN COMPONENTE
                <div className="d-flex m-1">
                  <Link to={`/edit/${card.id}`}><img src={Edit} className="p-1" alt="" /></Link>
                  <button onClick={(e) => handleDelete(e, card.id)} className='delete-button'><img src={Delete} className="p-1" alt="" /></button>
                </div>}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;