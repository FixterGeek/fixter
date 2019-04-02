import React from 'react';
import robot from '../../assets/robotino.png';
import {WhyDisplay} from "./WhyDisplay";

export const AboutDisplay = () => {

    return (
    	<div className=" seccion">
			<div className="flex">
				<div className="why-text">
					<h2>Aprende los lenguajes de programación más utilizados para el desarrollo de software</h2>
					<p>En Fixter podrás aprender los
						lenguajes de programación más utilizados a nivel mundial para el desarrollo web, data science y machine learning.
						<br/><br/>
						Nuestro bootcamp busca enseñar a los curiosos por el código los lenguajes de programación más modernos de forma profesional.</p>
				</div>
				<div>
					<img className="why-img" src="https://images.pexels.com/photos/36990/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
				</div>
			</div>
			<WhyDisplay/>
			<button className="btn_float">Aplicar</button>
		</div>


    );
};
