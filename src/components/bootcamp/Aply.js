import React, { Component } from "react";
import "./Aply.css";
//import firebase from "../../firebase";
import { AplyForm } from "./AplyForm";
//import {createAplication} from "../../services/aplications-service";
import toastr from "toastr";
import axios from "axios";
// =======
// import React, { Component } from 'react';
// import './Aply.css';
// import { AplyForm } from './AplyForm';
// import {createAplication} from "../../services/aplications-service";
// import toastr from 'toastr'
// import {getCourses} from "../../services/course-service";
// >>>>>>> f4f9f93fa06538736c0726a3b4a581ba602f7111

//const url = "http://localhost:3000";
const url = "https://fixtercamp.herokuapp.com";

class Aply extends Component {
	state = {
		errors: {},
		newAply: {},
		aplys: [],
		courses: [{ _id: "", title: "Hooks + Firebase" }]
	};
	componentWillMount() {
		let user = localStorage.getItem("user");
		if (user) {
			this.setState({ isLogged: true, user });
		} else {
			this.setState({ isLogged: false });
			toastr.info("Debes iniciar sesión primero.");
			this.props.history.push("/login?next=/aplicar");
		}
	}
	componentDidMount() {
		window.scroll(0, 0);
	}

	onChangeAply = e => {
		let newAply = this.state.newAply;
		const field = e.target.name;
		const value = e.target.value;
		newAply[field] = value;
		this.setState({ newAply });
	};

	validateForm = () => {
		const { newAply } = this.state;
		// validando que el formulario tenga los 4 atributos minimos
		return Object.keys(newAply).length >= 4;
	};
	onSave = e => {
		e.preventDefault();
		let user = JSON.parse(localStorage.getItem("user"));
		const { newAply } = this.state;
		newAply.user = user ? user._id : null;
		console.log(newAply);
		if (this.validateForm()) {
			axios
				.post(url + "/apply", newAply, {
					headers: {
						Authorization: localStorage.getItem("token")
					}
				})
				.then(r => {
					console.log(r);
					toastr.success("¡Hemos recibido tu aplicación!");
					this.props.history.push("/perfil");
					// =======
					//     state = {
					//         errors: {},
					//         newAply: {
					// 			name: "",
					// 			email: "",
					// 			course:"",
					// 			telefono: ""
					//         },
					//         courses: []
					//     };
					//     componentWillMount() {
					//         let user = localStorage.getItem("user");
					//         if (user) {
					//             this.setState({ isLogged: true, user })
					//         } else {
					//             this.setState({ isLogged: false })
					//             this.props.history.push("/login");
					//         }
					// 		getCourses()
					// 			.then(res => {
					// 				const {courses} = res.data;
					// 				this.setState({courses});
					// 			}).catch(err => console.error(err))
					//     }
					//     componentDidMount() {
					//         window.scroll(0, 0)
					//     }

					//     onChangeAply = (e) => {
					//         let newAply = this.state.newAply;
					//         const field = e.target.name;
					//         const value = e.target.value;
					//         newAply[field] = value;
					//         this.setState({ newAply });
					//     };

					//     validateForm = () => {
					//         const {newAply} = this.state;
					//         // validando que el formulario tenga los 4 atributos minimos
					//         return Object.keys(newAply).length >= 4;
					//     };
					//     onSave = (e) => {
					//         e.preventDefault();
					//         let user = JSON.parse(localStorage.getItem("user"));
					//         const { newAply } = this.state;
					//         if(user) newAply.user = user._id;
					//         if (this.validateForm()) {
					// 			createAplication(newAply)
					// 				.then(res => {
					// 					this.setState({newAply: {
					// 							name: "",
					// 							email: "",
					// 							course:"",
					// 							telefono: ""
					// 						}});
					// 					toastr.success("Recibimos tu aplicación")
					// >>>>>>> f4f9f93fa06538736c0726a3b4a581ba602f7111
				})
				.catch(e => {
					console.log(e);
					toastr.error("No se pudo subir, intenta más tarde.");
				});
			// createAplication(newAply)
			// 	.then(res => {
			// 		toastr.success("Recibimos tu aplicación")
			// 	})
			// 	.catch(err => {
			// 		console.error(err.response);
			// 		toastr.error("Error al recibir tu aplicación, intenta más tarde")
			// 	})
		} else {
			alert("existen errores");
		}
	};

	render() {
		const { aplys, errors, courses } = this.state;
		return (
			<div>
				<AplyForm
					courses={courses}
					aplys={aplys}
					aply={this.state.newAply}
					onChangeAply={this.onChangeAply}
					errors={errors}
					onSave={this.onSave}
				/>
			</div>
		);
	}
	// =======
	//     render() {
	//         const {errors, courses, newAply } = this.state
	//         return (
	//             <div>
	//                 <AplyForm
	//                     courses={courses}
	// 					{...newAply}
	//                     onChangeAply={this.onChangeAply}
	//                     errors={errors}
	//                     onSave={this.onSave}
	//                 />
	//             </div>
	//         );
	//     }
	// >>>>>>> f4f9f93fa06538736c0726a3b4a581ba602f7111
}

export default Aply;
