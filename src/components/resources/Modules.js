import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import './modules.css';


export default class Modules extends Component{

	state = {
		lessons: []
	}

	componentWillMount() {
		console.log(this.props)
		axios
			.get(
				// "https://api.github.com/repos/fixtergeek/ReactHooks-Firebase/contents/JavaScript basic Types  - Conditional statements.md",
				`https://api.github.com/repos/fixtergeek/${
					this.props.match.params.slug
					}/contents`,
				{
					auth: {
						username: "hectorbliss",
						password: "Poweroso77"
					}
				}
			)
			.then(res => {
				console.log(res.data)
				this.setState({lessons:res.data})
				//setSlug(res.data[3].name);
				//return axios(res.data[3].download_url);
				//setMd(res.data[0].download_url);
				//location.replace(res.data[0].download_url);
			})
	}

	render(){
		const {lessons} = this.state;
		return (
			<div className="modules-container">
				<div className="modules">
					<div className="modules-card">
						<div className="modules-card__image firebase_img"></div>

						<div className="modules-card__body">
							<h2>Día 1</h2>
							<ul>
								<li><Link to={`/cursos/ReactHooks-Firebase/${lessons.length > 0 ? lessons[0].name.split(".")[0].replace(/\s/g,'') : ""}`} >{lessons.length > 0 ? lessons[0].name.split(".")[0] : ""}</Link></li>
								<li><Link to={`/cursos/ReactHooks-Firebase/${lessons.length > 0 ? lessons[3].name.split(".")[0] : ""}`} >{lessons.length > 0 ? lessons[3].name.split(".")[0] : ""}</Link></li>
							</ul>
						</div>

					</div>


					<div className="modules-card">
						<div className="modules-card__image react_img"></div>

						<div className="modules-card__body">
							<h2>Día 2</h2>
							<ul>
								<li><Link to={`/cursos/ReactHooks-Firebase/${lessons.length > 0 ? lessons[4].name.split(".")[0] : ""}`} >{lessons.length > 0 ? lessons[4].name.split(".")[0] : ""}</Link></li>
							</ul>
						</div>

					</div>

				</div>
			</div>
		)
	}
}
