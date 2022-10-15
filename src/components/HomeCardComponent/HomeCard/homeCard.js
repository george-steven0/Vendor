import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";


const HomeCard = (props) => {
    return ( 
        <>
            <div className="card">
                <span className="mediaIcon">
                    <FaRegHeart />
                </span>
                <Card sx={{ maxWidth: 345 }} className='cardCont'>
                    <CardActionArea>

                        <CardMedia
                            component="img"
                            height="140"
                            image={props.img}
                            alt="green iguana"
                        />
        
                    <CardContent className="cardContent">
                        <Typography color="text.secondary">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" className="cardMainTitle" component="div" >
                            {props.description}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            $<span>{props.price}</span>
                        </Typography>
                    </CardContent>

                    </CardActionArea>

                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

export default HomeCard;