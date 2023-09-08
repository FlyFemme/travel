import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SigninForm.css';
import Button from "../button/Button";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = formData;
    const userData = {
        name,
        email,
        password,
    };
    
    try {
        const response = await fetch('https://localhost:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData), 
        });
    
        if (response.ok) {
            console.log('Registro exitoso');
        } else {
          console.error('Error al registrar usuario');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

  return (
    <main className="d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="reg-form">
        <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Registro de usuario</h2>

        <div className="mb-3">
          <label htmlFor="name" className="form-label blue-color bold">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control placeholder-size"
            id="name"
            placeholder="Escribe tu nombre..."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label blue-color bold">E-mail</label>
          <input
            type="email"
            name="email"
            className="form-control placeholder-size"
            id="email"
            placeholder="Escribe tu email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label blue-color bold">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control placeholder-size"
            id="password"
            placeholder="Escribe tu contraseña..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <Button backgroundColorClass="bttn-primary" text="Aceptar" />
          <Link to={`/`}><Button backgroundColorClass="bttn-secondary" text="Cancelar" /></Link>
        </div>
        <p className="accede bold">¿Ya tienes una cuenta? Accede <Link to={`/login`} className="aqui">aquí</Link></p>
      </form>
    </main>
  );
};

export default SigninForm;
