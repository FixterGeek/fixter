import React from 'react';
import photo from '../../assets/18891870_1543998225611670_8032322982945740932_o.jpg';

export const CommentDisplay = () => {

    return (
        <div className="comment">
			<h2>Nuestros estudiantes</h2>
			<div className="flexin">
				<div className="photo-alumno">
				</div>
				<div className="comment-alumno">
					<h3>Nombre del alumno</h3>
					<p>
						Aprender a programar, y convertirme en un desarrollador web era uno de mis principales objetivos al iniciar mi carrera profesional, pero no quería seguir el esquema tradicional. Por suerte encontré Fixter y su sistema de enseñanza, el cual me llevó no solo a aprender a programar, si no a convertirme en un desarrollador profesional
					</p>
					<p> - Oswaldo Martinez</p>
				</div>
			</div>
        </div>
    );
};
