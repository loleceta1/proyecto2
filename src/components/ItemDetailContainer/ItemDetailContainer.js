
import { useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import  productos  from '../../utils/productsMock'
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    const getItem = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
           
        })
    }


    useEffect( () => {
       // getItem()
       // .then( (res) => {
       // console.log("respuesta GetItem", res)
       // setProduct(res)
       // })
        if(productFilter === undefined){
            navigate('/NotFound')
        }else {
            setProduct(productFilter)
        }
      
       
       
    }, [id])
 //Funcion qu eme devuelve el objeto que match con el useParam
    const productFilter = productos.find( (product) => {
            
        return product.id == id
        
    })


    return(
        <> 
          
            <ItemDetail data={product} />
        </>
    )
}

export default ItemDetailContainer