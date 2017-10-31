import { actionType } from "../actions";

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.GET_PRODUCTS:
			return Object.assign(
				{},
				{
					items: action.payload.Items,
					categories: getCategories(action.payload.Items),
					allItems: action.payload.Items
				}
			);
		case actionType.FILTER_PRODUCTS:
			return Object.assign(
				{},
				{
					items: state.allItems.filter(item => {
						return action.payload
							? action.payload === item.category
							: item;
					}),
					categories: state.categories,
					allItems: state.allItems
				}
			);
		default:
			return state;
	}
};

export default reducer;

function getCategories(itemArray) {
	let hasSeen = {},
		i = 0,
		itemArrayLength = itemArray.length,
		out = [];

	for (; i < itemArrayLength; i++) {
		hasSeen[itemArray[i].category]
			? (hasSeen[itemArray[i].category] += 1)
			: (hasSeen[itemArray[i].category] = 1);
	}

	out = Object.keys(hasSeen)
		.map(category => {
			return { category: category, count: hasSeen[category] };
		})
		.sort(function(a, b) {
			return b.count - a.count;
		});
	return out;
}
