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

					<p>
						He sido alumno e instructor de Fixter desde 2016. Gracias a ellos he conseguido skills con los que he tenido trabajos como developer en varios estados de la república, así como en USA. Me motivaron para crear mi propia comunidad y mi propia casa de desarrollo.
					</p>
					<p> - Martín Melo</p>
				</div>
			</div>
        </div>
    );
};
