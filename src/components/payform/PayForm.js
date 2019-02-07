import React, { Component } from 'react';
import './PayForm.css';
import Conekta from "./Conekta";
import toastr from 'toastr';
import {createOrder} from "../../services/payments-service";

class PayForm extends Component {

	constructor(){
		super();
		this.state = {
			card: {
				cupon: "",
				name: "",
				number: "",
				exp_date: "",
				period: "contado",
				cvc: "",
				phone: ""
			}
		};
		this.conekta = new Conekta()
	}

    componentDidMount () {
        window.scroll(0, 0)
    }

	handleInputs = e => {
		const {card} = this.state;
		let field = e.target.name;
		if(field === "number") {
			let trimmed = e.target.value.replace(/\s+/g, '');
			if(trimmed.length > 16){
				trimmed = trimmed.substr(0,16);
			}

			let numbers = [];
			for(let i=0; i < trimmed.length; i+=4){
				numbers.push(trimmed.substr(i, 4));
			}

			card["number"] = numbers.join(" ");
		} else if(field === "exp_date"){
			let trimmed = e.target.value.replace(/\//g, ' ').replace(/\s+/g, '');
			if(trimmed.length > 4){
				trimmed = trimmed.substr(0,4);
			}

			let numbers = [];
			for(let i=0; i < trimmed.length; i+=2){
				numbers.push(trimmed.substr(i, 2));
			}
			card["exp_month"] = numbers[0];
			card["exp_year"] = `20${numbers[1]}`;
			card["exp_date"] = numbers.join("/")

		} else if(field === "phone"){
			let trimmed = e.target.value.replace(/-/g, '').replace(/\s+/g, '');
			if(trimmed.length > 12){
				trimmed = trimmed.substr(0,12);
			}

			let numbers = [];
			for(let i=0; i < trimmed.length; i+=2){
				numbers.push(trimmed.substr(i, 2));
			}

			card["phone"] = numbers.join("-");
		} else{
			card[field] = e.target.value
		}
		this.setState({card})
	};


	validateCard = (card) => {
		return !!(this.conekta.api.card.validateNumber(card.number) ||
			this.conekta.api.card.validateExpirationDate(card.exp_month, card.exp_year) ||
			this.conekta.api.card.validateCVC(card.cvc));
	};


	tokenize = () =>{
		this.conekta.api.Token.create({card:this.state.card}, (conekta_obj) => {
			toastr.success("Pago procesado con éxito");
			createOrder(conekta_obj.id);
		}) ,
			(err)=> {
				console.error(err);
				toastr.error("Algo salió mal")
			}
	};

	handlePayment = e => {
		e.preventDefault();
		if (this.validateCard(this.state.card)){
			this.tokenize();
		}
	};

    render() {
    	const {number, exp_date, name, cupon, phone, cvc} = this.state.card;
        return (
            <div className="pay">

                <div className="card_form">
                    <h2>Bootcamp: Información de Pago</h2>
                    <hr className="division"/>

                    <form onSubmit={this.handlePayment}>
                        <div className="formgroup_cupon">
                            <div className="inp_cupon">
                                <input type="text"
									   name="cupon"
									   value={cupon}
									   onChange={this.handleInputs}
									   className="formcontrol"
									   placeholder="Ingresa el código de descuento"/>
                            </div>
                            <button className="btn_cupon">Aplicar código de descuento</button>
                        </div>
                        <br/>
                        <p className="nombre_input" htmlFor="">Nombre del tarjetahabiente</p>
                        <div className="formgroup_cupon">
                            <div className="inp_pay">
                                <input type="text"
									   name="name"
									   value={name}
									   onChange={this.handleInputs}
									   className="formcontrol"
									   placeholder="Nombre "
									   required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                <p className="help-block text-danger"></p></div>
                        </div>
                        <br/>
                        <p className="nombre_input" htmlFor="">Número de tarjeta de crédito</p>
                        <div className="formgroup_cupon">
                            <div className="inp_pay">
                                <input type="text"
									   name="number"
									   value={number}
									   onChange={this.handleInputs}
									   className="formcontrol"
									   placeholder="---- ---- ---- ----" required data-validation-required-message="Porfavor ingresa tu nombre"/>
                               </div>
                        </div>

                        <div className="formgroup_cupon">
                            <div style={{flexGrow:"1"}}>
                            <p className="nombre_input" htmlFor="">Fecha de expiración</p>
                                <div className="inp_tarjeta">
                                    <input type="text"
										   name="exp_date"
										   value={exp_date}
										   onChange={this.handleInputs}
										   className="formcontrol"
										   placeholder="MM/AA"
										   required data-validation-required-message="Porfavor ingresa tu nombre"/>
                               </div>

                            </div>
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Código de seguridad</p>
                                <div className="inp_tarjeta">
                                    <input type="text"
										   name="cvc"
										   maxLength="4"
										   value={cvc}
										   onChange={this.handleInputs}
										   className="formcontrol"
										   placeholder="CVV"
										   required data-validation-required-message="Porfavor ingresa tu nombre"/>
                                </div>

                            </div>


                        </div>
                        <div className="formgroup_cupon">
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Número telefónico</p>
                                <div className="inp_tarjeta">
                                    <input type="text"
										   name="phone"
										   value={phone}
										   onChange={this.handleInputs}
										   className="formcontrol"
										   placeholder="555-555-55-55"
										   required data-validation-required-message="Porfavor ingresa tu número de teléfono"/>
                                </div>

                            </div>
                            <div style={{flexGrow:"1"}}>
                                <p className="nombre_input" htmlFor="">Opciones de pago</p>
                                <div className="inp_tarjeta">

                                        <select name="period" onChange={this.handleInputs} className='select' id="period" required data-validation-required-message="Selecciona como quieres pagar">
                                            <option  default value="Método" disabled>Opciones de pago</option>
                                            <option value="contado">Contado</option>
                                            <option value="3">3 meses sin intereses</option>
                                            <option value="6">6 meses sin intereses</option>
                                            <option value="12">12 meses sin intereses</option>
                                        </select>

                                </div>

                            </div>


                        </div>
                        <div className="formgroup_cupon" style={{display:"flex"}}>
                            <span><input className="check" type="checkbox" placeholder="" required data-validation-required-message="Debes aceptar términos y condiciones"/>Acepto terminos y Condiciones</span>
                        </div>
                        <br/>
                        <button type="submit" className="btn_start">Pagar $6,000.00</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PayForm;
