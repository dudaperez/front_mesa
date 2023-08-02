import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu  } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';


const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const places = [
        {name: 'Cool Place'}, 
        {name: 'Bars'},
        {name: 'Date'},
        {name: 'Sushi'},
        {name: 'Cool Place'}, 
        {name: 'Bars'},
        {name: 'Date'},
        {name: 'Sushi'},
    ];


    return (
        <div className = {classes.container}>
            <Typography  variant ='h4'>Restaurantes perto de você </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='restaurants'>Restaurantes</MenuItem>
                    <MenuItem value='bars'>Bares</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value='{0}'>Todos</MenuItem>
                    <MenuItem value='{3}'>Acima de 3</MenuItem>
                    <MenuItem value='{4}'>Acima de 4</MenuItem>
                    <MenuItem value='{4.5}'>Acima de 4.5</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i)=>(
                    <Grid item key={i} xs={12} >
                        <PlaceDetails place = {place}/>
                    </Grid>
                ))}
            </Grid>


        </div>
    );
}

export default List;
