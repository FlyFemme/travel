import React from "react";
import { Link } from 'react-router-dom';
import './LoginForm.css';
import Button from "../button/Button";

const LoginForm = () => {

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="reg-form">
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Acceso de usuario</h2>
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
            </form>
        </main>
    )
}

export default LoginForm;