import { createContext, useState } from "react";

const CartContext = createContext()

//defino el provider que va a darle toda la info a los children
const CartProvider = ({children}) => {
//state para guardar todos los productos que vaya agragando al carrito - nuevo array - traigo del local storage la key "product"
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price) 
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const reduceCart = (itemId) => {
        let itemToRemove = cartListItems.filter((item) => item.id !== itemId);
        
             setCartListItems(itemToRemove);
            
             setTotalPrice(totalPrice - itemId.price)
    
        const newCart = cartListItems.filter((product) => product.id !== itemId);
        setCartListItems(newCart);
    
        localStorage.setItem("products", JSON.stringify(newCart));
        
        
      };

        //REMOVE ITEM - fn .find para encontrar el producto que tenga el mismo id que itemId
    const removeProduct = (itemId) => {
      const productToRemove = cartListItems.find(item => item.id === itemId);
      setTotalPrice(totalPrice - itemId.price) 
     

      //fn .indexOf para traer el indice del producto a remover (el que tenia el mismo id) y guardarlo en una variable
      let indexOfItem = cartListItems.indexOf(productToRemove);        
     
      //fn .splice para que elimine 1 elemento del nuevo array [indexOfItem], que sera el que coincida con el id que estoy buscando
      cartListItems.splice((indexOfItem), 1);
      
      //localStorage para eliminar los productos del carrito
      localStorage.setItem('products', JSON.stringify ([...cartListItems]))      
      return setCartListItems(cartListItems => [...cartListItems])
      
  }

      const totalCartPrice = () => {
        return cartListItems.reduce(
          (acc, item) => acc + (  item.cantidad * item.price),
          0
        );
      
      };

     

      const deleteProduct = (product) => {
        // console.log("Producto a eliminar:", product)
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
        setTotalPrice( )
        setCartListItems([])
      
    }

    const cleanCartProducts = () => {
        setTotalPrice()
        setCartListItems([])
    }
   

 
    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct,
        reduceCart,
        removeProduct,
        totalCartPrice,
      

    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }
