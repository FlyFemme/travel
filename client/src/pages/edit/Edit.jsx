import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/forms/Form';


const CreatePage = () => {
    return (
        <div>
            <Navbar />
            <div className="page-content">
            <h1 style={{textAlign: "center"}} >Crear destino a new post</h1><br/>
            <Form />
            </div>
        </div>
    );
};

export default CreatePage;
