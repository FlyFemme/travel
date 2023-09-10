import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
// eslint-disable-next-line
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteCard, getAllCards } from '../../services/Api';
import Delete from '../../assets/Delete.svg';
import Edit from '../../assets/Edit.svg';

const Home = () => {
  const [cards, setCards] = useState([]);
  const { id } = useParams();
  // const navigate = useNavigate();
  const userId = Number(localStorage.getItem('auth_user_id'));

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

  const handleDelete = async (id) => {
    try {
      await deleteCard(id);
      // navigate('/');
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <>
      <Navbar />
      <main className="d-flex flex-wrap justify-content-center">
        {cards.map((card) => (
          <Link to={`/show-logged/${card.id}`} key={card.id} className="item b-radius m-3">
            <img className="b-radius size" src={card.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.location}</p>
              {/* {cards.user.id === auth.user.id && buttons} */}
              {card.user_id === userId &&
                //PONER LOS ICONOS EN UN COMPONENTE
                <div className="d-flex">
                  <Link to={`/Edit/${id}`}><img src={Edit} className="m-1" alt="" /></Link>
                  <button onClick={() => handleDelete(card.id)} className='delete-button'><img src={Delete} className="m-1" alt="" /></button>
                </div>}
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Home;