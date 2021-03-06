import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import {Link} from 'react-router-dom';

class ReactRedux extends Component {
	componentDidMount () {
		window.scroll(0, 0)
	}
	render() {
		return (
			<div>
				<div className="slide-curso">
					<div className="text-portada">
						<h2>Curso de React-Redux</h2>
						<p>Aprende a </p>
						<p>2 de Mayo | CDMX</p>
					</div>
				</div>
				<div className="curso-box">
					<div className="box-uno">
						<h2>Acerca del curso</h2>
						<hr/>
						<br/>
						<p>Escuchamos que Redux es genial y que es un obligado a la hora de trabajar con React,
							pero a veces es difícil abordar Redux cuando no se entienden sus partes, cómo se
							configura o usa. En este curso aprenderás cómo usar Redux sólo con JavaScript.
							Configurando a mano todas sus herramientas además de entender cómo funciona
							una aplicación basada en estado con Redux, delegando a Redux el renderisado de
							la aplicación en caso de que nuestro estado cambie.



							Una vez que entiendas cómo usar Redux y cómo implementarlo en un
							proyecto sólo con JavaScript, podrás abordar su uso con ReactJS mucho más fácil.</p>
						{/*<h3>Herramientas</h3>
					<FontAwesome name="js-square"/>*/}
						<br/>
						<div className="temario">
							<h3>Temario</h3>
							<hr/>
							<br/>
							<p><FontAwesome name="check-square"/> Entendiendo Redux</p>
							<p><FontAwesome name="check-square"/> Instalación y configuración de entorno</p>
							<p><FontAwesome name="check-square"/> Creando un proyecto React</p>
							<p><FontAwesome name="check-square"/> Conectando Redux a nuestro proyecto</p>
							<p><FontAwesome name="check-square"/> Librería: React-Redux</p>
							<p><FontAwesome name="check-square"/> Ejercicio | Usando Redux</p>
							<p><FontAwesome name="check-square"/> Redux con Hooks</p>
							<p><FontAwesome name="check-square"/> Redux Avanzado</p>
							<p><FontAwesome name="check-square"/> Thunks, Sagas y Selectores</p>

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
						<div className="date"> <h3>¡Iniciamos el 2 de Mayo!</h3></div>

						<p>Si eres una persona apasionada por la
							tecnología, no pierdas esta oportunidad y
							agrega skills a tu stack profesional.</p>
						<h3><FontAwesome name="clock-o"/> Duración (36 horas)</h3>
						<p> Martes y jueves de 7:00pm a 10:00pm <br/> Sábado de 10:00am a 1:00pm  </p>

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
	}
}

export default ReactRedux;
