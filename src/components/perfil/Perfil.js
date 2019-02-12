import React, { Component } from "react";
import "./Perfil.css";
import { PerfilDisplay } from "./PerfilDisplay";

class Perfil extends Component {
	state = {
		isLogged: false,
		user: null
	};

	componentWillMount() {
		let user = JSON.parse(localStorage.getItem("user"));
		//console.log(user);
		// user = JSON.parse(user);
		if (user) {
			// console.log("si")
			this.setState({ isLogged: true, user });
		} else {
			this.setState({ isLogged: false });
			this.props.history.push("/login");
		}
	}
	componentDidMount() {
		window.scroll(0, 0);
	}
	render() {
		let { user } = this.state;
		return (
			<div>
				<PerfilDisplay isLogged={this.props.isLogged} {...user} />
			</div>
		);
	}
}

export default Perfil;
