import axios from 'axios';

const url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";

//const url = "https://fixtercamp.herokuapp.com"

export  const createOrder = (obj, token) => {
	const HEADERS = {
		headers: {
			"Authorization": token
		}
	};
	return axios.post(`${url}/pay`, obj, HEADERS)
};

export const checkCoupon = (cupon, token) => {
	const HEADERS = {
		headers: {
			"Authorization": token
		}
	};
	return axios.get(`${url}/cupons/?cupon=${cupon}`, HEADERS)
};
