import axios from "axios";

const request = axios.create({
    baseURL: process.env.VUE_APP_HOST_URL,
    validateStatus: status => status
});

export default request;
