import './ItemDetail.css'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
    const [cantidad, setCantidad] = useState(1)
    const [showButton, setShowButton] = useState(false)

    const addProductToCart = () => {
        console.log("producto a agregar: ", data)
        console.log("cantidad: ", cantidad)
    }
    return(
        <Container className='container-general'> 
            <div className='container-detail'>
            <div className='container-detail__img'>
            <img src = {data.image}  />
            </div>
            <div className='container-detail__info'>
                <h3 className='info__title'>{data.title}</h3>
                <p className='info__text'>$ {data.price}</p>
                <p className='info__subtitle'>Información del Vehículo</p>
                <p></p>
                <p className='info__text'>{data.talle}</p>
                <div className="count-item"   style={{marginTop: ' 10px'}}> 
               
               

                {!showButton ?
                 <ItemCount 
                
                    cantidad={cantidad}
                    actCantidad={setCantidad} 
                    stock={data.stock} 
                    setShowButton={setShowButton}
                   
                 />
                :
                <Button variant='outlined'><Link to='/cart'> Compra Seleccionada </Link> </Button>}
               
                
                </div>
               
            </div>
           
            </div>
            
        </Container>
    )
}

export default ItemDetail