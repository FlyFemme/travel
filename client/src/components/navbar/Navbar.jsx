import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Glass from '../../assets/Glass.svg';
import Home from '../../assets/Home.svg';
import Avatar from '../../assets/Avatar.svg';
import Create from '../../assets/Create.svg';
import Logout from '../../assets/Logout.svg';
import axios from "axios";
import swal from "sweetalert";
import './Navbar.css';
import { useLocation } from 'react-router-dom';


const Navbar = (props) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/logout').then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                localStorage.removeItem('auth_user_id');
                swal("Success", res.data.message, "success");
                navigate('/');
            }
        });
    }

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            //acá hay que hacer que se borre el input de la barra de búsqueda
            props.handleSearch('')
        } else {
            navigate('/')
        }
    }
    console.log(location)

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <>
                <div onClick={handleHomeClick}><img src={Home} className="navbar-icons" alt="" /></div>
                <Link to={`/signin`}><img src={Avatar} className="navbar-icons" alt="" /></Link>
            </>
        );
    }
    else {
        AuthButtons = (
            <>
                <div onClick={handleHomeClick}><img src={Home} className="navbar-icons" alt="" /></div>
                <Link to={`/create`}><img src={Create} className="navbar-icons" alt="" /></Link>
                <button type="button" onClick={logoutSubmit} className="logout-button"><img src={Logout} className="navbar-icons" alt="" /></button>
            </>
        );
    }



    return (
        <>
            <nav className="navbar navbar-light bg-white me-5 ms-5 border-bottom border-primary border-2">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand"><img src={Logo} alt="" /></Link>
                    <div className="d-flex">
                        <div className="input-wrapper">
                            <input className="search form-control me-2 rounded-pill" placeholder="Search..." type="text" name="query" onChange={(e) => setSearch(e.target.value)} />
                            <button onClick={() => props.handleSearch(search)} value='Search' className="search-button"><img
                                src={Glass} alt="" className="input-icon" /></button>
                        </div>
                        {AuthButtons}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;