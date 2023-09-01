import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Create.css'



const Form = () => {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const endpoint = 'http://localhost:8000/api';

    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(endpoint, {
                image: image,
                title: title,
                location: location,
                description: description
            });
            navigate('/');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();

            const countryOptions = data.map(country => ({
                code: country.cca2,
                name: country.name.common,
            }));

            setCountries(countryOptions);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

return (
            <div className='square'>
                <form className="custom-form" onSubmit={store}>
                    <h2 className="text-center mb-9 title">Crear destino</h2>
                    <div className="w-100 border-bottom border my-10 line"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label className='form-label'>Título</label>
                                <input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    type='text'
                                    className='form-control'
                                    placeholder="Escribe un título"
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Ubicación</label>
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className='form-control'
                                    placeholder="Selecciona una ubicación"
                                    required
                                >
                                    {/* opciones */}
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Imagen</label>
                                <input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    type='text'
                                    placeholder="URL"
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label className='form-label'>¿Porqué te gustaría ir a ese destino?</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    type='text'
                                    placeholder="Escribe tu respuesta"
                                    rows={10}
                                    className='form-control'
                                />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary'>Aceptar</button>
                </form>
            </div>
        );

}

export default Form;
