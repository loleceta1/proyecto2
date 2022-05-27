import './ItemCount.css'
import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(3)
    
    const addCount = () => {
        if(count < stock )
        setCount(count + 1);
    }
    const lessCount = () => {
            setCount(count - 1)
    }
    const onAdd = () => {
        console.log(count)
    }
    return(

        <>
            <button onClick={addCount} disabled={count == 3}>+</button>
            <p>{count}</p>
            <button onClick={lessCount} disabled={count == 3}>-</button>
                
        </>
               
          
       
        
    )
}
export default ItemCount;