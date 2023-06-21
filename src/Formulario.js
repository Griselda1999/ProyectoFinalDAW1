
import React, { useState } from 'react';

function Formulario() {
  const [nombre, setAlumnombre] = useState('');
  const [apellido, setAlumapellido] = useState('');
  const [correo, setAlumcorreo] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


    fetch('http://localhost:3001/api/alumno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         nombre,
        apellido,
        correo,
      }),
    })

      .then((response) => response.json())
      .then((result) => {
        console.log('Se a Registrado exitosamente:', result);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  
 

  return (
    <div className="container">
      <label className="form-label">Registrar De Matricula Alumnos</label>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Ingrese Su Nombre"
              value={nombre}
              onChange={(e) => setAlumnombre(e.target.value)}
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Ingrese Su Apellido"
              value={apellido}
              onChange={(e) => setAlumapellido(e.target.value)}
              aria-label=".form-control-lg example"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Ingrese Su Correo"
              value={correo}
              onChange={(e) => setAlumcorreo(e.target.value)}
              aria-label=".form-control-lg example"
            />
          </div>
          <center>
            <button type="submit" className="btn btn-dark">
              Enviar
            </button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
















// import {  useState } from 'react';
// import  axios from 'axios';

// function Formulario(){

//     //  const [alumid, setalumid] = useState('');

//     const [alumnombre, setalumnombre] = useState ('');
//     const [alumapellido, setalumapellido] = useState('');
//     const [alumcorreo, setalumcorreo] = useState('');


//     const postData = () => {
//         axios.post("http://localhost:3001/api/alumno", {
           
//         alumnombre   :alumnombre ,
//           alumnapellido:alumapellido,
//           alumncorreo :alumcorreo

//         }).then((result)=>{
           
//             setalumnombre("")
//             setalumapellido("")
//             setalumcorreo("")

//         })
//         //.catch((error) => console.log("error", error));
//         // console.log(alumnombre);
//         // console.log(alumapellido);
//         // console.log(alumcorreo);


// }

//     const handlesutmit = (e )=>{
//         e.preventDefauld()
//         postData()
//     }


    
//    return <div className="container">
    
//      <label className="form-label">Registrar De Matricula Alumnos</label>
//         <div className="car-body">
//             <form onSubmit={handlesutmit}>
             
          
                    
               

                 
               
               
//                 <div className="mb-3">
                    
               

//                     <label className="form-label">Nombre</label>
//                     <input className="form-control form-control-lg"
//                      type="text"
//                       placeholder="Ingrese Su Nombre "
//                       value={alumnombre}
//                       id="nombre"
//                        onChange={(e) => setalumnombre(e.target.value)} 
//                        aria-label=".form-control-lg example" />
                   
//                 </div>
//                 <div className="mb-3">
//                     <label className="form-label">Apellido</label>
//                     <input className="form-control form-control-lg" type="text" placeholder="Ingrese Su Apellido "
//                      value={alumapellido}
//                      id="apellido" onChange={(e) => setalumapellido(e.target.value)} aria-label=".form-control-lg example"/>
                   
//                 </div>
//                  <div className="mb-3">
//                     <label className="form-label">Correo</label>
//                     <input className="form-control form-control-lg" type="text" placeholder="Ingrese Su Correo "
//                      value={alumcorreo}
//                      id="correo" onChange={(e) => setalumcorreo(e.target.value)} aria-label=".form-control-lg example"/>
                   
//                 </div>

//             </form>
//             <center>
//             <button type='submit'  class="btn btn-dark" onClick={postData}  >Enviar</button>
//             </center>
//         </div>
//     </div>
   

   
// }

// export default Formulario