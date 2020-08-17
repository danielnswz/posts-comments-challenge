import * as actionTypes from './actionTypes';

export const fetchPublications = () => ({
	type: actionTypes.GET_PUBLICATIONS,
});

export const fetchSelectedPublication = ({ id, history }) => ({
	type: actionTypes.GET_SELECTED_PUBLICATION,
	payload: { id, history },
});

export const searchPublication = ({ searchTerms }) => ({
	type: actionTypes.SEARCH_PUBLICATION,
	payload: { searchTerms },
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

export const setPublications = ({ data }) => ({
	type: actionTypes.SET_PUBLICATIONS,
	payload: data,
});

export const setSearchTerms = ({ searchTerms }) => ({
	type: actionTypes.SET_SEARCH_TERMS,
	payload: searchTerms,
});

export const setSortBy = ({ sortBy }) => ({
	type: actionTypes.SET_SORT_BY,
	payload: sortBy,
});

export const setSelectedPublication = ({ data }) => ({
	type: actionTypes.SET_SELECTED_PUBLICATION,
	payload: data,
});
