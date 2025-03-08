import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllPosts() {
    const response = axios.get(`${baseURL}/news/findAll`); // Espera pela resposta
    return response;
}

export function getTopPost() {
    const response = axios.get(`${baseURL}/news/top`); // Espera pela resposta
    return response;
}

export function searchPosts(title) {
    const response = axios.get(`${baseURL}/news/search?title=${title}`); // Espera pela resposta
    return response;
}