import request from "request-promise";

const getProductsUri = "https://www.jasonbase.com/things/2MXJ.json";

export const actionType = {
	GET_PRODUCTS: "get_products",
	FILTER_PRODUCTS: "filter_products"
};

export function getProducts(params) {
	return async dispatch => {
		try {
			const response = await request.get(getProductsUri);
			dispatch({
				type: actionType.GET_PRODUCTS,
				payload: JSON.parse(response)
			});
		} catch (e) {
			console.error(e);
		}
	};
}

export function filterProducts(filter) {
	return dispatch => {
		dispatch({
			type: actionType.FILTER_PRODUCTS,
			payload: filter
		});
	};
}
