import React, { useState, useEffect } from 'react';
import { CssBaseline, Button, Grid } from '@material-ui/core';
import Map from '@/components/Map/Map';
import List from '@/components/List/List';
import getFavoritesAPI from '@/api/favorites';

const Favorites = () => {
    const[places, setPlaces] = useState([]);

    const[coords, setCoords ] = useState({});
    // const[coordinatesLoaded, setCoordinatesLoaded ] = useState(false);
    const[bounds,setBounds] = useState({});



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords:{longitude, latitude} } )=> {
            setCoords({ lat: latitude, ln: longitude});
            // setCoords(true);

        });

    },[])

    return(

        <>
            <CssBaseline />
            <Grid container spacing ={3} style = {{width: '100%'}}>
                <Grid item xs ={12} md={4} >
                    <List places= {places} />

                </Grid>
                <Grid item xs ={12} md={8} >
                   <Map 
                    setCoords = {setCoords}
                    setBounds = {setBounds}
                    coords = {coords}
                    bounds ={bounds}
                    places={places}
                    // ajuste para chamada de API pelo botao:
                    
                    setPlaces={setPlaces} // Pass the 'setPlaces' prop here
                    />
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            getFavoritesAPI()
                              .then((data) => {
                                console.log(data);
                                // setPlaces(data);
                              })
                              .catch((error) => {
                                console.error('Error fetching data:', error);
                              });
                          }}
                    >
                        Get favorites
                    </Button> 
                    
                    

                </Grid>
            </Grid>
        </>
    );
    
    
}



export default Favorites;


/**
 * titlePage: Favorites
 * path: /favorites
 * componentName: favorites
 * template: blank
 * isPublic: true
 */