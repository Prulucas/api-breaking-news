
import axios from "axios";

const baseURL = "https://mern-v29d.onrender.com";

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`);
    return response;
}

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`);
    return response;
}

export default { getAllNews, getTopNews };