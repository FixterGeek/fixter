import React, { Component } from 'react';
import './Bootcamp.css';
import bootcamp from '../../assets/bootc.png';
import laptop from '../../assets/node.png';
import temario_edition from '../../assets/temarios/Temario_IntensiveCamp.pdf';
import {CardCampDisplay} from '../CardCamp/CardCampDisplay';
import hooks from '../../assets/51565935_2358159057541818_2165592797782999040_o.jpg'


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
                        imagen={hooks}
                        fecha="4 de Marzo"
						sabatino={true}
						dia2="Mar, Jue, Sab"
						horario2="7pm a 10pm y Sab 10am a 2pm"
						place="Cubic Idea"
						address="Jalapa 100, Roma Nte., CDMX"
                        dia="Lun, Mier, Vie"
                        horario="7:00 pm a 10:00 pm"
                        precio="12,000.00"

                    />
                </div>

            </div>
        );
    }
}

export default Bootcamp;
