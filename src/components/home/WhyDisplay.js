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
                    <p>Asiste a un Bootcamp y aprende nuevas tecnologías en tan solo 8 semanas.</p>
                </div>
                <div className="cuadro">

                    <h4><FontAwesome name="laptop"/> eLearning</h4>
                    <p>Aprende con libertad, eligiendo la hora y lugar para tu aprendizaje</p>
                </div>
                <div className="cuadro">

                    <h4><FontAwesome name="rocket"/> Comunidad</h4>
                    <p>Se parte de nuestra comunidad (meetups, conferencias, posadas y mucho código).</p>
                </div>
            </div>
        </div>
    );
};
