import React, { Component } from "react";
import "./Cursos.css";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

let link_vue ="https://drive.google.com/file/d/1QqMgSCUOiDRAU-Lq7ULUcDGvHID5gpaI/view?fbclid=IwAR2aKvq233ANwXqvEUa7RjH_9saK35JxvYRjn7nhC4RL3kdMxFsUB9b_twk";
let link = "https://drive.google.com/file/d/1QBJ9FGtaYetws5_MfKG0kF6y_scQ4Bwl/view?usp=sharing";

class Vue extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}

	render() {
		return (
			<div className="cursos">
				<div className="white">
					<div>
						<h2 className="name">¡Vue + TypeScript!</h2>
						<p className="fecha">1 de Abril | 26 de Abril</p>
						<p>Aprenderás a usar Vue.Js, uno de los frameworks frontends para populares.

						</p>
					</div>
					<br/>
					<div className="temario">
						<h3>Temario</h3>
						<p><FontAwesome name="check-square"/> TypeScript</p>
						<p><FontAwesome name="check-square"/> Git y Github</p>
						<p><FontAwesome name="check-square"/> Clases, propiedas e interfaces</p>
						<p><FontAwesome name="check-square"/> VueJs</p>
						<p><FontAwesome name="check-square"/> Directivas, props, ruteo y ciclos de vida</p>

						<p><FontAwesome name="check-square"/> Firebase y Firestore</p>
						<p><FontAwesome name="check-square"/> Login en Firebase</p>
						<p><FontAwesome name="check-square"/> Firebase Rules</p>
						<p><FontAwesome name="check-square"/> Directivas y filtros personalizados</p>
						<p><FontAwesome name="check-square"/> Hosting y producción</p>
						<p className="nota">Descarga el temario completo <a href={link_vue} target="blank"> aquí</a></p>
					</div>
					<br/>
					<div>
						<h3>Lugar</h3>
						<p>Jalapa #100 | Roma Norte | CDMX
						</p>
						<br/>
						<h3>Horarios</h3>
						<p>Lunes y Miercóles de 7:00pm a 10:00pm y Sábados de 10:00am a 2:00pm </p>

						<br/>
						<h3>Costos</h3>
						<p> El costo del curso es de <em> $12,000.00</em></p>
						<p>3, 6, 9 y 12 meses sin sintereses</p>
						<p>**Obten el 10% de descuento en pago de contado</p>


					</div>
				</div>
				<div className="white2">
					<h3>¡Iniciamos el 1 de Abril!</h3>
					<p>Si eres una persona apasionada por la
						tecnología, no pierdas esta oportunidad y
						agrega skills a tu stack profesional.</p>
					<br/>
					<Link to="/aply">
						<button className="btn_apply ">
							Aplicar
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Vue;
