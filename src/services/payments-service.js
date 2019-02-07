import axios from 'axios';

const base_url = process.env.NODE_ENV === 'production' ? "https://fixter.camp" : "http://localhost:3000";

export  const createOrder = (token) => {
	return axios.post(`${base_url}/payments/conekta`, {token})
};
