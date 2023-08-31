import React from "react";
import { Link } from 'react-router-dom';
import './SigninForm.css';

const SigninForm = () => {

    return (
        <main class="d-flex justify-content-center">
            <form action="" method="POST" novalidate class="reg-form">
                <h2 class="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Registro de usuario</h2>

                <div class="mb-3">
                    <label for="name" class="form-label blue-color bold">Nombre</label>
                    <input type="text" name="name" class="form-control placeholder-size" value="" id="name" placeholder="Escribe tu nombre..." />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label blue-color bold">E-mail</label>
                    <input type="email" name="email" class="form-control placeholder-size" value="" id="email" placeholder="Escribe tu email..." />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label blue-color bold">Contraseña</label>
                    <input type="password" name="password" class="form-control placeholder-size" id="password" placeholder="Escribe tu contraseña..." />
                </div>
                <div class="d-flex justify-content-evenly">
                    <button type="submit" class="btn btn-primary">Aceptar</button>
                    <Link to="" class="btn btn-danger" role="button">Cancelar</Link>
                </div>
                <p class="accede bold">¿Ya tienes una cuenta? Accede <Link to="" class="aqui">aquí</Link></p>
            </form>
        </main>
    )
}

export default SigninForm;