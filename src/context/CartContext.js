import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
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
        const itemToRemove = cartListItems.filter((item) => item.id !== itemId);
        setCartListItems(itemToRemove);
    
        const newCart = cartListItems.filter((product) => product.id !== itemId);
        setCartListItems(newCart);
    
        localStorage.setItem("products", JSON.stringify(newCart));
      };

    const deleteProduct = (product) => {
        // console.log("Producto a eliminar:", product)
        setCartListItems(cartListItems.filter( (cartProduct) => cartProduct.id !== product.id) )
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }
    const [changeQuantity, setChangeQuantity] = useState(0);

    const changeQuantityOfProduct = (itemId, value) => {
        const itemToReduceQuantity = cartListItems.find(
          (item) => item.id === itemId
        );
        itemToReduceQuantity.count = itemToReduceQuantity.count + value;
        return setChangeQuantity(changeQuantity + value);
      };
    const cartItemsQuantity = () => {
        return cartListItems.reduce((acc, item) => (acc += item.count), 0);
      };
    
      const totalCartPrice = () => {
        return cartListItems.reduce(
          (acc, item) => acc + item.count * item.price,
          0
        );
      };


    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct,
        reduceCart,
        changeQuantityOfProduct,
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