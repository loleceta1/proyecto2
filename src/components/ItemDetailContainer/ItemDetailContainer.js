
import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import  productos  from '../../utils/productsMock'
import {useParams} from "react-router-dom"
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import db from '../../utils/firebaseConfig'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})


    useEffect( () => {
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })      
    }, [id])


    const getProduct = async () => {
        const docRef = doc (db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        //console.log("itemDetailContainer", docSnapshot)
       
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
        console.log("itemDatailContainer: ", docSnapshot.data())
    
 
    }
 
 //Funcion qu eme devuelve el objeto que match con el useParam
   

    


    return(
        <> 
          
            <ItemDetail data={product} />
        </>
    )
}

export default ItemDetailContainer