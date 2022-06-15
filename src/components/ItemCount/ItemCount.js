import { Button } from '@mui/material';
import './ItemCount.css'
import {useState} from 'react'
import CardList from '../CardList/CardList';

const ItemCount = ( {stock, cantidad, actCantidad, setShowButton}) => {
  
    
    const addCount = () => {
        if(cantidad < stock ){ 
       
        actCantidad(cantidad + 1);
        }
    }
    const lessCount = () => {
            actCantidad(cantidad - 1)
    }
    const onAdd = () => {
        console.log(cantidad)
    }
    return(
        <>
        <label> Selecciona Cantidad </label>
        <div className= 'itemcount-button'>
        <button onClick={addCount}>+</button>
        <p style={{margin: '0 10px', marginTop: '0 10px'}}>{cantidad}</p>
        <button onClick={lessCount} disabled={cantidad == 0 }>-</button>
        
        </div>  

        <Button className='detail__btn-buy' onClick = {() => setShowButton(true)}>Seleccionar</Button>
       
      
        </>
        
    )
}
export default ItemCount;

// <Button variant={'contained'} onClick={() => onAdd (count)} className="card-item-button">Agregar al carrito</Button>