import './ItemCount.css'
import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0);
    
    const addCount = () => {
        setCount(count + 1);
    }
    const lessCount = () => {
            setCount(count - 1)
    }
    return(
        
        <div>
        <button onClick={addCount}>+</button>
        <p>{count}</p>
        <button onClick={lessCount} disabled={count == 0}>-</button>
        </div>
        
    )
}
export default ItemCount;