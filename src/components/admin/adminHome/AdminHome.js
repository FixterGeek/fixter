import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";
import moment from "moment";
import "moment/locale/es";

const url = "http://localhost:3000";

export default class AdminHome extends Component {
	state = {
		user: null,
		apps: []
	};
	componentWillMount() {
		let user = JSON.parse(localStorage.getItem("user"));
		this.setState({ user });
		if (user.role !== "ADMIN") this.props.history.push("/");
		else this.getApps();
	}
	getApps = () => {
		axios
			.get(url + "/apply/admin/all", {
				headers: {
					Authorization: localStorage.getItem("token")
				}
			})
			.then(res => {
				console.log("tipo: ", typeof res.data);
				this.setState({ apps: res.data });
			})
			.catch(e => {
				console.log(e);
				toastr.error("No se pudieron cargar las aplicaciones");
			});
	};
	render() {
		const { user, apps } = this.state;
		if (!user || !user.role === "ADMIN") return null;
		return (
			<div
				style={{
					paddingTop: "60px",
					maxWidth: 960,
					marginLeft: "auto",
					marginRight: "auto"
				}}
			>
				<h1>Fixter admin:</h1>
				<div>
					<Link to="/admin/addCourse">
						<button>Agregar curso</button>
					</Link>
				</div>
				<section>
					<h2>Aplicaciones</h2>
					<div
						style={{
							display: "flex",
							felxWrap: "wrap"
						}}
					>
						{apps.map((a, i) => {
							return (
								<div
									style={{
										border: "1px solid",
										margin: 10,
										padding: 5
									}}
									key={i}
								>
									<h4>{a.name}</h4>
									<p>{a.course}</p>
									<p>{a.tel}</p>
									<p>{a.mail}</p>
									<p>{a.comments}</p>
									<p>{moment(a.createdAt).format("lll")}</p>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		);
	}
}
