import axios from 'axios';

//const url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";

const url = "https://fixtercamp.herokuapp.com"


function getToken() {
	return localStorage.getItem('token')
}

export const createOrder = (obj) => {
	const HEADERS = {
		headers: {
			"Authorization": getToken()
		}
	};
	return axios.post(`${url}/pay`, obj, HEADERS)
};

export const checkCoupon = (body) => {
	const HEADERS = {
		headers: {
			"Authorization": getToken()
		}
	};
	return axios.post(`${url}/cupons/apply`, body, HEADERS)
};
