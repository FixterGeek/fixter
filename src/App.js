import React, { Component } from "react";
import { Routes } from "./routes";
import "./App.css";
import Nav from "./components/nav/NavDisplay";
import Footer from "./components/footer/Footer";
import "toastr/build/toastr.min.css";

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Nav />
					<Routes />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
