import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Form from '../../components/form/form';
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
