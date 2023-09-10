// eslint-disable-next-line
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import '../create_form/CreateForm.css';
import { storeDestination } from '../../services/Api';

const Create = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState({
        image: null,
        title: null,
        location: null,
        description: null
    })
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

            const response = await storeDestination(destinationData);

            if (response.errors) {
                console.log('Errors:', response.errors);
            } else {
                navigate(`/show-logged/${response.id}`);
            }
        } catch (error) {
            console.error('Error creating destination:', error);
            const errors = error.response.data.errors
            setErrors({ image: errors.image && errors.image[0], title: errors.title && errors.title[0], location: errors.location && errors.location[0], description: errors.description && errors.description[0], });
        }
    };

    return (
        <main className="container mt-5 d-flex justify-content-center">
            <form className="custom-form w-form" onSubmit={handleSubmit}>
                <h2 className="text-center mb-9 title">Crear destino</h2>
                <div className="w-100 border-bottom border my-10 line"></div>
                <div className="d-flex justify-content-around col">
                    <div className="form-group">
                        <label htmlFor="title" className="mb-1 mt-4">Título</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name="title"
                            className="form-control"

                        />

                        {
                            errors.title && <div className="alerts">
                                <p>{errors.title}</p>
                            </div>
                        }

                        <label htmlFor="location" className="mb-1 mt-4">Ubicación</label>
                        <input
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            type="text"
                            name="location"
                            className="form-control"

                        />

                        {
                            errors.location && <div className="alerts">
                                <p>{errors.location}</p>
                            </div>
                        }

                        <label htmlFor="image" className="mb-1 mt-4">Imagen</label>
                        <input
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            type="text"
                            name="image"
                            className="form-control"

                        />

                        {
                            errors.image && <div className="alerts">
                                <p>{errors.image}</p>
                            </div>
                        }

                        <div className="d-flex gap">
                            <Button backgroundColorClass="bttn-primary" text="Aceptar" />
                            <Link to={`/`}><Button backgroundColorClass="bttn-secondary" text="Cancelar" /></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="description" className="mb-1 mt-4">Descripción</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            name="description"
                            className="form-control"
                            rows="12"

                        />

                        {
                            errors.description && <div className="alerts">
                                <p>{errors.description}</p>
                            </div>
                        }

                    </div>
                </div>
            </form>
        </main>
    )
}

export default Create;