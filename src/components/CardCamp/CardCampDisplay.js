import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import "./CardCamp.css";

let link = "https://drive.google.com/open?id=152beO1mimND01S2C4J_MwCZo_pwNTUG1";

export const CardCampDisplay = ({
	nombre,
	descript,
	imagen,
	fecha,
	precio,
	temario,
	horario,
	dia,
	place,
	address,
	dia2,
	horario2,
	sabatino
}) => {
	return (
		<div className="card">
			<div className="card_info">
				<div style={{ minHeight: "65%" }}>
					<h2 className="name">{nombre}</h2>
					<p>{descript}</p>
				</div>
		<br/>
				<div className="box_btn">

						<button className="btn_camp ">
							Más información
				</button>


				</div>
			</div>
			<div
				className="card_img"
				style={{ backgroundImage: `url("${imagen}")` }}
			>
				<div className={`etiqueta ${sabatino ? "course-large" : null}`}>
					<div className="etq">
						<FontAwesome name="clock-o" size="2x" />
						<h3>{fecha}</h3>
						<p>
							{dia} <br />
							{horario}
						</p>
						{sabatino ? (
							<p className="margin-small-top">
								{dia2} <br />
								{horario2}
							</p>
						) : null}
					</div>
					<div className="etq">
						<FontAwesome name="map-marker" size="2x" />
						<h3>{place}</h3>
						<p>{address}</p>
					</div>
					<div className="etq">
						<FontAwesome name="check-square-o" size="2x" />
						<h3>{precio}</h3>
						<p>Precio Promo</p>
					</div>
				</div>
			</div>
		</div>
	);
};
