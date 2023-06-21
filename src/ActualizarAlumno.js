




import React, { useEffect, useState } from 'react';

function ActualizarAlumno() {
  const [Datoalumnocard, SetDatos] = useState([]);
  const [Alumnoid, setAlumnoid] = useState('');
  const [Alumnonombre, setAlumnonombre] = useState('');
  const [Alumnoapellido, setAlumnoapellido] = useState('');
  const [Alumnocorreo, setAlumnocorreo] = useState('');
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

  const handleUpdate = () => {
    if (!Alumnoid) {
      setError('El ID no puede estar vacío');
    } else if (isNaN(Alumnoid)) {
      setError('El ID debe ser numérico');
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        nombre: Alumnonombre,
        apellido: Alumnoapellido,
        correo: Alumnocorreo,
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`http://localhost:3001/api/alumno/${Alumnoid}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // Realizar acciones adicionales después de actualizar los datos del alumno, si es necesario
        })
        .catch((error) => console.log('Error', error));
    }
  };

  return (
    <div>
      <h2>Actualizar Alumno</h2>
      <div>
        <input
          type="text"
          placeholder="Ingrese el ID del alumno"
          value={Alumnoid}
          onChange={(e) => setAlumnoid(e.target.value)}
        />
        <button onClick={handleUpdate}>Actualizar</button>
      </div>

      {error && <p>{error}</p>}

      {Datoalumnocard.length > 0 ? (
        <div>
          <p>ID: {Datoalumnocard[0].id}</p>
          <p>Nombre: {Datoalumnocard[0].nombre}</p>
          <p>Apellido: {Datoalumnocard[0].apellido}</p>
          <p>Correo: {Datoalumnocard[0].correo}</p>
          <h3>Editar Datos</h3>
          <div>
            <input
              type="text"
              placeholder="Ingrese el nuevo nombre"
              value={Alumnonombre}
              onChange={(e) => setAlumnonombre(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ingrese el nuevo apellido"
              value={Alumnoapellido}
              onChange={(e) => setAlumnoapellido(e.target.value)}
            />
           
              <input
              type="text"
              placeholder="Ingrese el nuevo correo"
              value={Alumnocorreo}
              onChange={(e) => setAlumnocorreo(e.target.value)}
            />
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default ActualizarAlumno;



