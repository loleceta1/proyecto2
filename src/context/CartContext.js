import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState(JSON.parse(localStorage.getItem('products')) || [])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCartPrice, setTotalCartPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price)
            localStorage.setItem('products', JSON.stringify([...cartListItems, product]))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc += item.count), 0);
      };
    

    const deleteProduct = (product) => {
        // console.log("Producto a eliminar:", product)
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        settotalCartPrice(0)
        setCartListItems([])
    }

    const reduceCart = (itemId) => {
        const itemToRemove = cartListItems.filter((item) => item.id !== itemId);
        setCartListItems(itemToRemove);
    
        const newCart = cartListItems.filter((product) => product.id !== itemId);
        setCartListItems(newCart);
    
        localStorage.setItem("products", JSON.stringify(newCart));
      };

      


    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct,
        reduceCart,
        cartItemsQuantity,
        totalCartPrice


       
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }