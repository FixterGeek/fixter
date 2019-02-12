import axios from 'axios';

const base_url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";

const url = "https://fixtercamp.herokuapp.com"

export  const createOrder = (obj, token) => {
	const HEADERS = {
		headers: {
			"Authorization": token,
			'ContentType':'appplication/json'
		}
	};
	return axios.post(`${url}/payments/conekta`, obj, HEADERS)
};
