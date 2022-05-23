import CardItem from '../Card/Card';
import { Grid } from '@mui/material'

const CardList= ({title}) => {
    return (
        <>
        <h2>{title} </h2>
        <Grid container>
            <Grid item md={4}> 
            <CardItem title={"Mercedes"}  precio ={32000} image={"auto2.jpg"} />
            </Grid>
            <Grid item md={4}> 
            <CardItem title={"Mercedes"}  precio ={35000} image={"auto1.jpg"} />
            </Grid>
            <Grid item md={4}> 
            <CardItem  title={"Mustang"}  precio ={40000}  image={"auto3.jpg"}/>
            </Grid>
            <Grid item md={4}> 
            <CardItem  title={"Mustang"}  precio ={40000}  image={"auto4.jpg"}/>
            </Grid>
            <Grid item md={4}> 
            <CardItem  title={"Ferrari"}  precio ={50000}  image={"auto5.jpg"}/>
            </Grid>
            <Grid item md={4}> 
            <CardItem  title={"BMW"}  precio ={45000}  image={"auto6.jpg"}/>
            </Grid>
        </Grid>
        </>
    )
}
export default CardList;