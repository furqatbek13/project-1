import axios from "axios";
import { API_URL } from "./config";
export default  function api(){
    try {
        return axios.create({
            baseURL: API_URL,
            timeout: 3000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        throw new Error(error.massage)
    }


};