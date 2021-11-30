import axios from 'axios';

console.log(process.env.REACT_APP_YT_API_KEY)

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyA1HX6YSKQG-O84QS0PDl3yCeALqje0CSA",
    },
})

export default request;