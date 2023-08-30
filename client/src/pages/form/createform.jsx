import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/form/Form';
import '../../components/navbar/navbar.css';
import '../../components/form/form.css'

const CreateFormPage = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Form />
            </div>
        </>
    );
};

export default CreateFormPage;
