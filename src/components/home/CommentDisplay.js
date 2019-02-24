import React from 'react';
import photo from '../../assets/18891870_1543998225611670_8032322982945740932_o.jpg';

export const CommentDisplay = () => {

    return (
        <div className="comment">
            <div className="comentario">
                <p><span className="signo">"</span>Aprender a programar, y convertirme en un desarrollador
                    web era uno de mis principales objetivos al iniciar mi carrera profesional, pero
                    no quería seguir el esquema tradicional. Por suerte encontré Fixter y su sistema de
                    enseñanza, el cual me llevó no solo a aprender a programar, si no a convertirme en un
                    desarrollador profesional<span className="signo">"</span></p>
                <div className="flex data_comment">
                    <img className="photo_comment" alt="oswaldo" src={photo}/>
                    <p className="name_comment">Oswaldo Martinez</p>
                </div>
            </div>
        </div>
    );
};
