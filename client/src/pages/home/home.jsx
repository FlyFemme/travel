import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCards();
  }, []);

  const getAllCards = async () => {
    try {
      const response = await axios.get(`${endpoint}/cards`);
      setCards(response.data);
    } catch (error) {console.error('Error fetching cards:', error);}
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
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};

export default Home;