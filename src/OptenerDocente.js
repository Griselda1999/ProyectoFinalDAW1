import React, { useState, useEffect } from "react";

function TablaAlumno(props) {
  return (
    <>
      <tbody className="table-group-divider">
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.dnombre}</td>
          <td>{props.dapellido}</td>
          <td>{props.correo}</td>
        </tr>
      </tbody>
    </>
  );
}

function OptenerDocente() {
  const [Datoalumno, SetDatos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      Accept: 'application/json'
    };

    fetch("http://localhost:3001/api/docente", requestOptions)
      .then(response => response.json())
      .then(result => SetDatos(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <table className="table-light" style={{ marginLeft: "300px", width: "800px", height: "200px" }}>
      <thead className="table-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo</th>
        </tr>
      </thead>
      {Datoalumno.map(dato => (
        <TablaAlumno
          key={dato.id}
          id={dato.id}
          dnombre={dato.dnombre}
          dapellido={dato.dapellido}
          correo={dato.correo}
        />
      ))}
    </table>
  );
}

export default OptenerDocente;
