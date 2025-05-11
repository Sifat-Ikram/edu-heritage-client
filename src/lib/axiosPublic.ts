import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "http://localhost:4321",
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosPublic;
