import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import './EditForm.css'
import Button from "../Button/Button";

const endpoint = 'http://localhost:8000/api/card/'

const EditForm = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            image: image,
            title: title,
            location: location,
            description: description
        })
        navigate(`/show-logged/${id}`)
    }

    useEffect(() => {
        const getCardById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setImage(response.data.image)
            setTitle(response.data.title)
            setLocation(response.data.location)
            setDescription(response.data.description)
        }
        getCardById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className="container mt-5 d-flex justify-content-center">
            <form className="custom-form w-form" onSubmit={update}>
                <h2 className="text-center mb-9 title">Editar destino</h2>
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
        </main >
    )
};

export default EditForm;