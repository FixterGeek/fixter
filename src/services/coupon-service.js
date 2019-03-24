import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com/" : "http://localhost:3000/";
const CONFIG = { headers: { Authorization: getToken() } }

function getToken() {
    return localStorage.getItem('token')
}

export function createCoupon(body) {
    return axios.post(url + "cupons/", body, CONFIG).then(res => res.data)
}

export function getCoupons() {
    return axios.get(url + "cupons/", CONFIG)
        .then(res => res.data)
}