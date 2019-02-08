import React, { Component } from 'react';
import './Aply.css';
import firebase from '../../firebase';
import { AplyForm } from './AplyForm';
import {createAplication} from "../../services/aplications-service";
import toastr from 'toastr'
import {getCourses} from "../../services/course-service";


class Aply extends Component {
    state = {
        errors: {},
        newAply: {

        },
        aplys: [
        ],
        courses: []
    };
    componentWillMount() {
        let user = localStorage.getItem("user");
        if (user) {
            this.setState({ isLogged: true, user })
        } else {
            this.setState({ isLogged: false })
            this.props.history.push("/login");
        }
		getCourses()
			.then(res => {
				const {courses} = res.data;
				this.setState({courses});
			}).catch(err => console.error(err))
    }
    componentDidMount() {
        window.scroll(0, 0)
    }

    onChangeAply = (e) => {
        let newAply = this.state.newAply;
        const field = e.target.name;
        const value = e.target.value;
        newAply[field] = value;
        this.setState({ newAply });
    };

    validateForm = () => {
        const {newAply} = this.state;
        // validando que el formulario tenga los 4 atributos minimos
        return Object.keys(newAply).length >= 4;
    };
    onSave = (e) => {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem("user"));
        const { newAply } = this.state;
        newAply.user = user.uid;
        if (this.validateForm()) {
			createAplication(newAply)
				.then(res => {
					toastr.success("Recibimos tu aplicación")
				})
				.catch(err => {
					console.error(err.response);
					toastr.error("Error al recibir tu aplicación, intenta más tarde")
				})
        } else {
            alert("No se pudo enviar la aplicación");
        };
    };


    render() {
        const { aplys, errors, courses } = this.state
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
}

export default Aply;
