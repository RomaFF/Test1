import './DataCard.scss'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Theme } from '../../colors/Colors';

export const DataCard = ({img ,asin, price, bsr_category, link, name}) => {

    return (
        <Card sx={{ width: 285 }} className="card__wrapper">
            <CardMedia
                component="img"
                alt="Product image"
                height="250"
                image={img}
                />
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    height="150"
                >
                    {name}
                </Typography>
                <hr/>
                <Typography 
                    marginTop={2}
                    variant="h5" 
                    component="div"
                    color={Theme.palette.primary.price}
                >
                    {price} $
                </Typography>
                <Typography 
                    marginTop={2}
                    variant="body2" 
                    color="text.secondary"
                >
                    {asin}
                </Typography>
                <Link 
                    marginTop={2}
                    href={link} 
                    underline="hover"
                >
                    {bsr_category}
                </Link>
            </CardContent>
        </Card>
    )

}