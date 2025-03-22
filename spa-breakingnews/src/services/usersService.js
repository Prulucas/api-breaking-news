import axios from "axios";

const baseURL = "http://localhost:3000";

export function signup(data) {
    delete data.confirmPassword;
    const body = { ...data, username: generateUserName(data.name), avatar: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg", background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKncOnyLKsoaTv_NBFPrkrKUD1YZEnJsknXw&s", }
    const response = axios.post(`${baseURL}/user/create`, body);
    return response;
}

function generateUserName(name) {
    const withoudSpace = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${withoudSpace}-${randomNumber}`
}