import axios from 'axios'

const KEY = 'AIzaSyBIwh_QO3FWVgEluz93w5nYhzNZwl5foBI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'videos',
        maxResults: 5,
        key: KEY
    }
})

