import './NavBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const NavBar = () => {
  return (
   
    <AppBar position="static" className="header-primary">
      <Toolbar>
        <div className="container-logo" >
       <h6>AR Automotores</h6>
       </div>
       <ul>
         <li>
           <a href="#" className="menu">Contacto</a>
         </li>
         <li>
           <a href="#" className="listado">Vehículos</a>
         </li>
         <li>
           <a href="#" className="listado">Financiaciones</a>
         </li>
         <li>
           <a href="#" className="listado">Oportunidades</a>
         </li>
         <li>
           <a href="#" className="listado">Home</a>
         </li>
       </ul>
      
      </Toolbar>
    </AppBar>
  

  ); 
}
export default NavBar;