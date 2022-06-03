import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'



const CardItem = ({ image, title, price, stock, id}) => {
    
 


    return (
        <Card sx={{ minWidth: 275 }} className="card-item-container">
        <CardContent> 
            <div className="card-item">
                 <div className="card-item_img-box">
                     <img src = {`/autos/${image} `} />
                </div>
            </div>
        
            <div className='card-item_data-box'>
                <div className = 'card-info-data'>
                    <p>{title} </p>
                    <span>$ {price} </span>
        
                </div>
                <Button variant={'outlined'} className="card-btn-details">
                    <Link to={`/product/${id}`} >Detalle </Link>
                </Button>

            <div className="count-item">
                <ItemCount stock={stock}  />
         
            </div>

           
        </div>
        
        </CardContent>
      
        </Card>
    )
}
export default CardItem;