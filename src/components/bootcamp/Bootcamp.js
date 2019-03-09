import React, { Component } from 'react';
import './Bootcamp.css';
import bootcamp from '../../assets/cursos.png';
import temario_edition from '../../assets/temarios/Reacjs hooks + firebase.pdf';
import pachuca from  '../../assets/52265924_1560764037401880_6264642566415712256_n.png'
import {CardCampDisplay} from '../CardCamp/CardCampDisplay';
import temario_pachuca from '../../assets/temarios/Reacjs-firebase-Pachuca.pdf'
import image_vue from '../../assets/53676946_2404645959559794_8377063136498286592_o.png'
import vue_temario from "../../assets/temarios/Vue + Typescript.pdf"
import image_python from '../../assets/53643428_2404605299563860_1164970498484862976_o.jpg'
import temario_python from '../../assets/temarios/Python + Django Rest Framework.pdf'
import {Link} from "react-router-dom";
import FontAwesome from "react-fontawesome";
import "../CardCamp/CardCamp.css";


class Bootcamp extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div className="bootcamp">
                <div className="camp_present">
                    <img src={bootcamp} alt=""/>
                    <h2>Fixter Camp</h2>
                    <p>Rapid Specific Courses</p>
                </div>

               <div style={{backgroundColor:"#f4f5f9", paddingTop:"50px", paddingBottom:"50px"}}>

				   <div className="card">
					   <div className="card_info">
						   <div style={{ minHeight: "65%" }}>
							   <h2 className="name">Vue + TypeScript</h2>
							   <p>Como desarrolladores web sabemos lo importante que es seleccionar la herramienta correcta y de menor fricción para contruir aplicaciones de forma rápida, sencilla y poderosa. VUE se ha convertido en los últimos años en una de las opciones más populares gracias a que cumple estas caracteristicas haciendo crecer su comunidad y que cada vez más startups y desarrolladores decidan usarlo, crea aplicaciones web de la una forma rápida y moderna.</p>
						   </div>
						   <br/>
						   <div className="box_btn">
							   <Link to="/aply">
								   <button  className="btn_aply ">
									   Aplicar
								   </button>
							   </Link>
							   <Link to="/Vue">
								   <button className="btn_camp " >
									   Más información
								   </button>
							   </Link>

						   </div>
					   </div>
					   <div
						   className="card_img"
						   style={{ backgroundImage: `url("${image_vue}")` }}
					   >
						   <div className="etiqueta">
							   <div className="etq">
								   <FontAwesome name="clock-o" size="2x" />
								   <h3>1 de Abril</h3>
								   <p>
									   Lun, Mie y Vie<br />
									   7pm a 10pm
								   </p>

							   </div>
							   <div className="etq">
								   <FontAwesome name="map-marker" size="2x" />
								   <h3>Cubic Idea</h3>
								   <p>Jalapa 100, Roma Nte., CDMX</p>
							   </div>
							   <div className="etq">
								   <FontAwesome name="check-square-o" size="2x" />
								   <h3>$12,000.00</h3>
								   <p>Precio Promo</p>
							   </div>
						   </div>
					   </div>
				   </div>


				   <div className="card">
					   <div className="card_info">
						   <div style={{ minHeight: "65%" }}>
							   <h2 className="name">¡Python + Django Rest Framework!</h2>
							   <p>Según githut.info (sí, githut) Python es uno de los tres lenguajes más importantes en la actualidad. En esta ocación Python será nuestra herramienta principal con la que vamos a construir API's REST, uno de los estándares más modernos para el desarrollo de micro servicios web.</p>
						   </div>
						   <br/>
						   <div className="box_btn">
							   <Link to="/aply">
								   <button  className="btn_aply ">
									   Aplicar
								   </button>
							   </Link>
							   <Link to="/python">
								   <button className="btn_camp " >
									   Más información
								   </button>
							   </Link>

						   </div>
					   </div>
					   <div
						   className="card_img"
						   style={{ backgroundImage: `url("${image_python}")` }}
					   >
						   <div className="etiqueta">
							   <div className="etq">
								   <FontAwesome name="clock-o" size="2x" />
								   <h3>2 de Abril</h3>
								   <p>
									   Mar y Jue
									   7 a 10pm
								   </p>
								   <p>
									   Sab
									   10am a 2pm
								   </p>

							   </div>
							   <div className="etq">
								   <FontAwesome name="map-marker" size="2x" />
								   <h3>Cubic Idea</h3>
								   <p>Jalapa 100, Roma Nte., CDMX</p>
							   </div>
							   <div className="etq">
								   <FontAwesome name="check-square-o" size="2x" />
								   <h3>$12,000.00</h3>
								   <p>Precio Promo</p>
							   </div>
						   </div>
					   </div>
				   </div>




				   <CardCampDisplay
					   nombre="React + Firebase Pachuca"
					   descript="Aprenderás todo lo que necesitas sobre la programación de una aplicación web con JavaScript y ReactJs junto con su más reciente lanzamiento... Hooks. Además, aprenderás Firebase, un backend as a service de Google, usando principalmente su base de datos no relacional, teniendo con esto una aplicación fullstack completa sin tener que crear un backend en ningún otro lenguaje."
					   imagen={pachuca}
					   fecha="25 de Marzo"
					   temario={temario_pachuca}
					   place="Peanut cowork"
					   address=" Blvrd Nuevo Hidalgo 228, Hgo"
					   dia="Lun, Mar y Mie"
					   precio="15,000.00"

				   />

                </div>

            </div>
        );
    }
}

export default Bootcamp;
