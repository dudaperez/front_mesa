import React, {useEffect, useState, Component} from 'react';
import { CssBaseline, Grid, Button } from '@material-ui/core';
import Header from './components/Header/Header';
// import List from './components/List/List';
// import Map from './components/Map/Map';
// import { getPlacesData } from './api';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import your home page component
import Favorites from './pages/Favorites';



const App = () => {
  return (
      <>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Favorites' element={<Favorites/>} />
        </Routes>
      </>
  );
}

// const App = () => {
//     const[places, setPlaces] = useState([]);

//     const[coords, setCoords ] = useState({});
//     // const[coordinatesLoaded, setCoordinatesLoaded ] = useState(false);
//     const[bounds,setBounds] = useState({});

//     //Codigo para o botao
//     const handleSearchButtonClick = () => {
//         if (bounds.sw && bounds.ne) {
//           getPlacesData(bounds.sw, bounds.ne)
//             .then((data) => {
//               console.log(data);
//               setPlaces(data);
//             })
//             .catch((error) => {
//               console.error('Error fetching data:', error);
//             });
//         }
//       };

// //Fim do codigo para o botao


//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition(({coords:{longitude, latitude} } )=> {
//             setCoords({ lat: latitude, ln: longitude});
//             // setCoords(true);

//         });

//     },[])


//     // useEffect(()=> {
//     //     console.log(coords, bounds);

//     //     getPlacesData(bounds.sw, bounds.ne)
//     //         .then((data)=>{
//     //             console.log(data);
                
//     //             setPlaces(data);
//     //         })
//     // },[coords, bounds]);

//     return(

//         <>
//             <CssBaseline />
//             <Header />
//             <Grid container spacing ={3} style = {{width: '100%'}}>
//                 <Grid item xs ={12} md={4} >
//                     <List places= {places} />

//                 </Grid>
//                 <Grid item xs ={12} md={8} >
//                    <Map 
//                     setCoords = {setCoords}
//                     setBounds = {setBounds}
//                     coords = {coords}
//                     bounds ={bounds}
//                     places={places}
//                     // ajuste para chamada de API pelo botao:
//                     setPlaces={setPlaces} // Pass the 'setPlaces' prop here
//                     />
                    
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => {
//                             getPlacesData(bounds.sw, bounds.ne)
//                               .then((data) => {
//                                 console.log(data);
//                                 setPlaces(data);
//                               })
//                               .catch((error) => {
//                                 console.error('Error fetching data:', error);
//                               });
//                           }}
//                     >
//                         Search This Area
//                     </Button> 

//                 </Grid>
//             </Grid>
//         </>
//     );
    
// }

export default App;
