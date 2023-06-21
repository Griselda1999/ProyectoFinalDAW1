import React, { useState } from 'react';

function OptenerIdDocente() {
  const [alumno, setAlumno] = useState(null);
  const [alumnoId, setAlumnoId] = useState('');
  const [error, setError] = useState('');

  const handleGetAlumno = () => {
    if (!alumnoId) {
      setError('El ID no puede estar vacío');
    } else if (isNaN(alumnoId)) {
      setError('El ID debe ser numérico');
    } else {
      fetch(`http://localhost:3001/api/docente/${alumnoId}`)
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
              <p>Nombre: {alumno[0].dnombre}</p>
              <p>Apellido: {alumno[0].dapellido}</p>
              <p>Correo: {alumno[0].correo}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}

export default OptenerIdDocente;
