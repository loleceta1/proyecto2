
import "./CardWidget.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useContext } from "react";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartWidget = () => {
  const { cartListItems, clearCart, reduceCart } = useContext(CartContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon 
                color={'primary'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No has seleccionado aún</p>
                            <Link to="/" >Elige el tuyo</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt={item.image} />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button>
                                    <DeleteIcon onClick={() => reduceCart(item.id)} />{" "}
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    {cartListItems.length !== 0 && (
                      <div className="empezarAComprar">
                        <div className="botones-carrito">
                          <Button onClick={clearCart} style={{ color: "#fff" }}>
                            Vaciar Carrito
                          </Button>
                        </div>
                        
                      </div>
                    )}
                    
                </div>
            </Menu>
        </div>
    )
}

export default CartWidget;
