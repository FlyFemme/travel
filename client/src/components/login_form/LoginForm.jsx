import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Button from "../button/Button";
import swal from 'sweetalert';


const LoginForm = () => {
    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: loginInput.email,
            password: loginInput.password,
        };

        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            axios.post(`http://localhost:8000/api/login`, formData).then(res => {
                // if (res.data.status === 200) {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                localStorage.setItem('auth_user_id', res.data.id);
                swal("Success", res.data.message, "success");
                navigate('/');

                //SI EL LOGIN ES INCORRECTO ENTONCES ESTA FUNCION NO SE VA EJECUTAR, POR LO TANTO SE TIENE QUE USAR .CATCH PARA ESTA PROMESA
                // } else if (res.data.status === 401) {
                //     swal("Warning", res.data.message, "warning");
                // }
                // else {
                //     setLogin({ ...loginInput, error_list: res.data.validation_errors });
                // }
            }).catch(function () {
                // ACÁ SE DEBERÍA MOVER LA LINEA 41 A 46, Y BORRAR LA LINEA 33
            });
        });
    }

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={loginSubmit} action="/login" method="POST" className="reg-form">
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 bold">Acceso de usuario</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label blue-color bold">E-mail</label>
                    <input
                        onChange={handleInput}
                        value={loginInput.email}
                        type="email"
                        name="email"
                        className="form-control placeholder-size"
                        placeholder="Escribe tu email..."
                    />
                    <span>{loginInput.error_list.email}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label blue-color bold">Contraseña</label>
                    <input
                        onChange={handleInput}
                        value={loginInput.password}
                        type="password"
                        name="password"
                        className="form-control placeholder-size"
                        placeholder="Escribe tu contraseña..."
                    />
                    <span>{loginInput.error_list.password}</span>

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