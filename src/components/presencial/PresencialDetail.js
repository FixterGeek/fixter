import React, { Component } from "react";
import "./Presencial.css";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import redux from '../../assets/56232202_166098817648810_4760126431843844096_n.png';
import react from '../../assets/56262482_2424190330947035_2824521118352670720_n.png';

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
							<div className="card-p_img" style={{backgroundImage:`url('${redux}')`}}>
								<Link to="/redux">
									<div className="cover">
										<p><FontAwesome name="info-circle"/>  Ver detalle del curso</p>
									</div>
								</Link>
							</div>

						<div className="card-p_info">
							<h3>Aprende Redux</h3>
							<div style={{textAlign:"left"}}>
							<p><FontAwesome name="calendar"/>27 de Abril</p>
							<p><FontAwesome name="history"/>6 horas</p>
							<p><FontAwesome name="clock-o"/>Sábado <br/>2:00pm a 7:00pm</p>
							<p><FontAwesome name="building"/>Jalapa #100, Roma Norte</p>
							</div>
							<Link to="/aply">
								<button className="btn-small">Aplicar</button>
							</Link>
						</div>
					</div>
					<div className="card-p">
						<div className="card-p_img" style={{backgroundImage:`url('${react}')`}}>
							<Link to="/react-redux">
								<div className="cover">
									<p><FontAwesome name="info-circle"/>  Ver detalle del curso</p>
								</div>
							</Link>
						</div>
						<div className="card-p_info">
							<h3>React-Redux</h3>
							<div style={{textAlign:"left"}}>
								<p><FontAwesome name="calendar"/>2 de Mayo</p>
								<p><FontAwesome name="history"/>36 horas</p>
								<p><FontAwesome name="clock-o"/>Lunes, Miércoles y Viernes (7pm a 10pm) </p>
								<p><FontAwesome name="building"/>Jalapa #100, Roma Norte</p>
							</div>
							<Link to="/aply">
								<button className="btn-small">Aplicar</button>
							</Link>
						</div>
					</div>
					<div className="card-p">
						<div className="card-p_img" style={{backgroundImage:`url('https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`}}>
							<Link to="/intro">
								<div className="cover">
									<p><FontAwesome name="info-circle"/>  Ver detalle del curso</p>
								</div>
							</Link>
						</div>
						<div className="card-p_info">
							<h3>Intro a JavaScript</h3>
							<div style={{textAlign:"left"}}>
								<p><FontAwesome name="calendar"/>29 de Abril</p>
								<p><FontAwesome name="history"/>33 horas</p>
								<p><FontAwesome name="clock-o"/>Martes y jueves (7pm a 10pm) y Sábado (10am a 2pm)</p>
								<p><FontAwesome name="building"/>Jalapa #100, Roma Norte</p>
							</div>
							<Link to="/aply">
								<button className="btn-small">Aplicar</button>
							</Link>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Presencial;
