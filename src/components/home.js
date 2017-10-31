import React, { Component } from "react";
import Sidebar from "./sidebar";
import Products from "./products";

class Home extends Component {
	render() {
		return (
			<div className="row home">
				<Sidebar />
				<Products />
			</div>
		);
	}
}

export default Home;
