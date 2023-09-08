import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> 3e2d0102be7279f04d9ae3f2007c8a726e3c4df3
import './SigninForm.css';
import Button from "../button/Button";
import axios from 'axios';
import swal from 'sweetalert';


const SigninForm = () => {
<<<<<<< HEAD
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
=======
    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        };

        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post('http://localhost:8000/api/register', formData).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate('/login');
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            });
        });
    }

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="reg-form" action="/register" method="POST">
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Registro de usuario</h2>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label blue-color bold">Nombre</label>
                    <input
                        onChange={handleInput}
                        value={registerInput.name}
                        type="text"
                        name="name"
                        className="form-control placeholder-size"
                    />
                    <span>{registerInput.error_list.name}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label blue-color bold">E-mail</label>
                    <input
                        onChange={handleInput}
                        value={registerInput.email}
                        type="text"
                        name="email"
                        className="form-control placeholder-size"
                    />
                    <span>{registerInput.error_list.email}</span>

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label blue-color bold">Contraseña</label>
                    <input
                        onChange={handleInput}
                        value={registerInput.password}
                        type="password"
                        name="password"
                        className="form-control placeholder-size"
                    />
                    <span>{registerInput.error_list.password}</span>

                </div>
                <div className="d-flex justify-content-evenly">
                    <Button backgroundColorClass="bttn-primary" text="Aceptar" />
                    <Link to={`/`}><Button backgroundColorClass="bttn-secondary" text="Cancelar" /></Link>
                </div>
                <p className="accede bold">¿Ya tienes una cuenta? Accede <Link to={`/login`} className="aqui">aquí</Link></p>
            </form>
        </main>
    )
}
>>>>>>> 3e2d0102be7279f04d9ae3f2007c8a726e3c4df3

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
