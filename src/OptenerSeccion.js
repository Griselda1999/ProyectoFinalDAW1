import React, { useState, useEffect } from 'react';

function ObtenerIdSeccion() {
  const [alumno, setAlumno] = useState(null);
  const [alumnoId, setAlumnoId] = useState('');
  const [error, setError] = useState('');

  const handleGetAlumno = () => {
    if (!alumnoId) {
      setError('El ID no puede estar vacío');
    } else if (isNaN(alumnoId)) {
      setError('El ID debe ser numérico');
    } else {
      fetch(`http://localhost:3001/api/seccion/${alumnoId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setAlumno(data);
            setError('');
          } else {
            setError('ID no existente');
            setAlumno(null);
          }
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

      {error && <p>{error}</p>}

      {alumno && (
        <div>
          {alumno.length > 0 ? (
            <div>
              <p>ID: {alumno[0].id}</p>
              <p>Número de Aula: {alumno[0].num_aula}</p>
              <p>ID Campus: {alumno[0].id_campus}</p>
              <p>ID Docente: {alumno[0].id_docente}</p>
              <p>ID Materia: {alumno[0].id_materia}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}

export default ObtenerIdSeccion;
