import { Button } from '@mui/material';
import './ItemCount.css'
import {useState} from 'react'
import CardList from '../CardList/CardList';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);
    
    const addCount = () => {
        if(count < stock ){ 
        setCount(count + 1);
    }
}
    const lessCount = () => {
            setCount(count - 1)
    }
    const onAdd = () => {
        console.log(count)
    }
    return(
        <>
        <div className= 'itemcount-button'>
        <button onClick={addCount}>+</button>
        <p>{count}</p>
        <button onClick={lessCount} disabled={count == 0 }>-</button>
        </div>  
        <Button variant={'contained'} onClick={() => onAdd (count)} className="card-item-button">Agregar al carrito</Button>
      
        </>
        
    )
}
export default ItemCount;