import * as actionTypes from './actionTypes';

export const initialState = {
	data: [],
	selected: null,
	errors: [],
	loading: false,
};
export const authorsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actionTypes.API_REQUEST: {
			return { ...state, loading: true };
		}
		case actionTypes.SET_AUTHORS: {
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
		case actionTypes.SET_SELECTED_AUTHOR: {
			return { ...state, selected: payload };
		}
		default:
			return state;
	}
};
