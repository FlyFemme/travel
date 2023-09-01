import React from "react";
import { Link } from 'react-router-dom';
import './SigninForm.css';
import Button from "../Button/Button";

const SigninForm = () => {

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit="" className="reg-form">
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Registro de usuario</h2>

                <div className="mb-3">
                    <label for="name" className="form-label blue-color bold">Nombre</label>
                    <input type="text" name="name" className="form-control placeholder-size" id="name" placeholder="Escribe tu nombre..." required />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label blue-color bold">E-mail</label>
                    <input type="email" name="email" className="form-control placeholder-size" id="email" placeholder="Escribe tu email..." required />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label blue-color bold">Contraseña</label>
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