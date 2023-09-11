import React from "react";
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


const Navbar = () => {

    const navigate = useNavigate();

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

    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <>
                <Link to={`/`}><img src={Home} className="navbar-icons" alt="" /></Link>
                <Link to={`/signin`}><img src={Avatar} className="navbar-icons" alt="" /></Link>
            </>
        );
    }
    else {
        AuthButtons = (
            <>
                <Link to={`/`}><img src={Home} className="navbar-icons" alt="" /></Link>
                <Link to={`/create`}><img src={Create} className="navbar-icons" alt="" /></Link>
                <button type="button" onClick={logoutSubmit} className="logout-button"><img src={Logout} className="navbar-icons" alt="" /></button>
            </>
        );
    }

    return (
        <>
            <nav className="navbar navbar-light bg-white me-5 ms-5 border-bottom border-primary border-2">
                <div className="container-fluid">
                    <Link to="" className="navbar-brand"><img src={Logo} alt="" /></Link>
                    <form className="d-flex" action="" method="">
                        <div className="input-wrapper">
                            <input name="s" className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                            <Link to=""><img src={Glass} className="input-icon" alt="" /></Link>
                        </div>
                        {AuthButtons}
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;