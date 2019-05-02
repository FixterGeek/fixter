const script = document.createElement('script')

class Conekta {
	constructor(publicKey) {
		this.publicKey = process.env.REACT_APP_NODE_ENV === 'production' ? process.env.REACT_APP_CONEKTA_CLIENT_ID_PRODUCTION : process.env.REACT_APP_CONEKTA_CLIENT_ID_DEV;
		//this.publicKey = "key_WjR6vbjKGjpeL4sQCwJYCVw" // this is production key
		this.api = null;
		this.setInWindow();
		//console.log(process.env.REACT_APP_CONEKTA_CLIENT_ID_DEV)
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
