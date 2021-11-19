import axios from 'axios';

export default axios.create({
    baseURL: 'https://books-library-dev.herokuapp.com',
    headers:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI...'
    }
})
