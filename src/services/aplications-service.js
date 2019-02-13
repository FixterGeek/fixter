import axios from 'axios';

const base_url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";

export  const createAplication = (obj) => {
	return axios.post(`${base_url}/aplications/`, obj)
};

