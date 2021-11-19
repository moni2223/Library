import axios from 'axios';

export default axios.create({
    baseURL: ' https://books-library-dev.herokuapp.com',
    headers:{
        Authorization: 'Bearer jXhMAUJIBVlSxCyDXPS427TR8JtWyVnFNlwMkuwaH5E'
    }
})
