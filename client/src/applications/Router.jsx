import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/login/Login'
import App from '../App'

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path='/'  element= {<App/>} />
            <Route  path='/login'  element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router