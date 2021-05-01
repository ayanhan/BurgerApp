import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerappreact-a04bb-default-rtdb.firebaseio.com/'
})

export default instance