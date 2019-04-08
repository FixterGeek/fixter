import React, { Component } from 'react';
import './Aply.css';
import { AplyForm } from './AplyForm';
import toastr from 'toastr'
import {getEditions} from "../../services/course-service";
import axios from 'axios';

//const url = process.env.NODE_ENV === 'production' ? "https://fixtercamp.herokuapp.com" : "http://localhost:3000";
let url = "https://fixtercamp.herokuapp.com"

class Aply extends Component {
    state = {
        errors: {},
        newAply: {
			name: "",
			email: "",
			course:"",
			cost: 0,
			tel: ""
        },
        courses: []
    };
    componentWillMount() {
        let user = localStorage.getItem("user");
        if (user) {
            this.setState({ isLogged: true, user })
        } else {
			this.setState({ isLogged: false })
			toastr.info("Debes iniciar sesión primero.");
			this.props.history.push("/login?next=/aplicar");
        }
		getEditions()
			.then(courses => {
				this.setState({courses});
			}).catch(err => console.error(err))
    }
    componentDidMount() {
        window.scroll(0, 0)
    }

    onChangeAply = e => {
        let { newAply } = this.state;
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

    setPrice = e => {
        e.preventDefault();
        let {newAply, courses} = this.state
        let course = courses.find(el=>el._id === newAply.course)
        if(course) newAply.cost = course.price
        this.setState({newAply}, ()=>this.onSave())
    }

    onSave = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        const { newAply } = this.state;
        console.log("ya??", newAply)
        if(user) newAply.user = user._id;
        if (this.validateForm()) {
			axios
			.post(url + "/apply", newAply, {
				headers: {
					Authorization: localStorage.getItem("token")
				}
			})
				.then(r => {
					toastr.success("¡Hemos recibido tu aplicación!");
					this.props.history.push("/perfil");
				})
				.catch(e => {
					console.log(e);
                    toastr.warning("Tu sesión expiró, porfavor intenta nuevamente.");
                    this.removeToken()
				});
		} else {
			toastr.error("existen errores");
		}
    };
    
    removeToken = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    render() {
        const {errors, courses, newAply } = this.state
        return (
            <div>
                <AplyForm
                    courses={courses}
					{...newAply}
                    onChangeAply={this.onChangeAply}
                    errors={errors}
                    onSubmit={this.setPrice}
                />
            </div>
        );
    }
}

export default Aply;
