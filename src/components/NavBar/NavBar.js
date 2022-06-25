import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categories = ['nuevo', 'destacado'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="navigator-bar">
        <AppBar
          className="header"
          position="static"
          style={{ backgroundColor: "transparent" }}
        >
          <Toolbar>
            <Link to="/">
              <div className="logo">
                <img src="/logo-auto.png" alt="logo" />
              </div>
            </Link>

            <ul className="navigator">
              <li>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none"}} to="/Productos">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onMouseEnter={handleClick}
                  >
                  Vehículos
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onMouseLeave={handleClose}
                  >
                    {categories.map((cat) => {
                      return (<MenuItem
                          className="navigator__link"
                          onClick={handleClose}
                          >
                         
                          <Link to={`/products/${cat}`}>{cat}</Link>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                  Oportunidades
                  </Button>
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/contact">
                  <Button
                    disableRipple
                    variant="text"
                    className="navigator__link"
                  >
                    Contacto
                  </Button>
                </Link>
              </li>
            </ul>
          
            <CartWidget />
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default NavBar;
/*const NavBar = () => {
  return (
   
    <AppBar position="static" className="header-primary">
      <Toolbar>
        <div className="container-logo" >
       <h6>AR Automotores</h6>
       </div>
       <ul>
         <li>
          <Link to='/contact'>Contacto</Link>
         
           
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
           <Link to = '/'>Home</Link>
         </li>
       </ul>
       <div className="cart-Widget"> 
      <CartWidget />
      </div>
     
      </Toolbar>
     
    </AppBar>
  

  ); 
}
export default NavBar;*/