
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList'
import SnackBar from './components/SnackBar/SnackBar'
import {useState, useEffect} from 'react'
import productos from './utils/productsMock'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  const [products, setProducts] = useState([])


  useEffect( () => {
    getProducts()
    .then( (response) => {
        // console.log("Then: Respuesta promesa: ", response)
         setProducts(response)
    })
    .catch( (err) => {
        // console.log("Catch: Fallo la llamada", err)
    })
    .finally ( () => {

       // console.log ("finally. terminop la promesa")
    })

}, [])


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
       
    })
}




//Otra manera: 
/*async function productsAsync(){
try{ 
const productos = await getProducts()
console.log ("productos asincrono: ", productos)
setProducts(response)
} catch(err){
console.log("fallo la llamada", err)
}
}
productsAsync()*/

/*useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then( (data) => {
    console.log ("respuesta: ", data)
  })
}, [])*/


  return (
    <div className="App">
    
      <NavBar />
     
     <div className = 'general-container'> 
      <CardList title = {'Destacados'} products ={productos} /> 
     </div>
     <ItemDetailContainer />
    </div>
 
  );
}

export default App;
