import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import { ToggleButton } from '@material-ui/lab';



const PlaceDetails = ({place}) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState(false)

    return (
        <Card elevation={6}>            
            <CardMedia
                style={{height:200}}
                image={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}

            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display = "flex" justifyContent="space-between">
                <ToggleButton
                    value="Adicionar"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}
                >
                    <AddIcon />
                </ToggleButton>     
                    <Typography variant="subtitle1">Preço</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display = "flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Nota</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {/* {place?.awards?.map((award)=>(
                    <Box my={1} display="flex" justifyContent="space-between">
                        <img src={award.images.small} alt={award.display_name} />
                    </Box>

                ))} */}
                {place?.cuisine?.map(({ name })=>(
                    <Chip key={name} size='small' label={name} className={classes.chip} />

                ))}
            </CardContent>

        </Card>
        
    );
}

export default PlaceDetails;
