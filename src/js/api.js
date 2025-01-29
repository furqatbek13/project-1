import axios from "axios";
import { API_URL } from "./config";


export const Api = axios.create({
    baseURL: API_URL
});

Api.interceptors.request.use(function(config){
    config.timeout = 3000;
    config.headers["Content-Type"] = "application/json";
    return config;
}, function(error){
    return Promise.reject(error);
});
Api.interceptors.response.use(function(response){
    return response;
}, function(error){
    if(error.response){
        const status = error.response.status;
        if(status === 403 || status === 404){
            window.alert("something went wrong!!")
        }else if(status === 500){
            window.alert("Internal server error")
        };
    };
    return Promise.reject(error)
});