// import {key} from '../../env';
import axios from 'axios';


// API da google places 


// const axios = require('axios');

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url:
//   headers: { }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


// API da rapidAPI

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// const options = {
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     // restaurant_tagcategory_standalone: '10591',
//     // restaurant_tagcategory: '10591',
//     // limit: '30',
//     // currency: 'USD',
//     // open_now: 'false',
//     // lunit: 'km',
//     // lang: 'en_US'
//   },
//   headers: {
//     'X-RapidAPI-Key': '0299537a4bmsha0461f7f0b74ed2p1f6d30jsn5663d4fd4dcd',
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//   }
// };



export const getPlacesData = async (sw, ne) => {
    try{
        const {data: { data } } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat ,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '0299537a4bmsha0461f7f0b74ed2p1f6d30jsn5663d4fd4dcd',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;

    } catch(error) {
        console.log(error)

    }
}