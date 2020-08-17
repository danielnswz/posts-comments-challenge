import * as actionTypes from './actionTypes';

export const initialState = {
	data: [],
	errors: [],
	selected: null,
	searchTerms: null,
	sort: 'desc',
	loading: false,
};
export const publicationsReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case actionTypes.API_REQUEST: {
			return { ...state, loading: true };
		}
		case actionTypes.SET_PUBLICATIONS: {
			return { ...state, data: payload };
		}
		case actionTypes.API_SUCCESS: {
			return { ...state, loading: false };
		}
		case actionTypes.API_FAILURE: {
			return {
				...state,
				errors: [payload],
				loading: false,
			};
		}
		case actionTypes.SET_SEARCH_TERMS: {
			return {
				...state,
				searchTerms: payload,
			};
		}
		case actionTypes.SET_SORT_BY: {
			return {
				...state,
				sort: payload,
			};
		}
		case actionTypes.SET_SELECTED_PUBLICATION: {
			return {
				...state,
				selected: payload,
			};
		}
		default:
			return state;
	}
};
