import React, { useState, useEffect } from 'react';
import './form.css'

const CreateForm = () => {
    const [formData, setFormData] = useState({
        place: '',
        country: '',
        image: '',
        description: '',
    });

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
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

    };

    return (
        <main className="container mt-5">
            <form className="custom-form row g-0" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="col-md-5 border p-4 d-flex flex-column align-items-center">
                    <h2 className="text-center mb-3 title d-flex align-items-center justify-content-center">Crear destino</h2>
                    <div className="border-bottom mb-3"></div>
                    <div className="mb-3 w-100">
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input
                            type="text"
                            name="place"
                            value={formData.place}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                            id="titulo"
                            placeholder="Escribe un título"
                            required
                        />
                    </div>
                    <div className="mb-3 w-100">
                        <label htmlFor="ubicacion" className="form-label">Ubicación</label>
                        <select
    name="country"
    value={formData.country}
    onChange={handleInputChange}
    className="form-select form-control-lg"
    id="ubicacion"
    required
>
    <option value="">Seleccione una ubicación</option>
    {countries.map(country => (
        <option key={country.code} value={country.code}>
            {country.name}
        </option>
    ))}
</select>
                    </div>
                    <div className="mb-3 w-100">
                        <label htmlFor="image" className="form-label">Escribe la URL de la imagen</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                            id="imagen"
                            placeholder="Sube una imagen"
                            required
                        />
                    </div>
                </div>
                <div className="col-md-5 p-4">
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                            id="descripcion"
                            placeholder="Escribe una descripción"
                            required
                        />
                    </div>
                </div>
            </form>
        </main>
    );
};

export default CreateForm;
