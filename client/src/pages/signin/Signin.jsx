import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import SigninForm from '../../components/SigninForm/SigninForm';
import './Signin.css';

const Signin = () => {

    return (
        <>
            <Navbar />
            <SigninForm />
        </>
    );
};

export default Signin;
