import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'



const CardItem = ({ image, title, price, stock }) => {
    
   


    return (
        <Card sx={{ minWidth: 275 }} className="card-item-container">
        <CardContent> 
            <div className="card-item">
                 <div className="card-item_img-box">
                     <img src = {`./autos/${image} `} />
                </div>
            </div>
        
            <div className='card-item_data-box'>
                <div className = 'card-info-data'>
                    <p>{title} </p>
                    <span>$ {price} </span>
        
                </div>
                <Button variant={'outlined'} className="card-btn-details">Detalle </Button>

            <div className="count-item">
                <ItemCount/>
         
            </div>

            <Button variant={'contained'} className="card-item-button">Agregar al carrito</Button>
        </div>
        
        </CardContent>
      
        </Card>
    )
}
export default CardItem;