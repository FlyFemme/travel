import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Form from '../../components/forms/Form';

const CreatePage = () => {
  const endpoint = 'http://localhost:8000/api';

  const [submitMessage, setSubmitMessage] = useState('');  

  const handleCreateResponse = (message) => {
    setSubmitMessage(message);
  };

  return (
    <div>
      <Navbar />
      <div className="squeare">
        <div className="page-content">
          <div className="col-md-5 border p-4 d-flex flex-column align-items-center">
            <div className="border-bottom mb-3">
              <h2 className="text-center mb-3 title d-flex align-items-center justify-content-center">Crear destino</h2>
              <Form endpoint={endpoint} handleResponse={handleCreateResponse} submitMessage={submitMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
