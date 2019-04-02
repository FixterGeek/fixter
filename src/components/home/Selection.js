import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from "../presencial/PresencialDetail";

export const Selection = () => {

	return (
		<div className="selection">
			<div className="border-r">
				<h2>Cursos Presenciales</h2>
				<p>FixterGeek es la plataforma en línea en donde puedes aprender las herramientas para desarrollo de software más utilizadas a nivel mundial, teniendo acceso a cursos y bootcamps de alta calidad.  </p>
				<Link to="/cursos-presenciales">
					<button className="btn_app">Explorar</button>
				</Link>
			</div>
			<div className="border-l">
				<h2>Cursos Online</h2>
				<p>FixterGeek es la plataforma en línea en donde puedes aprender las herramientas para desarrollo de software más utilizadas a nivel mundial, teniendo acceso a cursos y bootcamps de alta calidad.  </p>
				<button className="btn_app">Próximamente</button>
			</div>
		</div>
	);
};
