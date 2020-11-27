import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{Authorization : 'Client-ID C2HzwDxiWbpi9zcYHhfHhh8ozGS2eQcVzGbiIKE5nRM'}
})
