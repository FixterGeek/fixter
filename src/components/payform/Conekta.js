const script = document.createElement('script')

class Conekta{
	constructor(publicKey){
		this.publicKey = publicKey || "key_Ik4WxMhXctrriTvyfMAimyg"
		this.api = null;
		this.setInWindow();
	}

	setInWindow = () => {
		script.src = 'https://cdn.conekta.io/js/latest/conekta.js';
		script.async = 1;
		script.onload = () => {
			if (window.Conekta !== undefined) {
				window.Conekta.setPublishableKey(this.publicKey);
				window.Conekta.setLanguage("es");
				this.api = window.Conekta
			}
		};

		script.onerror = () => {
			throw new Error('Error: Conekta script wasn\'t loaded.')
		};
		document.body.appendChild(script)
	}



}

export default Conekta
