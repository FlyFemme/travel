import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
    <h2>Acceso de Usuario</h2>
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"          
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default Login