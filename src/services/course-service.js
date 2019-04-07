import axios from 'axios';

//const base_url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";

let base_url = "https://fixtercamp.herokuapp.com"

export const getCourses = () => {
	return axios.get(`${base_url}/courses/`)
};

export  const createCourse = (obj) => {
	return axios.post(`${base_url}/courses/`, obj).then(res=>res.data)
};

// editions

export const getEditions = () => {
	return axios.get(`${base_url}/editions/`).then(res=>res.data)
};

export  const createEdition = (obj) => {
	return axios.post(`${base_url}/editions/`, obj).then(res=>res.data)
};

export const deleteEdition = (id) => {
	return axios.delete(`${base_url}/editions/${id}`).then(res=>res.data)
};
