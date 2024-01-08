import axios from "axios";
import {logout} from "@/utils/auth";
import router from "@/routes";

const request = axios.create({
    baseURL: process.env.VUE_APP_HOST_URL + "/api",
    validateStatus: status => status
});

request.interceptors.response.use(
    response => {
        if (response.status === 401) {
            logout()

            router.push('/login');
        }
        return response;
    },
    () => {}
);

export default request;
