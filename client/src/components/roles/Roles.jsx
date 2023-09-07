import React, { useState } from 'react';

const Roles = () => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handlePermissionChange = (event) => {
    const permissionId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setPermissions([...permissions, permissionId]);
    } else {
      setPermissions(permissions.filter((id) => id !== permissionId));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario al backend
  };

  return (
    <div className="container mt-5">
      <h1>Crear Rol</h1>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre del Rol:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Permisos para este Rol:</label>
                  <br />
                  {permissions.map((permissionId) => (
                    <div key={permissionId} className="form-check">
                      <input
                        type="checkbox"
                        value={permissionId}
                        onChange={handlePermissionChange}
                        className="form-check-input"
                        id={`permission-${permissionId}`}
                      />
                      <label className="form-check-label" htmlFor={`permission-${permissionId}`}>
                        Permiso {permissionId} {/* Reemplaza esto con la forma en que muestres los nombres de los permisos */}
                      </label>
                    </div>
                  ))}
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
