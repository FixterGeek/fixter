import React, { Component } from "react";
import "./Cursos.css";
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

let link_python = "https://drive.google.com/file/d/1FTQn7Me_Cn6Ed5qz0tH47WdkbnWmzPwq/view?usp=sharing";

class Python extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}

	render() {
		return (
			<div className="cursos">
				<div className="white">
					<div>
						<h2 className="name">¡Python + Django!</h2>
						<p className="fecha">2 de Abril | 27 de Abril</p>
						<p> Python será nuestra herramienta principal con la que vamos a construir APIs REST,
							uno de los estándares más modernos para el desarrollo de micro servicios web.
							Para esto aprenderemos Django el framework de desarrollo web
							de Python más popular y robusto; usado por Instagram, Pinterest y Mozilla.
							Con Django Rest Framework construiremos APIs listas para ser utilizadas
							en cualquier aplicación frontend con seguridad y una interfaz amigable.
						</p>
					</div>
					<br/>
					<div className="temario">
						<h3>Temario</h3>
						<p><FontAwesome name="check-square"/> Python 3+</p>
						<p><FontAwesome name="check-square"/> Git y Github</p>
						<p><FontAwesome name="check-square"/> Entornos virtuales</p>
						<p><FontAwesome name="check-square"/> API's</p>
						<p><FontAwesome name="check-square"/> Django: Data models, ORM, Views, Routes</p>

						<p><FontAwesome name="check-square"/> Bases de datos</p>
						<p><FontAwesome name="check-square"/> Rest Framework</p>
						<p><FontAwesome name="check-square"/> Rest Framework Authentication</p>
						<p><FontAwesome name="check-square"/> Rest Framework Permission</p>
						<p><FontAwesome name="check-square"/> Deployment</p>
						<p className="nota">Descarga el temario completo <a href={link_python} target="blank"> aquí</a></p>
					</div>
					<br/>
					<div>
						<h3>Lugar</h3>
						<p>Jalapa #100 | Roma Norte | CDMX
						</p>
						<br/>
						<h3>Horarios</h3>
						<p>Martes y Jueves de 7:00pm a 10:00pm y Sábados de 10:00am a 2:00pm </p>

						<br/>
						<h3>Costos</h3>
						<p> El costo del curso es de <em> $12,000.00</em></p>
						<p>3, 6, 9 y 12 meses sin sintereses</p>
						<p>**Obten el 10% de descuento en pago de contado</p>

					</div>
				</div>
				<div className="white2">
					<h3>¡Iniciamos el 2 de Abril!</h3>
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

export default Python;
