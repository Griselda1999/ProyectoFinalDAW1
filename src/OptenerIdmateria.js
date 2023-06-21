import React, { useState } from 'react';

function OptenerIdmateria() {
  const [alumno, setAlumno] = useState(null);
  const [alumnoId, setAlumnoId] = useState('');
  const [error, setError] = useState('');

  const handleGetAlumno = () => {
    if (alumnoId) {
      fetch(`http://localhost:3001/api/materia/${alumnoId}`)
        .then((response) => response.json())
        .then((data) => {
          setAlumno(data);
          setError('');
        })
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <div>
      <h2>Alumno Búsqueda</h2>
      <div>
        <input
          type="text"
          placeholder="Ingrese el ID del alumno"
          value={alumnoId}
          onChange={(e) => setAlumnoId(e.target.value)}
        />
        <button onClick={handleGetAlumno}>Buscar Alumno</button>
      </div>

      {alumno && (
        <div>
          {alumno.length > 0 ? (
            <div>
              <p>ID: {alumno[0].id}</p>
              <p>Nombre: {alumno[0].mnombre}</p>
              <p>Descripción: {alumno[0].descripcion}</p>
            </div>
          ) : (
            <p>Alumno No Matriculado</p>
          )}
        </div>
      )}
    </div>
  );
}

export default OptenerIdmateria;
