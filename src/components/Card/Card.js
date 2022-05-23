import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';

const CardItem = ({ image, title, precio }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent> 
        <div className="card-item">
            <div>
                <img src = {`./autos/${image} `} />
                <p>{title} </p>
                <span>$ {precio} </span>
                <Button variant='outlined'>Detalle</Button>
            </div>
           
        </div>
        </CardContent>
        </Card>
    )
}
export default CardItem;