// eslint-disable-next-line
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import '../edit_form/EditForm.css';
import { storeDestination } from '../../services/Api';

const Create = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const destinationData = {
                image,
                title,
                location,
                description,
            };
            const id = await storeDestination(destinationData);
            navigate(`/show-logged/${id}`);
        } catch (error) {
            console.error('Error creating destination:', error);
        }
    };

    return (
        <main className="container mt-5 d-flex justify-content-center">
            <form className="custom-form w-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-9 title">Crear destino</h2>
                <div className="w-100 border-bottom border my-10 line"></div>
                <div className="d-flex justify-content-around col">
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
                        <Button backgroundColorClass="bttn-primary" text="Aceptar" />
                        <Link to={`/`}><Button backgroundColorClass="bttn-secondary" text="Cancelar" /></Link>
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
                </div>
            </form>
        </main>
    )
}

export default Create;