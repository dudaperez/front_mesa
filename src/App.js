import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData } from './api';

const App = () => {
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


    useEffect(()=> {
        console.log(coords, bounds);

        getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{
                console.log(data);
                
                setPlaces(data);
            })
    },[coords, bounds]);

    return(

        <>
            <CssBaseline />
            <Header />
            <Grid container spacing ={3} style = {{width: '100%'}}>
                <Grid item xs ={12} md={4} >
                    <List />

                </Grid>
                <Grid item xs ={12} md={8} >
                   <Map 
                    setCoords = {setCoords}
                    setBounds = {setBounds}
                    coords = {coords}
                    />

                </Grid>
            </Grid>
        </>
    );
}

export default App;
// ahhhhHHHHHHHHHHHHHH