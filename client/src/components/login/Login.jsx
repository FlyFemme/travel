import React from 'react'
import "./Login.css"


function Login() {
  return (
    <div>
      <h2 className="red-underlined">Acceso de Usuario</h2>
    <form>
      <div>
        <label htmlFor="username" className='blue-label'>e-mail</label>
        <input
          type="text"
          id="username"
          name="username"
          className="shadow-input"
        />
      </div>
      <div>
        <label htmlFor="password" className='blue-label'>Contraseña<applet></applet><acronym title=""></acronym></label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow-input"       
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login