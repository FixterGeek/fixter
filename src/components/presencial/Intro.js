import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from "react-fontawesome";

class Redux extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}
	render() {
		return (

			<div>
				<div className="slide-curso">
					<div className="text-portada">
						<h2>Curso de Introducción A JavaScript</h2>
						<p>Aprende las bases del Desarrollo Web con JavaScript</p>
						<p>29 de Abril | CDMX</p>
					</div>
				</div>
				<div className="curso-box">
					<div className="box-uno">
						<h2>Acerca del curso</h2>
						<hr/>
						<br/>
						<p>



						</p>
						{/*<h3>Herramientas</h3>
					<FontAwesome name="js-square"/>*/}
						<br/>
						<div className="temario">
							<h3>Temario</h3>
							<hr/>
							<br/>
							<p><FontAwesome name="check-square"/> Instalación de Redux vía CDN y NPM</p>
							<p><FontAwesome name="check-square"/> Configuración de Webpack</p>
							<p><FontAwesome name="check-square"/> Estructura y estilos</p>
							<p><FontAwesome name="check-square"/> Construyendo una app con VanillaJs</p>
							<p><FontAwesome name="check-square"/> Manipulación del DOM</p>
							<p><FontAwesome name="check-square"/> Redux Store</p>
							<p><FontAwesome name="check-square"/> Reducer</p>
							<p><FontAwesome name="check-square"/> Redux Dispatch & Subscribe</p>
							<p><FontAwesome name="check-square"/> Update & Delete</p>
							{/*
						<p className="nota">Descarga el temario completo <a href={link} target="blank"> aquí</a></p>
*/}
						</div>
						<br/>
						<h3>Costos</h3>
						<hr/>
						<br/>
						<p> El costo del curso es de <em> $7,500.00</em></p>
						<p>**Paga con tarjeta de débito, crédito o transferencia</p>
						<br/>

					</div>
					<div className="box-dos">
						<div className="date"> <h3>¡Iniciamos el 29 de Abril!</h3></div>

						<p>Si eres una persona apasionada por la
							tecnología, no pierdas esta oportunidad y
							agrega skills a tu stack profesional.</p>
						<h3><FontAwesome name="clock-o"/> Duración (36 horas)</h3>
						<p> Martes y jueves (7pm a 10pm) y Sábado (10am a 1pm) </p>

						<h3><FontAwesome name="building"/> Lugar</h3>
						<p>Cubic idea | Jalapa #1000, Roma Norte, CDMX</p>
						<br/>
						<div style={{textAlign:"center"}}>
							<Link to="/aply">
								<button className="btn_app">Aplicar</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	};

}

export default Redux;
