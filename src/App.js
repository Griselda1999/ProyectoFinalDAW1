import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './BarraNav';
import InsertAlumno from './InsertAlumno';
import { Routes, Route } from 'react-router-dom';
import EliminarAlumno from './DeletAlum';
import ActualizarAlumno from './ActualizarAlumno';
import TuComponente from './OptenerAlumno';
import OpteneridAlumno from './OptenerIdAlumnos';
import OptenerDocente from './OptenerDocente';
import OptenerIdmateria from './OptenerIdmateria';
import OptenerIdDocente from './OpteneridDocente';
import OptenerIdSeccion from './OptenerSeccion';
import InsertDocente from './InsertDocente';
import ActualizarDocente from './ActializarDocente';
import EliminarDocente from './DeletDocente';
function App() {

  

  return <>
  {/* Navegar Entre Paginas  */}
  <BarraNavegacion/>
  <Routes>

  <Route exact path='/' component={ <BarraNavegacion/>}>
  <Route path="/Alumno" element={
    <div>
     <OpteneridAlumno></OpteneridAlumno>
   <TuComponente></TuComponente>
  <InsertAlumno></InsertAlumno>
  <ActualizarAlumno></ActualizarAlumno>
 
<EliminarAlumno></EliminarAlumno>
    </div>
  } />
  <Route path='/Docente' element={ <div>
    <OptenerIdDocente></OptenerIdDocente>
     <OptenerDocente></OptenerDocente>
   <InsertDocente></InsertDocente>
   <ActualizarDocente></ActualizarDocente>
   <EliminarDocente></EliminarDocente>
    </div>}></Route> 
    <Route path='/Materia' element={ <div>
     <OptenerIdmateria></OptenerIdmateria>
   
    </div>}></Route>

    <Route path='/Seccion' element={ <div>
     <OptenerIdSeccion></OptenerIdSeccion>
   
    </div>}></Route>

    

    
  </Route>
  </Routes>

 
 <h2>INGRESE POR LA BARRA DE NAVEGACION</h2>
 <h2>Bienvenido </h2>
    
      
     </>

}

export default App;
