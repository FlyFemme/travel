import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/Form/Form';
import './CreateForm.css'

const CreatePage = () => {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        <div className="col-md-5 border p-4 d-flex flex-column align-items-center">
          <div className="border-bottom mb-3">
            <h2 className="text-center mb-3 title d-flex align-items-center justify-content-center">Crear destino</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
