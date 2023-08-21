import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Button, Paper,Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import key from '../../env';

import { getPlacesData } from '../../api';

import useStyles from './styles';

//EU TIVE QUE HABILITAR COORDS COMO ALGO FIXO, IDEALMENTE O CONTS MAP SERIA:
//const Map = ({ coords, setCoords, setBounds, places}) => {
const Map = ({ setCoords, setBounds, places,bounds }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('min-width::600px)');
    //isso aqui deveria ser apagado
    const coords = {lat: -23.561998, lng: -46.685942 };

//    TESTE PARA O USO DO BOTAO
// retira o comentario para voltar

//     const handleSearchButtonClick = async () => {
//         try {
//             if (bounds && bounds.sw && bounds.ne) {
//                 const data = await getPlacesData(bounds.sw, bounds.ne);
//                 console.log(data);
//                 // You can update the state or handle the data as needed
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };


//     return (
//         <div className={classes.mapContainer}>
//             <GoogleMapReact
//                 bootstrapURLKeys = {{ key: key}}
//                 // defaultCenter={coords}
//                 center = {coords}
//                 defaultZoom = {18}
//                 margin = {[50,50,50,50]}
//                 options= {''}
//                 onChange={(e) => {
//                     setCoords({lat: e.center.lat, lng: e.center.lng});
//                     setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw});
//                 }}
//                 onChildClick={''}
        

//             >


            
//             </GoogleMapReact>
//             <Button
//         className={classes.searchButton}
//         variant="contained"
//         color="primary"
//         onClick={handleSearchButtonClick}
//       >
//         Search This Area
//       </Button>
//     </div>
//   );
// };


return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        center={coords}
        defaultZoom={18}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};


export default Map;
