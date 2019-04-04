import React from 'react';
import robot from '../../assets/robotino.png';
import {WhyDisplay} from "./WhyDisplay";
import {Link} from "react-router-dom";
import photo from '../../assets/_DSC0390.JPG';

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
					<img className="why-img" src={photo} alt=""/>
				</div>
			</div>
			<WhyDisplay/>
			<Link to="/aply">
			<button className="btn_float">Aplicar</button>
			</Link>
		</div>


    );
};
