import React, { Component } from 'react';
import './Bootcamp.css';
import bootcamp from '../../assets/cursos.png';
import temario_edition from '../../assets/temarios/Reacjs hooks + firebase.pdf';
import pachuca from  '../../assets/52265924_1560764037401880_6264642566415712256_n.png'
import {CardCampDisplay} from '../CardCamp/CardCampDisplay';
import temario_pachuca from '../../assets/temarios/Reacjs-firebase-Pachuca.pdf'


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
                        nombre="React Hooks + Firebase"
                        descript="Aprenderás todo lo que necesitas sobre la programación de una aplicación web con JavaScript y ReactJs junto con su más reciente lanzamiento... Hooks. Además, aprenderás Firebase, un backend as a service de Google, usando principalmente su base de datos no relacional, teniendo con esto una aplicación fullstack completa sin tener que crear un backend en ningún otro lenguaje."
                        imagen="https://i.imgur.com/8hbDoO0.jpg"
                        fecha="4 de Marzo"
						sabatino={true}
						temario={temario_edition}
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
