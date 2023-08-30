import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.svg';
import Glass from '../../Assets/Glass.svg';
import Home from '../../Assets/Home.svg';
import Avatar from '../../Assets/Avatar.svg';
import './Navbar.css';

const Navbar = () => {

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
                        <Link to=""><img src={Home} className="navbar-icons" alt="" /></Link>
                        <Link to=""><img src={Avatar} className="navbar-icons" alt="" /></Link>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar