// Navegar Entre paginas
import { Link, Outlet } from 'react-router-dom';


function BarraNavegacion(){
    return  <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    
   
    <div className="container-fluid">
       <a class="navbar-brand" href="#">
      <img src="https://1000marcas.net/wp-content/uploads/2021/05/University-of-California-logo.png" alt="Bootstrap"  pwidth="180" height="90"></img>
    </a>
      <a className="navbar-brand" style={{color:"white" ,paddingLeft:"540px"}} href="" ><Link to="/Alumno" className="link flex">Alumno</Link></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" >
          <a className="nav-link active" aria-current="page" style={{color:"white"}} href="#"><Link to="/Docente" className="link flex">Docentes</Link></a>
          <a className="nav-link" style={{color:"white"}} href="#"><Link to="/Materia" className="link flex">Materia</Link></a>
          <a className="nav-link" style={{color:"white"}} href="#"><Link to="/Seccion" className="link flex">Seccion</Link></a>
          <a className="nav-link disabled" style={{color:"white"}} href="#"><Link to="/Carrera" className="link flex">Carrea</Link></a>
        </div>
      </div>
    </div>
     {/* Navegar Entre Paginas  */}
    <Outlet></Outlet>
    </nav>
    
    
   
}

export default BarraNavegacion