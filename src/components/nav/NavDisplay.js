import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/geek_completo.png";
import firebase from "../../firebase";
//import user from "../../assets/user.png";
import "./Nav.css";

export default function NavDisplay(props) {
	let [user, setUser] = useState(() =>
		JSON.parse(localStorage.getItem("user"))
	);
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")));
	});

	function signOut() {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		firebase.auth().signOut();
		window.location.reload();
		// .then(function() {
		// 	console.log("Cerré sesión alv");
		// })
		// .catch(function(error) {
		// 	console.log(error);
		// });
	}
	let { photoURL, providerData } = user || {};
	//console.log(providerData[0].providerId);
	return (
		<div className="nav">
			<Link to="/">
				<img className="logo" src={logo} alt="logo"/>
			</Link>
			<div className="menu">
				<Link to="/cursos-presenciales">
					<p>Specific Courses</p>
				</Link>
				<p>Plataforma Online</p>
				<p>Sobre Fixter</p>
				<Link to="/aply">
					<button className="btn_app">Aplicar</button>
				</Link>
				<hr className="divider" />

				{!user ? (
					<div className="log">
						<Link to="/login">
							<p>Login</p>
						</Link>
					</div>
				) : (
					<div
						className="dropdown"
						style={{ display: "flex", alignItems: "center" }}
					>
						<button className="dropbtn">
							<img
								className="userphoto"
								src={
									photoURL &&
									providerData[0].providerId !==
										"facebook.com"
										? photoURL
										: "/static/media/user.76654c1c.png"
								}
								alt=""
							/>
						</button>
						<div className="dropdown-content">
							<Link to="/perfil">Perfil</Link>
							<Link onClick={signOut} to="/">
								Cerrar sesión
							</Link>
						</div>

						<button  className="close" >Cerrar sesion</button>
					</div>
				)}
			</div>
		</div>
	);
}
