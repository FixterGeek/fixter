import React, { Component } from "react";
import "./Cursos.css";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

let link = "https://drive.google.com/file/d/1QBJ9FGtaYetws5_MfKG0kF6y_scQ4Bwl/view?usp=sharing";

class Hooks extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}

	render() {
		return (
			<div className="cursos">
			<div className="white">
			<div>
			<h2 className="name">¡REACT + FIREBASE!</h2>
			<p className="fecha">25 de Marzo | 29 de Mayo</p>
		<p>Aprenderás todo lo que necesitas
		sobre la programación de una
		aplicación web con JavaScript (ES6) y
		ReactJs (jsx). Además, aprenderás
		Firebase, un backend as a service de
		Google, usando su base de datos no
		relacional, login con redes sociales y
		subida de archivos, teniendo con esto
		una aplicación fullstack completa sin
		tener que crear un backend en ningún
		otro lenguaje.
			Finalmente, aprenderás cómo hacer
		solicitudes HTTP usando Axios,
			integrar una API en tu aplicación y
		desplegarla para producción en la
		nube de Google.
		</p>
		</div>
		<br/>
		<div className="temario">
			<h3>Temario</h3>
			<p><FontAwesome name="check-square"/> JavaScript ES6</p>
		<p><FontAwesome name="check-square"/> Git y Github</p>
		<p><FontAwesome name="check-square"/> Programación Asíncrona</p>
		<p><FontAwesome name="check-square"/> ReactJs</p>
			<p><FontAwesome name="check-square"/> Satate, props y jerarquías</p>

			<p><FontAwesome name="check-square"/> Firebase y Firestore</p>
		<p><FontAwesome name="check-square"/> Login en Firebase</p>
		<p><FontAwesome name="check-square"/> Firebase Rules</p>
		<p><FontAwesome name="check-square"/> Firebase loud Storage</p>
			<p><FontAwesome name="check-square"/> Hosting y producción</p>
		<p className="nota">Descarga el temario completo <a href={link} target="blank"> aquí</a></p>
		</div>
		<br/>
		<div>
		<h3>Lugar</h3>
		<p>Peanut Cowork | Av, Blvrd Nuevo Hidalgo 228, Puerta de Hierro, Pachuca de Soto, Hgo.
		</p>
		<br/>
		<h3>Horarios</h3>
		<p>Lunes, Martes y Miércoles de 5:00pm a 8:00pm </p>

		<br/>
		<h3>Costos</h3>
		<p> El costo del curso es de <em> $15,000.00</em></p>
		<p>3, 6, 9 y 12 meses sin sintereses</p>
		<p>**Obten el 10% de descuento en pago de contado</p>


		</div>
		</div>
		<div className="white2">
			<h3>¡Iniciamos el 25 de Marzo!</h3>
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

export default Hooks;
