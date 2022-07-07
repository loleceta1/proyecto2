import CardList from '../components/CardList/CardList';
import { useEffect, useState } from 'react';
import productos from '../utils/productsMock';
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig';
import { query, collection, where, getDocs } from "firebase/firestore";

const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    

    useEffect( () => {
    setProducts([])
    //console.log('category', category )
    getProducts()
    .then( (productos) => {
    
         //setProducts(response)
         category ?  filterFirebase() : setProducts(productos)
    })
    

}, [category])


const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
       
    })
}

/*const filterByCategory = (array) => {
    return array.map ( (item) => {
        if(item.category == category){
            return setProducts (products => [...products, item])
        }
    })
}*/

const filterFirebase = async () => {
    const productRef = collection(db, 'productos');
    const queryResult = query (productRef, where("category", "==", category))
   
    const querySnapshot = await getDocs(queryResult);
    const productList = querySnapshot.docs.map((doc) =>{
        let product = doc.data()
        product.id = doc.id
        console.log ("producto filtrado: ", product)
        return product
    })
    return setProducts(productList)
}

    return(
        <div className = 'general-container'> 
        <CardList title = {'Vehículos'} products ={products} />
    </div>
    )
}
export default ProductList