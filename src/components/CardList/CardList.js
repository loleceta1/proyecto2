import CardItem from '../Card/Card';
import {useState, useEffect} from 'react'
import { Grid } from '@mui/material'

const CardList= ({title}) => {
    const [products, setProducts] = useState([])
  
    const productos = [

        {
            id: 1,
            title:'Mercedes', 
            price: 32000,
            image:'auto2.jpg',
            description: '',
            stock: 3

        },
        {
            id: 2,
            title:'Mercedes', 
            price: 35000,
            image:'auto1.jpg',
            description: '',
            stock: 1

        },
        {
            id: 3,
            title:'Mustang', 
            price: 40000,
            image:'auto3.jpg',
            description: '',
            stock: 2

        },
        {
            id: 4,
            title:'Mustang', 
            price: 42000,
            image:'auto4.jpg',
            description: '',
            stock: 4

        },
        {
            id: 5,
            title:'Ferrari', 
            price: 55000,
            image:'auto5.jpg',
            description: '',
            stock: 1

        },
        {
            id: 6,
            title:'BMW', 
            price: 45000,
            image:'auto6.jpg',
            description: '',
            stock: 2

        },
    ]

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
           
        })
    }

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

    return (
        <>
        <h2>{title} </h2>
        <Grid container spacing = {2}>
        {
            products.map( ({title, price, image, id, stock}) => {
               
                return(
                     
                    <Grid item md={4} key={id}> 
                    <CardItem title={title}  precio ={price} image={image} stock={stock} />
                    </Grid>
                   
                )
            })
        }
            
            
        </Grid>
        </>
    )
}
export default CardList;