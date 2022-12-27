import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: 'https://da-book-stop.herokuapp.com/api'
})

export default axiosInstance