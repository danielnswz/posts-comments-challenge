import * as actionTypes from './actionTypes';

export const fetchAuthors = () => ({
	type: actionTypes.GET_AUTHORS,
});

export const selectAuthor = ({ id }) => ({
	type: actionTypes.SELECT_AUTHOR,
	payload: { selectedAuthor: id },
});

export const apiRequest = ({ method, url }) => ({
	type: actionTypes.API_REQUEST,
	payload: { meta: { method, url } },
});

export const apiSuccess = ({ response }) => ({
	type: actionTypes.API_SUCCESS,
	payload: { response },
});

export const apiError = ({ error }) => ({
	type: actionTypes.API_FAILURE,
	payload: { error },
});

export const setAuthors = ({ data }) => ({
	type: actionTypes.SET_AUTHORS,
	payload: data,
});

export const setSelectedAuthor = ({ id }) => ({
	type: actionTypes.SET_SELECTED_AUTHOR,
	payload: { id },
});
