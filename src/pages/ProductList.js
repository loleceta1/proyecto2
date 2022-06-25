import CardList from '../components/CardList/CardList'
import { useEffect, useState } from 'react'
import productos from '../utils/productsMock'
import { useParams } from 'react-router-dom'
import db from '../utils/firebaseConfig'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    

  useEffect( () => {
    setProducts([])
    //console.log('category', category )
    getProducts()
    .then( (response) => {
    
        // setProducts(response)
        filterByCategory(response)
    })
    

}, [category])


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
       
    })
}

const filterByCategory = (array) => {
    return array.map ( (item) => {
        if(item.category == category){
            return setProducts (products => [...products, item])
        }
    })
}

    return(
        <div className = 'general-container'> 
        <CardList title = {'Vehículos'} products ={products} />
    </div>
    )
}
export default ProductList