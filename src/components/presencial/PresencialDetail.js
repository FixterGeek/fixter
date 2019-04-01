import React, { Component } from "react";
import "./Presencial.css";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Presencial extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}
	render() {
		return (
			<div className="presencial">
				<h2>Rapid Specific Courses</h2>
				<div className="fle space">
					<div className="card-p">
							<div className="card-p_img">
								<Link to="/redux">
									<div className="cover">
										<p><FontAwesome name="info-circle"/>  Ver detalle del curso</p>
									</div>
								</Link>
							</div>

						<div className="card-p_info">
							<h3>Aprende Redux</h3>
							<div style={{textAlign:"left"}}>
							<p><FontAwesome name="calendar"/>13 de Abril</p>
							<p><FontAwesome name="history"/>6 horas</p>
							<p><FontAwesome name="clock-o"/>Sábado <br/>2:00pm a 7:00pm</p>
							<p><FontAwesome name="building"/>Jalapa #100, Roma Norte</p>
							</div>
							<button className="btn-small">Aplicar</button>
						</div>
					</div>
					<div className="card-p">
						<div className="card-p_img">
							<Link to="/react-redux">
								<div className="cover">
									<p><FontAwesome name="info-circle"/>  Ver detalle del curso</p>
								</div>
							</Link>
						</div>
						<div className="card-p_info">
							<h3>React-Redux</h3>
							<div style={{textAlign:"left"}}>
								<p><FontAwesome name="calendar"/>29 de Abril</p>
								<p><FontAwesome name="history"/>36 horas</p>
								<p><FontAwesome name="clock-o"/>Lunes, Miércoles y <br/>Viernes (7 a 10pm)</p>
								<p><FontAwesome name="building"/>Jalapa #100, Roma Norte</p>
							</div>
							<button className="btn-small">Aplicar</button>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Presencial;
