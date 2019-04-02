import React from 'react';
import nerd from '../../assets/nerd_pag.png';
import {Link} from 'react-router-dom';
import icon from '../../assets/icons8-satellites-100.png';

export const Slide = () => {

	return (
	<div>
		<div className="home">
			<h1>Learn to <span>code</span></h1>

			<p className="slogan">and change your life or your career with the right
				technology and right skills.</p>
			<div className="card_home">
				<div className="card_home_img">
					<img src={icon} alt="icono"/>
				</div>
				<div className="card_home_text">
					<p>ELIGE TU PATH</p>
					<p>
						¿Quieres aprender a programar pero no sabes por donde empezar?
						Explora todos los cursos, dinos cual es tu objetivo y te guiaremos en esta travesía.

					</p>
					<button className="btn_large">Explorar</button>
				</div>
			</div>
		</div>
			<div className="welcome">

			</div>

	</div>
	);
};
