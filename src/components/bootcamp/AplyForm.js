import React from 'react';
import './Aply.css';
import FontAwesome from 'react-fontawesome';


export const AplyForm = ({ onSave, errors, onChangeAply, name, email, telefono, razon, courses }) => {
    return (
        <div >
            <div className="aplicacion">
                <div className="card_form">
                    <h2>Inscribete a nuestro Bootcamp ahora</h2>
                    <hr className="division" />
                    <form onSubmit={onSave} method="post" name="sentMessage" action="">
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="user" />
                                <input type="text" value={name} onChange={onChangeAply} name="nombre" className="formcontrol" placeholder="Nombre" required data-validation-required-message="Porfavor ingresa tu nombre" />
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="envelope" />
                                <input type="email" value={email} onChange={onChangeAply} name="email" className="formcontrol" placeholder="E-mail" required data-validation-required-message="Porfavor ingresa tu e-mail" />
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className="inp">
                                <FontAwesome name="user" />
                                <input type="tel" value={telefono} onChange={onChangeAply} name="tel" className="formcontrol" placeholder="Teléfono" id="phone" required data-validation-required-message="Porfavor ingresa tu numero telefonico" />
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <div className="formgroup">
                            <div className='option'>
                                <select name="course" onChange={onChangeAply} type="text" className='icon' id="name" data-validation-required-message="Please complete">
                                    <option>Selecciona un curso..</option>
                                    {courses && courses.map(course => <option key={course._id} value={course._id}>{course.title}</option>)}
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn_start margin-small-top">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
