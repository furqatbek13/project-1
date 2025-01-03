import axios from "axios";
import { API_URL } from "./config";
export default async function api(){
    try {
        const response = await axios.create({
            baseURL: API_URL,
            timeout: 3000,
        });
        const {data} = response;
        return data;
    } catch (error) {
        throw new Error(error.massage)
    }


};