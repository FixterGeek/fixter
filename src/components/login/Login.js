import React, { Component } from "react";
import { LoginDisplay } from "./LoginDisplay";
import { RegisterDisplay } from "./RegisterDisplay";
import "./Login.css";
import firebase from "../../firebase";
//redux
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/userAction";

//const url = "http://localhost:3000";
const url = "https://fixtercamp.herokuapp.com";
const codigos = {
	"auth/wrong-password": "Tu contraseña es incorrecta",
	"auth/email-already-in-use": "Este usuario ya esta registrado"
};

class Login extends Component {
	state = {
		mostrar: false,
		login: {
			email: null,
			password: null
		},
		error: null,
		registro: false,
		nuevoRegistro: {
			email: null,
			pass: null,
			pass2: null
		}
	};

	// componentWillMount(){
	//     const user = localStorage.getItem("user");
	//     if(user){
	//         this.props.history.push("/perfil");
	//     }
	// };
	componentDidMount() {
		window.scroll(0, 0);
	}

	componentWillMount() {
		firebase
			.auth()
			.getRedirectResult()
			.then(result => {
				this.saveSocialToken(result);
				if (!result.user) return;
				console.log(result.user);
				localStorage.setItem("user", JSON.stringify(result.user));
				this.props.loginAction(result.user);
				this.props.history.push("/perfil");
			})
			.catch(function(error) {
				// console.log(error)
			});
	}

	saveSocialToken = result => {
		if (
			!result.credential ||
			(result.credential.providerId !== "facebook.com" &&
				result.credential.providerId === "google.com")
		) {
			localStorage.setItem("googleToken", result.credential.accessToken);
			this.loginWithExpressGoogle(result.credential.accessToken);
			return;
		}
		localStorage.setItem("facebookToken", result.credential.accessToken);
		this.loginWithExpressFacebook(result.credential.accessToken);
	};

	loginWithExpressGoogle = token => {
		console.log(token);
		fetch(url + "/login/google/token", {
			method: "post",
			body: JSON.stringify({ access_token: token }),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (response.ok) return response.json();
			})
			.then(r => {
				localStorage.setItem("token", r.token);
				console.log(r);
			});
	};

	loginWithExpressFacebook = token => {
		fetch(url + "/login/facebook/token", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token
			}
		})
			.then(response => {
				if (response.ok) return response.json();
			})
			.then(r => {
				localStorage.setItem("token", r.token);
				console.log(r);
			});
	};

	toggleMostrar = () => {
		this.setState({ mostrar: !this.state.mostrar });
	};

	saveInput = e => {
		const input = e.target.name;
		const value = e.target.value;
		const login = this.state.login;
		login[input] = value;
		this.setState({ login });
		// console.log(login);
	};
	saveRegistro = e => {
		const input = e.target.name;
		const value = e.target.value;
		const nuevoRegistro = this.state.nuevoRegistro;
		nuevoRegistro[input] = value;
		this.setState({ nuevoRegistro });

		// console.log(login);
		if (nuevoRegistro.pass !== nuevoRegistro.pass2)
			this.setState({ error: "tu contrasena no coincide" });
		else this.setState({ error: null });
	};

	onLogin = e => {
		e.preventDefault();
		const { login } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(login.email, login.password)
			.then(usuario => {
				let user = JSON.stringify(usuario);
				localStorage.setItem("user", user);
				this.props.loginAction(user);
				this.props.history.push("/perfil");
			})
			.catch(e => {
				// console.log(e);
				alert(codigos[e.code]);
			});
	};
	loginGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	};
	loginFacebook = () => {
		const provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithRedirect(provider);
	};

	changeRegistro = () => {
		this.setState({ registro: true });
	};

	createUser = e => {
		e.preventDefault();
		const { nuevoRegistro } = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(
				nuevoRegistro.email,
				nuevoRegistro.pass
			)
			.then(s => {
				this.setState({ registro: false });
			})
			.catch(e => {
				// console.log(e);
				alert(codigos[e.code]);
			});
	};
	render() {
		const { registro, nuevoRegistro } = this.state;
		return (
			<div>
				{registro ? (
					<RegisterDisplay
						toggleMostrar={this.toggleMostrar}
						mostrar={this.state.mostrar}
						saveRegistro={this.saveRegistro}
						error={this.state.error}
						onSubmit={this.createUser}
						{...nuevoRegistro}
					/>
				) : (
					<LoginDisplay
						loginFacebook={this.loginFacebook}
						loginGoogle={this.loginGoogle}
						changeRegistro={this.changeRegistro}
						mostrar={this.state.mostrar}
						toggleMostrar={this.toggleMostrar}
						saveEmail={this.saveEmail}
						savePass={this.savePass}
						saveInput={this.saveInput}
						onSubmit={this.onLogin}
						error={this.state.error}
					/>
				)}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	console.log(state);
	return {
		user: state.user.userObject
	};
}

export default (Login = connect(
	mapStateToProps,
	{ loginAction }
)(Login));
