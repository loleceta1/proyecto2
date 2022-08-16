import { Button } from '@mui/material';
import './ItemCount.css'
import {useState} from 'react'
import CardList from '../CardList/CardList';

const ItemCount = ( {stock, setShowButton}) => {
    const [cantidad, setCantidad] = useState(0)
  
    
    const addCount = () => {
        if(cantidad < stock ){ 
        setCantidad(cantidad + 1);
       
        }
    }
    const lessCount = () => {
            setCantidad(cantidad - 1)
    }
    
 
  
    return(
        <>
        <label> Selecciona Cantidad </label>
        <div className= 'itemcount-button'>
        <button onClick={addCount}>+</button>
        <p style={{margin: '0 10px', marginTop: '0 10px'}}>{cantidad}</p>
        <button onClick={lessCount} disabled={cantidad === 0 }>-</button>
        
        </div>  

        <Button className='detail__btn-buy' onClick = {() => setShowButton(true)}>Seleccionar</Button>
       
      
        </>
        
    )
}
export default ItemCount;


