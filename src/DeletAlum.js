import React, { useEffect, useState } from 'react';

function EliminarAlumno() {
  const [Datoalumnocard, SetDatos] = useState([]);
  const [Alumnoid, setAlumnoid] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      Accept: 'application/json',
    };

    if (Alumnoid) {
      fetch(`http://localhost:3001/api/alumno/${Alumnoid}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.length > 0) {
            SetDatos(result);
            setError('');
          } else {
            setError('ID no existente');
            SetDatos([]);
          }
        })
        .catch((error) => console.log('Error', error));
    }
  }, [Alumnoid]);

  const handleDelete = () => {
    if (!Alumnoid) {
      setError('El ID no puede estar vacío');
    } else if (isNaN(Alumnoid)) {
      setError('El ID debe ser numérico');
    } else {
      var requestOptions = {
        method: 'DELETE',
        Accept: 'application/json',
      };

      fetch(`http://localhost:3001/api/alumno/${Alumnoid}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // Realizar acciones adicionales después de eliminar el alumno, si es necesario
        })
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <div>
      <h2>Eliminar Alumnos</h2>
      <div>
        <input
          type="text"
          placeholder="Ingrese el ID del alumno"
          value={Alumnoid}
          onChange={(e) => setAlumnoid(e.target.value)}
        />
        <button onClick={handleDelete}>Eliminar</button>
      </div>

      {error && <p>{error}</p>}

      {Datoalumnocard.length > 0 ? (
        <div>
          <p>ID: {Datoalumnocard[0].id}</p>
          <p>Nombre: {Datoalumnocard[0].nombre}</p>
          <p>Apellido: {Datoalumnocard[0].apellido}</p>
          <p>Correo: {Datoalumnocard[0].correo}</p>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default EliminarAlumno;
