import axios from 'axios'

const instance = axios.create({
    baseURL:'https://react-burger-builder-29b01-default-rtdb.firebaseio.com/'
})

export default instance