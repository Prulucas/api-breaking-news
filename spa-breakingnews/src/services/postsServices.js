import axios from "axios";

const baseURL = "https://mern-v29d.onrender.com";

export async function getAllPosts() {
    try {
        const response = await axios.get(`${baseURL}/news`); // Espera pela resposta
        return response;
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
        throw error; // Repassa o erro para ser tratado no componente
    }
}

export async function getTopPost() {
    try {
        const response = await axios.get(`${baseURL}/news/top`); // Espera pela resposta
        return response;
    } catch (error) {
        console.error("Erro ao buscar o post principal:", error);
        throw error; // Repassa o erro para ser tratado no componente
    }
}
