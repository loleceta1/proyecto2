
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import { Container , Grid } from '@mui/material'


function App() {
  return (
    <div className="App">
      
      <NavBar />
     
     <Container> 
       <Grid container className="general-container">
     <Grid item md={4}> 
     <CardItem title={"Mercedes"}  precio ={32000} image={"auto2.jpg"} />
     </Grid>
     <Grid item md={4}> 
     <CardItem title={"Mercedes"}  precio ={35000} image={"auto1.jpg"} />
     </Grid>
     <Grid item md={4}> 
     <CardItem  title={"Mustang"}  precio ={40000}  image={"auto3.jpg"}/>
     </Grid>
     </Grid>
     </Container>
    </div>
 
  );
}

export default App;
