import React, { Component } from 'react';
import './PayForm.css';
import Conekta from "./Conekta";
import toastr from 'toastr';
import { createOrder, checkCoupon } from "../../services/payments-service";

class PayBootcamp extends Component {

	constructor() {
		super();
		this.state = {
			card: {
				cupon: "",
				name: "",
				number: "",
				exp_date: "",
				plazo: "contado",
				cvc: "",
                phone: "",
                country:""
			},
			loading: false,
			isLogged: false,
			user: {},
			token: null,
			courseId: null
		};
		this.conekta = new Conekta()
	}

	componentWillMount() {
		// courseId
        //let { courseId = null } = this.props.match.params
        // get the real bootcampID
		this.setState({ courseId:"ABC" })
		//
		let user = JSON.parse(localStorage.getItem("user"));
		let token = localStorage.getItem("token");
		let application = JSON.parse(localStorage.getItem('currentApplication'))
		if (user) {
			this.setState({ isLogged: true, user, token, application })
		} else {
			this.setState({ isLogged: false });
			this.props.history.push("/login");
		}
		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": false,
			"progressBar": false,
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "0",
			"hideDuration": "0",
			"timeOut": "0",
			"extendedTimeOut": "0",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}
	}

	componentDidMount() {
		window.scroll(0, 0)
	}

	handleInputs = e => {
		const { card } = this.state;
		let field = e.target.name;
		if (field === "number") {
			let trimmed = e.target.value.replace(/\s+/g, '');
			if (trimmed.length > 16) {
				trimmed = trimmed.substr(0, 16);
			}

			let numbers = [];
			for (let i = 0; i < trimmed.length; i += 4) {
				numbers.push(trimmed.substr(i, 4));
			}

			card["number"] = numbers.join(" ");
		} else if (field === "exp_date") {
			let trimmed = e.target.value.replace(/[/\s]/g, '');
			if (trimmed.length > 4) {
				trimmed = trimmed.substr(0, 4);
			}

			let numbers = [];
			for (let i = 0; i < trimmed.length; i += 2) {
				numbers.push(trimmed.substr(i, 2));
			}
			card["exp_month"] = numbers[0];
			card["exp_year"] = `20${numbers[1]}`;
			card["exp_date"] = numbers.join("/")

		} else if (field === "phone") {
			let trimmed = e.target.value.replace(/[-\s]/g, '');
			if (trimmed.length > 12) {
				trimmed = trimmed.substr(0, 12);
			}

			let numbers = [];
			for (let i = 0; i < trimmed.length; i += 2) {
				numbers.push(trimmed.substr(i, 2));
			}

			card["phone"] = numbers.join("-");
		} else {
			card[field] = e.target.value
		}
		this.setState({ card })
	};


	validateCard = (card) => {

		if (!this.conekta.api.card.validateNumber(card.number)) toastr.error("Número de tarjeta inválido")
		if (!this.conekta.api.card.validateExpirationDate(card.exp_month, card.exp_year)) toastr.error("Expiración de la tarjeta inválida")
		if (!this.conekta.api.card.validateCVC(card.cvc)) toastr.error("Número de seguridad inválido")

		return !!(this.conekta.api.card.validateNumber(card.number) &&
			this.conekta.api.card.validateExpirationDate(card.exp_month, card.exp_year) &&
			this.conekta.api.card.validateCVC(card.cvc));
	};


	tokenize = () => {
		const conektaSuccess = (conekta_obj) => {
			const { plazo, cupon, country, phone } = this.state.card;
			const { token, application } = this.state;
			let obj = {
				conektaToken: conekta_obj.id,
				plazo,
                application,
                country,
                phone
			};
			if (cupon.valid) obj.cupon = cupon;
			createOrder(obj, token)
				.then(res => {
					toastr.success("Pago procesado con éxito");
					this.setState({ loading: false });
					this.props.history.push("/perfil");
				})
				.catch(err => {
					if (!err) return
					err.response.data.details.forEach(e => toastr.error(`${e.message}`))
					this.setState({ loading: false })
				})
		};
		const conektaError = (err) => {
			console.log(err)
			this.setState({ loading: false })
			toastr.error("Error al procesar datos de pago, intenta más tarde")
			toastr.error(err.message_to_purchaser)
		};
		// creando el token de conekta
		this.conekta.api.Token.create({ card: this.state.card }, conektaSuccess, conektaError)
	};

	handlePayment = e => {
		e.preventDefault();
		this.setState({ loading: true })
		if (this.validateCard(this.state.card)) {
			this.tokenize();
		} else {
			this.setState({ loading: false })
		}
	};

	checkCoupon = () => {
		const { cupon } = this.state.card;
		const { token, courseId } = this.state;
		checkCoupon({ courseId, cupon }, token)
			.then(res => {
				const cupon = res.data;
				const card = this.state.card;
				card.cupon = cupon;
				toastr.success("Cupón valido");
				this.setState({ card });
			})
			.catch(e => {
				toastr.error(`Algo malo pasó`);
				console.error(e)
			})
	};

	getCost = () => {

        // real cost ---------------------
        return 1000

		const { plazo, cupon } = this.state.card;
		const { application } = this.state;
		console.log(application)
		let cost = cupon.valid ? (application.cost * (1 - cupon.value / 100)) : application.cost 
		if (typeof cost === "number") cost = cost.toFixed(0)
		console.log(cost)
		return cost
	}; // I guess this is nt at the backend right?

	render() {
		const { number, exp_date, name, cupon, phone, cvc, country } = this.state.card;
		const { loading } = this.state;
		return (
			<div className="pay">

				<div className="" style={{textAlign:"center"}}>
                <h2> Estas a 1 paso de ser parte del primer Coding Bootcamp Online.
                    <br/>
                    Aprende los fundamentos del desarrollo web desde tu casa  </h2>
					<hr className="division" />


					<form onSubmit={this.handlePayment}>
						{/* <div className="formgroup_cupon">
							<div className="inp_cupon">
								<input type="text"
									name="cupon"
									value={cupon.valid ? cupon.name : cupon}
									onChange={this.handleInputs}
									className="formcontrol"
									placeholder="Ingresa el código de descuento" />
							</div>
							<button disabled={cupon.valid} className="btn_cupon" type="button" onClick={this.checkCoupon}>Aplicar código de descuento</button>
							{cupon.valid ? <p className="descuento">Descuento: {cupon.value}%</p> : null}
						</div>
						<br /> */}
						<p className="nombre_input" htmlFor="">Nombre que aparece en la tarjeta</p>
						<div className="formgroup_cupon">
							<div className="inp_pay">
								<input type="text"
									name="name"
									value={name}
									onChange={this.handleInputs}
									className="formcontrol"
									placeholder="Nombre "
									required data-validation-required-message="Porfavor ingresa tu nombre" />
								<p className="help-block text-danger"></p></div>
						</div>
						<br />
						<p className="nombre_input" htmlFor="">Número de tarjeta de crédito</p>
						<div className="formgroup_cupon">
							<div className="inp_pay">
								<input type="text"
									name="number"
									value={number}
									onChange={this.handleInputs}
									className="formcontrol"
									placeholder="---- ---- ---- ----" required data-validation-required-message="Porfavor ingresa tu nombre" />
							</div>
						</div>

						<div className="formgroup_cupon">
							<div style={{ flexGrow: "1" }}>
								<p className="nombre_input" htmlFor="">Fecha de expiración</p>
								<div className="inp_tarjeta">
									<input type="text"
										name="exp_date"
										value={exp_date}
										onChange={this.handleInputs}
										className="formcontrol"
										placeholder="MM/AA"
										required data-validation-required-message="Porfavor ingresa tu nombre" />
								</div>

							</div>
							<div style={{ flexGrow: "1" }}>
								<p className="nombre_input" htmlFor="">Código de seguridad</p>
								<div className="inp_tarjeta">
									<input type="text"
										name="cvc"
										maxLength="4"
										value={cvc}
										onChange={this.handleInputs}
										className="formcontrol"
										placeholder="CVV"
										required data-validation-required-message="Porfavor ingresa tu nombre" />
								</div>

							</div>


						</div>
						<div className="formgroup_cupon">
							<div style={{ flexGrow: "1" }}>
								<p className="nombre_input" htmlFor="">Número telefónico</p>
								<div className="inp_tarjeta">
									<input type="text"
										name="phone"
										value={phone}
										onChange={this.handleInputs}
										className="formcontrol"
										placeholder="555-555-55-55"
										required data-validation-required-message="Porfavor ingresa tu número de teléfono" />
								</div>

							</div>
							<div style={{ flexGrow: "1" }}>
								<p className="nombre_input" htmlFor="">País de residencia</p>
								<div className="inp_tarjeta">
									<input type="text"
										name="country"
										value={country}
										onChange={this.handleInputs}
										className="formcontrol"
										placeholder="Perú"
										required data-validation-required-message="Porfavor ingresa tu País" />
								</div>

							</div>
							<div style={{ flexGrow: "1" }}>
								<p className="nombre_input" htmlFor="">Opciones de pago</p>
								<div className="inp_tarjeta">

									<select name="plazo" onChange={this.handleInputs} className='select' id="plazo" required data-validation-required-message="Selecciona como quieres pagar">
										<option default value="Método" disabled>Opciones de pago</option>
										<option value="contado">Contado</option>
										<option value="3">3 meses sin intereses</option>
										{/* <option value="6">6 meses sin intereses</option>
										<option value="12">12 meses sin intereses</option> */}
									</select>

								</div>

							</div>


						</div>
						<div className="formgroup_cupon" style={{ display: "flex" }}>
							<span><input className="check" type="checkbox" placeholder="" required data-validation-required-message="Debes aceptar términos y condiciones" />Acepto terminos y Condiciones</span>
						<a> | Leer terminos y condiciones</a>
                        </div>
						<br />
						<button type="submit" className="btn_start" disabled={loading}>{loading ? "Procesando..." : `Pagar Inscripción $${this.getCost()}`}</button>
					</form>
				</div>
			</div>
		);
	}
}

export default PayBootcamp;
