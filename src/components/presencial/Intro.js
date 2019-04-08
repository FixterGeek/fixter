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
							En este curso vas a aprender qué es y cómo utilizar Javascript
							para crear sitios web, ahora que sabes lo básico de HTML y CSS es
							hora de dar el salto a la interactividad y animaciones con código.
							Empezaremos desde cero hasta dominar lo que llamamos “manipulación del
							DOM” con JavaScript.

						</p>
						{/*<h3>Herramientas</h3>
					<FontAwesome name="js-square"/>*/}
						<br/>
						<div className="temario">
							<h3>Temario</h3>
							<hr/>
							<br/>
							<p><FontAwesome name="check-square"/> HTML y CSS</p>
							<p><FontAwesome name="check-square"/> Javascript fundamentals</p>
							<p><FontAwesome name="check-square"/> Javascript advanced</p>
							<p><FontAwesome name="check-square"/> Document Object Model</p>
							<p><FontAwesome name="check-square"/> DOM Manipulation Basic Selectors</p>
							<p><FontAwesome name="check-square"/> DOM Events</p>

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
