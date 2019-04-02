import React from 'react';
import FontAwesome from 'react-fontawesome';

export const WhyDisplay = () => {

    return (
        <div className="why">
            <div className="ask">
                <div className="cuadro ">
                    <h4><FontAwesome name="edit"/> Registrate</h4>
                    <p>Crea un perfil de usuario y ten acceso a cursos gratuitos.</p>
                </div>
                <div className="cuadro">

                    <h4><FontAwesome name="id-badge"/> Inscríbete</h4>
                    <p>Asiste a un curso y aprende nuevas tecnologías.</p>
                </div>
                <div className="cuadro">

                    <h4><FontAwesome name="laptop"/> eLearning</h4>
                    <p>Aprende con libertad, elige la hora y lugar para tu aprendizaje.</p>
                </div>
                <div className="cuadro">

                    <h4><FontAwesome name="rocket"/> Comunidad</h4>
                    <p>Se parte de la comunidad (meetups, conferencias y mucho código).</p>
                </div>
            </div>
        </div>
    );
};
