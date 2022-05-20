import './Card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';

const CardItem = (props) => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent> 
        <div className="card-item">
            <div>
                <img src = {`./autos/${props.image} `} />
                <p>{props.title} </p>
                <span>$ {props.precio} </span>
                <Button variant='outlined'>Detalle</Button>
            </div>
           
        </div>
        </CardContent>
        </Card>
    )
}
export default CardItem;