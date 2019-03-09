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

				<a href="fire-hooks" >
					<CardCampDisplay
                        nombre="Vue + TypeScript"
                        descript="Como desarrolladores web sabemos lo importante que es seleccionar la herramienta correcta y de menor fricción para contruir aplicaciones de forma rápida, sencilla y poderosa. VUE se ha convertido en los últimos años en una de las opciones más populares gracias a que cumple estas caracteristicas haciendo crecer su comunidad y que cada vez más startups y desarrolladores decidan usarlo, crea aplicaciones web de la una forma rápida y moderna."
                        imagen={image_vue}
                        fecha="1 de Abril"
						sabatino={false}
						temario={vue_temario}
						place="Cubic Idea"
						address="Jalapa 100, Roma Nte., CDMX"
                        dia="Part time"
                        precio="12,000.00"

                    />

					<CardCampDisplay
						nombre="Python + Django Rest Framework"
						descript="Según githut.info (sí, githut) Python es uno de los tres lenguajes más importantes en la actualidad. En esta ocación Python será nuestra herramienta principal con la que vamos a construir API's REST, uno de los estándares más modernos para el desarrollo de micro servicios web. Inscríbete y conviertete en un desarrollador backend rockstar."
						imagen={image_python}
						fecha="2 de Abril"
						sabatino={true}
						temario={temario_python}
						place="Cubic Idea"
						address="Jalapa 100, Roma Nte., CDMX"
						dia="Part time"
						precio="12,000.00"

					/>

							</a>
							<a href="fire-pachuca" >
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
						   </a>
                </div>

            </div>
        );
    }
}

export default Bootcamp;
