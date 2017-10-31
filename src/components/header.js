import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container">
						<Link className="navbar-brand" to="/">
							My Store
						</Link>

						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/aboutus">
									About Us
									<span className="sr-only" />
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
