import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import key from '../../env';

import useStyles from './styles';

//EU TIVE QUE HABILITAR COORDS COMO ALGO FIXO, IDEALMENTE O CONTS MAP SERIA:
//const Map = ({ coords, setCoords, setBounds, places}) => {
const Map = ({ setCoords, setBounds, places}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('min-width::600px)');
    //isso aqui deveria ser apagado
    const coords = {lat: -23.561998, lng: -46.685942 };


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys = {{ key: key}}
                // defaultCenter={coords}
                center = {coords}
                defaultZoom = {18}
                margin = {[50,50,50,50]}
                options= {''}
                onChange={(e) => {
                    setCoords({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}
        

            >


            
            </GoogleMapReact>

        </div>
    );
}

export default Map;
