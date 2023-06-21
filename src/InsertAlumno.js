
import React, { useState } from 'react';
import axios from 'axios';

function InsertAlumno() {
  const [alumnombre, setAlumnombre] = useState('');
  const [alumapellido, setAlumapellido] = useState('');
  const [alumcorreo, setAlumcorreo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePost = () => {
    if (alumnombre === '' || alumapellido === '' || alumcorreo === '') {
      setErrorMessage('No se pueden enviar datos vacíos');
    } else if (/^\d+$/.test(alumnombre) || /^\d+$/.test(alumapellido)) {
      setErrorMessage('El nombre y apellido no pueden ser numéricos');
    } else {
      axios
        .post('http://localhost:3001/api/alumno', {
          alumnombre: alumnombre,
          alumapellido: alumapellido,
          alumcorreo: alumcorreo,
        })
        .then((response) => {
          // Realizar acciones adicionales después de crear el alumno, si es necesario
          console.log(response.data);
        })
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <div>
      <h2>Registro De Alumno</h2>
      <div>
        <input
          type="text"
          placeholder="Ingrese el nombre del alumno"
          value={alumnombre}
          onChange={(e) => setAlumnombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese el apellido del alumno"
          value={alumapellido}
          onChange={(e) => setAlumapellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese el correo del alumno"
          value={alumcorreo}
          onChange={(e) => setAlumcorreo(e.target.value)}
        />
        <button onClick={handlePost}>Crear Alumno</button>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default InsertAlumno;
