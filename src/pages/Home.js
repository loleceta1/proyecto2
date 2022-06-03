import CardList from '../components/CardList/CardList'
import { useEffect, useState } from 'react'
import productos from '../utils/productsMock'


const Home = () => {

    const [products, setProducts] = useState([])
    const [error, setError] = useState()


  useEffect( () => {
    getProducts()
    .then( (response) => {
        // console.log("Then: Respuesta promesa: ", response)
         setProducts(response)
    })
    .catch( (error) => {
      setError(error)
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
        }, 2000);
       
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

    return(
   <>    
    <div className = 'general-container'> 
        <CardList title = {'Nuestros Vehículos'} products ={productos} />
    </div>
    {error && <div className = "text-center mt-5"><h1>{error} </h1></div>}
    </> 
    )

}

export default Home