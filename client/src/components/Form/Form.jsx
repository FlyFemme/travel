import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Create.css';

const Form = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const [countries, setCountries] = useState([]);

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
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    location,
                    image,
                    description,
                }),
            });

            if (response.ok) {

                console.log('Formulario enviado exitosamente');
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

return (
        <main className="container mt-5 d-flex justify-content-center">
            <form className="custom-form w-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="mt-4">Título</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                    <label htmlFor="location" className="mt-4">Ubicación</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                    <label htmlFor="image" className="mt-4">Imagen</label>
                    <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                    <Button backgroundColorClass="btn-primary" text="Aceptar" />
                    <Link to={`/`}><Button backgroundColorClass="btn-secondary" text="Cancelar" /></Link>
                </div>
                <div className="col-md-6">
                    <label htmlFor="description" className="mt-4">Descripción</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        className="form-control"
                        rows="12"
                        required
                    />
                </div>
                <div className="w-100 border-bottom border my-10 line"></div>
                <Button backgroundColorClass="btn-primary" text="Aceptar" />;
                <Link to={`/`}><Button backgroundColorClass="btn-secondary" text="Cancelar" /></Link>;
            </form>
        </main>
    );
};

export default Form;