import CardItem from '../Card/Card';
import {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import {useParams} from "react-router-dom"
//firestore
import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
import db from '../../utils/firebaseConfig';


const CardList= ({title}) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect( () => {
        setProducts([])
        console.log()
        getProducts()
        .then( (productos) => {
            // console.log("productos: ", productos)
            category ?  filterFirebase() : setProducts(productos)
        })
    }, [category])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            // console.log("product: ", product)
            return product
        })
        return productList
    }


    // const filterByCategory = (array, category) => {
    //     return array.map( (item) => {
    //         if(item.category === category) {
    //             return setProducts(products => [...products, item])
    //         }
    //     })
    // }

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==", category));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
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