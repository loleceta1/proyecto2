
import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import  productos  from '../../utils/productsMock'
import {useParams} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import db from '../../utils/firebaseConfig'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProduct] = useState({})


    useEffect( () => {
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })      
    }, [id])


    const getProduct = async () => {
        const docRef = doc (db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        producto.id = docSnapshot.id
        return product
        //console.log("docSnapshot: ", docSnapshot.data())
    }

 //Funcion qu eme devuelve el objeto que match con el useParam
   // const productFilter = productos.find( (product) => {
            
        //return product.id == id
        
   // })


    return(
        <> 
          
            <ItemDetail data={producto} />
        </>
    )
}

export default ItemDetailContainer