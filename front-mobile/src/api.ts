import axios from "axios";

const API_URL='https://mviana-sds2.herokuapp.com';

export function fetchOrders(){
    return axios (`${API_URL}/orders`);
}

export function confirmConfirmDelivery(orderId : number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}