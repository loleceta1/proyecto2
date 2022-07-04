import CardItem from '../Card/Card';
import {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
//firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';


const CardList= ({title}) => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        getProducts()
        .then( (productos) => {
            //  console.log("productos: ", productos)
         setProducts(productos)
        })
      
    }, [])
    
    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        console.log (productSnapshot)
        const productList = productSnapshot.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id
            console.log ("cardlist: ", product)
            return product
        })
        return productList
    }
   

    return (
        <>
        <h2>{title} </h2>
        <Grid container spacing = {2}>
        {
            products.map( ({title, price, image, id, stock}) => {
               
                return(
                     
                    <Grid item md={4} key={id}> 
                        <CardItem
                            title={title}
                            price ={price} 
                            image={image} 
                            stock={stock} 
                            id={id} 
                        />
                    </Grid>
                   
                )
            })
        }
            
            
        </Grid>
        </>
    )
    
}
export default CardList;