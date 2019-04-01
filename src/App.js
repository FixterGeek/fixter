import React, { Component } from "react";
import { Routes } from "./routes";
import "./App.css";
import Nav from "./components/nav/NavDisplay";
import Footer from "./components/footer/Footer";
import "toastr/build/toastr.min.css";
import { MenuProvider } from './context/MenuContext'


class App extends Component {
	render() {
		return (
			<div>
				<MenuProvider>
					<Nav />
					<Routes />
					<Footer />
				</MenuProvider>
			</div>
		);
	}
}

export default App;
