import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Autenticación exitosa, redirigir o realizar otras acciones necesarias
            } else {
                // Autenticación fallida, manejar errores
            }
        } catch (error) {
            // Manejar errores de red u otros errores
        }
    };

    return (
        <main className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="reg-form">
                <h2 className="text-center mb-3 pink-color border-bottom border-3 pb-2 font-weight-bold">Acceso de usuario</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label blue-color font-weight-bold">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control placeholder-size"
                        id="email"
                        placeholder="Escribe tu email..."
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label blue-color font-weight-bold">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control placeholder-size"
                        id="password"
                        placeholder="Escribe tu contraseña..."
                        required
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="d-flex justify-content-evenly">
                    <button type="submit" className="btn btn-primary">Aceptar</button>
                    <Link to={`/`}><button className="btn btn-secondary">Cancelar</button></Link>
                </div>
            </form>
        </main>
    );
}

export default LoginForm;
