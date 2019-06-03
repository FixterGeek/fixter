import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import camp from '../../assets/bootcamp.png';
import user from '../../assets/user.png';
import { CardCampDisplay } from '../CardCamp/CardCampDisplay';
import { AplicationCard } from './AplicationCard';
import hooks from '../../assets/51565935_2358159057541818_2165592797782999040_o.jpg'
import axios from 'axios'


export const PerfilDisplay = ({ photoURL, displayName, email, isLogged, applications = [], pay }) => {
    let [enrolled, setEnrolled] = useState(false)
    useEffect(()=>{
        axios.get('https://fixtercamp.herokuapp.com/self', {headers:{"Authorization": localStorage.getItem('token')}})
        .then(res=>{
            console.log(res)
            setEnrolled(res.data.enrolled)
        })
    },[])
    //console.log(applications)
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
                            <Link to="/bootcamp">
                                <button style={{ marginTop: "20px", marginLeft: "10px" }} className="btn_pay">Aplicar</button>
                            </Link>
                        </div>
                        <hr className="division" />
                        {enrolled ? 
                         <AplicationCard
                         nombre={"Bootcamp online"}
                         descript=""
                         fecha={"17/Jul/2019"}
                         sabatino={false}
                         precio="20,000.00"
                     />
                        :
                        <div>
                            {applications.map((app, key) => {
                                let {course = {}} = app
                                let title = course ? course.title : "Sin titulo"
                                let updatedAt = course ? course.updatedAt : null
                                return (
                                <AplicationCard
                                    key={key}
                                    application={app}
                                    pay={pay}
                                    nombre={title}
                                    descript=""
                                    imagen={hooks}
                                    fecha={updatedAt}
                                    sabatino={true}
                                    dia2="Mar, Jue, Sab"
                                    horario2="7pm a 10pm y Sab 10am a 2pm"
                                    place="Cubic Idea"
                                    address="Jalapa 100, Roma Nte., CDMX"
                                    dia="Lun, Mier, Vie"
                                    horario="7:00 pm a 10:00 pm"
                                    precio="12,000.00"
                                />
                            )
                            })}
                        </div>}
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
