
import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://bsuv5tp854.execute-api.us-east-1.amazonaws.com/dev/sets',
  headers: { }
};

const request = axios.get(config.url)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

export default request
