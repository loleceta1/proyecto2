import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'



const CardItem = ({ image, title, precio }) => {
    
    const [open, setOpen] = useState(false)


    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent> 
        <div className="card-item">
           <img src = {`./autos/${image} `} />
           <p>{title} </p>
        <span>$ {precio} </span>
        <div className = 'count-item'> 
         <ItemCount/>
         </div>
         <button variant='outlined'>Detalle </button>
        
           </div>
        </CardContent>
      
        </Card>
    )
}
export default CardItem;