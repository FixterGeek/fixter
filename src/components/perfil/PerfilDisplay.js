import React from 'react';
import { Link } from 'react-router-dom';
import camp from '../../assets/bootcamp.png';
import user from '../../assets/user.png';
import { CardCampDisplay } from '../CardCamp/CardCampDisplay';
import { AplicationCard } from './AplicationCard';
import hooks from '../../assets/51565935_2358159057541818_2165592797782999040_o.jpg'


export const PerfilDisplay = ({ photoURL, displayName, email, isLogged, applications = [], pay }) => {

    return (
        <div className="perfil">
            <div className="profile">
                <div className="perfil_datos">
                    <div className="data_card">
                        <img className="photo_user" src={photoURL ? photoURL : user} alt="user" />
                        <div className="user_data">
                            <h2>{displayName}</h2>
                            <p>{email}</p>
                            <hr className="division" />
                            <p>{displayName ? displayName : email} te uniste a Fixter </p>
                            <p>recientemente</p>
                        </div>
                    </div>
                </div>
                <div className="perfil_progress">
                    <div>
                        <div style={{ display: "flex" }}>
                            <h2>Bootcamp</h2>
                            <Link to="/aply">
                                <button style={{ marginTop: "20px", marginLeft: "10px" }} className="btn_pay">Aplicar</button>
                            </Link>
                        </div>
                        <hr className="division" />
                        <div>
                            {applications.map((app, key) => (
                                <AplicationCard
                                    key={key}
                                    application={app}
                                    pay={pay}
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
                            ))}
                        </div>
                        {/* <div className="box_courses">
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Intro al código</p>

                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Frontend Path</p>

                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Backend Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Mobile Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>FullStack Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                            <div className="crs opacity">
                                <img className="batches" src={camp} alt="camp"/>
                                <p>Servers Path</p>
                                <div className="aviso">
                                    <p>Graduate de este bootcamp para desbloquear</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                        {/* <div>
                        <h2>Cursos</h2>
                        <hr className="division"/>
                        <div className="box_courses">
                    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};
