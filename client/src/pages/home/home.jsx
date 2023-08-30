import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Navbar from '../../components/navbar/navbar';


const endpoint = 'http://localhost:8000/api'
const Home = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getAllCards()
    }, [])

    const getAllCards = async () => {
        const response = await axios.get(`${endpoint}/cards`)
        setCards(response.data)
    }

    // const deleteCard = async (id) => {
    //     await axios.delete(`${endpoint}/card/${id}`)
    //     getAllCards()
    // }

    return (
        <>
            <Navbar />
            <main className="d-flex flex-wrap justify-content-center" >
                {cards.map((card) => (
                    <div className=" item b-radius m-3" key={card.id}>
                        <img className="b-radius size" src={card.image} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.location}</p>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

export default Home;
