import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../actions";
import { Link } from "react-router-dom";

class Sidebar extends Component {
	render() {
		const { categories, filterProducts } = this.props;
		if (categories) {
			return (
				<div className="col-lg-3">
					<h2 className="my-4">Category</h2>
					<div className="list-group">
						<Link
							onClick={() => filterProducts()}
							className="list-group-item"
							to=""
						>
							Clear
						</Link>
						{categories.map((item, index) => (
							<Link
								key={index}
								onClick={() => filterProducts(item.category)}
								className="list-group-item"
								to=""
							>
								{item.category} ({item.count})
							</Link>
						))}
					</div>
				</div>
			);
		} else return null;
	}
}

const mapStateToProps = state => ({
	categories: state.categories
});

const mapDispatchToProps = dispatch => ({
	filterProducts: filter => {
		dispatch(filterProducts(filter));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
