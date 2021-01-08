import axios from "axios";

// const API_URL = "http://localhost:8080"

const API_URL = "https://mviana-sds2.herokuapp.com"

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}