import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SigninForm.css';
import Button from "../button/Button";
import axios from 'axios';

const SigninForm = () => {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/register', formData); // Usa Axios para enviar la solicitud POST

            if (response.status === 200) {
                // El registro fue exitoso, establece el estado de éxito en verdadero
                setRegistrationSuccess(true);
            } else {
                // El registro falló, puedes manejar los errores aquí.
            }
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="reg-form" action="/register" method="POST">
                <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Registro de usuario</h2>

                {registrationSuccess && (
                    <div className="alert alert-success">
                        Registro exitoso. ¡Ahora puedes iniciar sesión!
                    </div>
                )}

                <div className="mb-3">
                    <label htmlFor="name" className="form-label blue-color bold">Nombre</label>
                    <input type="text" name="name" className="form-control placeholder-size" id="name" placeholder="Escribe tu nombre..." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label blue-color bold">E-mail</label>
                    <input type="email" name="email" className="form-control placeholder-size" id="email" placeholder="Escribe tu email..." required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label blue-color bold">Contraseña</label>
                    <input type="password" name="password" className="form-control placeholder-size" id="password" placeholder="Escribe tu contraseña..." required />
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

export default SigninForm;