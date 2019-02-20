import React, { Component } from 'react';
import './Bootcamp.css';
import bootcamp from '../../assets/bootc.png';
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
                    <p>El Bootcamp de código</p>
                </div>

               <div style={{backgroundColor:"#f4f5f9", paddingTop:"50px", paddingBottom:"50px"}}>
                    <CardCampDisplay
                        nombre="React Hooks + Firebase"
                        descript="Aprenderás todo lo que necesitas sobre la programación de una aplicación web con JavaScript y ReactJs junto con su más reciente lanzamiento... Hooks. Además, aprenderás Firebase, un backend as a service de Google, usando principalmente su base de datos no relacional, teniendo con esto una aplicación fullstack completa sin tener que crear un backend en ningún otro lenguaje."
                        imagen="https://i.imgur.com/8hbDoO0.jpg"
                        fecha="4 de Marzo"
						sabatino={true}
						temario={temario_edition}
						dia2="Mar, Jue, Sab"
						horario2="7pm a 10pm y Sab 10am a 2pm"
						place="Cubic Idea"
						address="Jalapa 100, Roma Nte., CDMX"
                        dia="Lun, Mier, Vie"
                        horario="7:00 pm a 10:00 pm"
                        precio="12,000.00"

                    />

				   <CardCampDisplay
					   nombre="React + Firebase Pachuca"
					   descript="Aprenderás todo lo que necesitas sobre la programación de una aplicación web con JavaScript y ReactJs junto con su más reciente lanzamiento... Hooks. Además, aprenderás Firebase, un backend as a service de Google, usando principalmente su base de datos no relacional, teniendo con esto una aplicación fullstack completa sin tener que crear un backend en ningún otro lenguaje."
					   imagen={pachuca}
					   fecha="25 de Marzo"
					   temario={temario_pachuca}
					   place="Peanut cowork"
					   address="Av, Blvrd Nuevo Hidalgo 228, Puerta de Hierro, Pachuca de Soto, Hgo"
					   dia="Lun, Mar y Mie"
					   horario="5:00 pm a 8:00 pm"
					   precio="15,000.00"

				   />

                </div>

            </div>
        );
    }
}

export default Bootcamp;
