import React, { useState, useEffect } from 'react';
import { CssBaseline, Button, Grid } from '@material-ui/core';
import Map from '../../components/Map/Map';
import List from '../../components/List/List';
import { getPlacesData } from '../../api';

// const HomePage = () => {
//   const [places, setPlaces] = useState([]);
//   const [coords, setCoords] = useState({});
//   const [bounds, setBounds] = useState({});

//   const handleSearchButtonClick = () => {
//     if (bounds.sw && bounds.ne) {
//       getPlacesData(bounds.sw, bounds.ne)
//         .then((data) => {
//           console.log(data);
//           setPlaces(data);
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//         });
//     }
//   };

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords: { longitude, latitude } }) => {
//       setCoords({ lat: latitude, ln: longitude });
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Search Page</h1>
//       <Grid container spacing={3} style={{ width: '100%' }}>
//         <Grid item xs={12} md={8}>
//           <Map
//             setCoords={setCoords}
//             setBounds={setBounds}
//             coords={coords}
//             bounds={bounds}
//             places={places}
//             setPlaces={setPlaces}
//           />
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <List places={places} />
//         </Grid>
//       </Grid>
//       <Button variant="contained" color="primary" onClick={handleSearchButtonClick}>
//         Search This Area
//       </Button>
//     </div>
//   );
// };




const HomePage = () => {
    const[places, setPlaces] = useState([]);

    const[coords, setCoords ] = useState({});
    // const[coordinatesLoaded, setCoordinatesLoaded ] = useState(false);
    const[bounds,setBounds] = useState({});

    //Codigo para o botao
    const handleSearchButtonClick = () => {
        if (bounds.sw && bounds.ne) {
          getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
              console.log(data);
              setPlaces(data);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
      };

//Fim do codigo para o botao


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
                            getPlacesData(bounds.sw, bounds.ne)
                              .then((data) => {
                                console.log(data);
                                setPlaces(data);
                              })
                              .catch((error) => {
                                console.error('Error fetching data:', error);
                              });
                          }}
                    >
                        Search This Area
                    </Button> 

                </Grid>
            </Grid>
        </>
    );
    
}



export default HomePage;

/**
 * titlePage: Home
 * path: /
 * componentName: home
 * template: blank
 * isPublic: true
 */