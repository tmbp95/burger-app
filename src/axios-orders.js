import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-4b1ff.firebaseio.com/'
});

export default instance;
