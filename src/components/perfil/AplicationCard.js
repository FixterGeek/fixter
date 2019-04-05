import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import '../CardCamp/CardCamp.css';


export const AplicationCard = ({ pay, application, nombre, descript, imagen, fecha, precio, temario, horario, dia, place, address, dia2, horario2, sabatino }) => {

    return (
        <div className="card" style={{ minHeight: 'inherit' }}>
            <div className="card_info">
                <div>
                    <h2 className="name">{nombre}</h2>
                </div>
                <div className="box_btn">
                    {/* <Link to="/recursos" disabled>
                        <button style={{marginLeft:"20px"}} className="btn_camp">Recursos</button>
                    </Link> */}

                    <button disabled className="btn_app">Recursos</button>

                    <button
                        style={{ marginLeft: "50px" }}
                        className={`btn_app ${!application.paid ? null : 'payed'}`}
                        disabled={application.paid}
                        onClick={() => pay(application)} >{!application.paid ? <FontAwesome name="money" /> : <FontAwesome name="check" />}  {!application.paid ? "Pagar" : "Pagado"}</button>

                </div>
            </div>

            {/* <div className="card_img" style={{backgroundImage:`url("${imagen}")`}}>
                    <div className={`etiqueta ${sabatino ? 'course-large' : null}`}>
                        <div className="etq">
                            <FontAwesome name="clock-o" size="2x"/>
                             <h3>{fecha}</h3>
                            <p>{dia} <br />{horario}</p>
							{sabatino ? <p className="margin-small-top">{dia2} <br />{horario2}</p> : null}
                        </div>
                        <div className="etq">
                            <FontAwesome name="map-marker" size="2x"/>
                            <h3>{place}</h3>
                            <p>{address}</p>
                        </div>
                        <div className="etq">
                            <FontAwesome name="check-square-o" size="2x"/>
                            <h3>{precio}</h3>
                            <p>Precio Promo</p>
                        </div>
                    </div>
            </div> */}
            <hr className="division" />
        </div>
    );
};
